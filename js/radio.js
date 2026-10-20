/*
  Tienda Salvadoreña — Radio Tienda 1991 AM
  File: js/radio.js

  A small, opt-in "radio" that plays an ORIGINAL marimba-style tune written for
  this site, synthesized live with the Web Audio API (no audio files, nothing
  licensed, nothing downloaded). It never autoplays: sound starts only after the
  visitor presses the button, and a floating "turn off" chip stays on screen
  while it plays so it can be stopped from anywhere on the page.

  Want to use a real recording instead? Set AUDIO_SRC to an MP3 you have the
  rights to (e.g. 'audio/marimba.mp3') and the button will play that file.
*/
(function () {
  'use strict';

  var AUDIO_SRC = '';            // optional licensed recording; empty = built-in synth

  var TEXT = {
    es: { on: 'Apagar la marimba', off: 'Encender la marimba', statusOn: 'En el aire: «Son de la tienda»', statusOff: 'Apagado', chip: '♪ Apagar la marimba', unsupported: 'Su navegador no puede tocar audio.' },
    en: { on: 'Turn off the marimba', off: 'Turn on the marimba', statusOn: 'On air: “Son de la tienda”', statusOff: 'Off', chip: '♪ Turn off marimba', unsupported: 'Your browser can’t play audio.' }
  };

  /* ---- The tune: G major, 3/4, son-style waltz. [midi note, beats] ---- */
  var MELODY = [
    [71,1],[74,1],[79,1],  [78,1],[76,1],[74,1],  [72,1],[69,1],[66,1],  [69,3],
    [72,1],[76,1],[74,1],  [72,1],[71,1],[69,1],  [71,1],[67,1],[71,1],  [74,3],
    [76,1],[79,1],[76,1],  [72,1],[76,1],[79,1],  [74,1],[71,1],[67,1],  [71,1],[74,1],[79,1],
    [78,1],[76,1],[74,1],  [72,1],[69,1],[66,1],  [67,1],[71,1],[74,1],  [67,3]
  ];
  // One chord per bar (root, then two chord tones for the "pah-pah")
  var G = [43, 47, 50], C = [48, 52, 55], D7 = [50, 54, 60];
  var BASS = [G, G, D7, D7, D7, D7, G, G, C, C, G, G, D7, D7, G, G];

  var BPM = 138;
  var BEAT = 60 / BPM;

  var ctx = null, master = null, playing = false, timer = null;
  var nextTime = 0;
  var audioEl = null;
  var radio, btn, label, status, chip;

  function lang() { return document.documentElement.lang === 'en' ? 'en' : 'es'; }
  function freq(midi) { return 440 * Math.pow(2, (midi - 69) / 12); }

  /* Marimba-ish voice: a sine fundamental plus a quickly fading ~4x overtone */
  function strike(midi, time, velocity, length) {
    var f = freq(midi);
    var g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, time);
    g.gain.exponentialRampToValueAtTime(velocity, time + 0.006);
    g.gain.exponentialRampToValueAtTime(0.0001, time + length);
    g.connect(master);

    var o1 = ctx.createOscillator();
    o1.type = 'sine';
    o1.frequency.setValueAtTime(f, time);
    o1.connect(g);

    var g2 = ctx.createGain();
    g2.gain.setValueAtTime(0.0001, time);
    g2.gain.exponentialRampToValueAtTime(velocity * 0.28, time + 0.004);
    g2.gain.exponentialRampToValueAtTime(0.0001, time + 0.12);
    g2.connect(master);
    var o2 = ctx.createOscillator();
    o2.type = 'sine';
    o2.frequency.setValueAtTime(f * 3.93, time);
    o2.connect(g2);

    o1.start(time); o2.start(time);
    o1.stop(time + length + 0.05); o2.stop(time + 0.2);
  }

  /* Long notes get a marimba "roll" (fast repeated strokes) */
  function playMelodyNote(note, time) {
    var midi = note[0], beats = note[1];
    if (beats >= 2) {
      var strokes = Math.round(beats * 6);
      for (var i = 0; i < strokes; i++) {
        strike(midi, time + i * (BEAT / 6), i === 0 ? 0.5 : 0.28, 0.35);
      }
    } else {
      strike(midi, time, 0.5, 0.9);
    }
  }

  function playBass(chord, beat, time) {
    if (beat === 0) strike(chord[0], time, 0.38, 1.1);
    else {
      strike(chord[1], time, 0.2, 0.5);
      strike(chord[2], time, 0.16, 0.5);
    }
  }

  // Scheduler: walks the score one beat at a time, a little ahead of the clock
  var melodyIndex = 0, melodyNextBeat = 0, totalBeats = 0;
  function scheduler() {
    while (nextTime < ctx.currentTime + 0.2) {
      if (totalBeats === melodyNextBeat) {
        var note = MELODY[melodyIndex];
        playMelodyNote(note, nextTime);
        melodyNextBeat += note[1];
        melodyIndex = (melodyIndex + 1) % MELODY.length;
      }
      var barIndex = Math.floor(totalBeats / 3) % BASS.length;
      playBass(BASS[barIndex], totalBeats % 3, nextTime);

      totalBeats++;
      if (totalBeats >= 48) {               // loop: 16 bars of 3/4
        totalBeats = 0; melodyNextBeat = 0; melodyIndex = 0;
      }
      nextTime += BEAT;
    }
  }

  function startSynth() {
    var Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return false;
    if (!ctx) {
      ctx = new Ctx();
      master = ctx.createGain();
      master.gain.value = 0.16;            // gentle background level
      var lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = 3200;
      master.connect(lp);
      lp.connect(ctx.destination);
    }
    if (ctx.state === 'suspended') ctx.resume();
    master.gain.cancelScheduledValues(ctx.currentTime);
    master.gain.setValueAtTime(0.16, ctx.currentTime);
    totalBeats = 0; melodyNextBeat = 0; melodyIndex = 0;
    nextTime = ctx.currentTime + 0.08;
    timer = window.setInterval(scheduler, 25);
    scheduler();
    return true;
  }

  function stopSynth() {
    if (timer) { window.clearInterval(timer); timer = null; }
    if (ctx && master) {
      master.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.08);   // quick fade, no click
    }
  }

  function startFile() {
    if (!audioEl) {
      audioEl = new Audio(AUDIO_SRC);
      audioEl.loop = true;
      audioEl.volume = 0.5;
    }
    var p = audioEl.play();
    if (p && p.catch) p.catch(function () { setPlaying(false); });
    return true;
  }

  function render() {
    var t = TEXT[lang()];
    if (label) label.textContent = playing ? t.on : t.off;
    if (status) status.textContent = playing ? t.statusOn : t.statusOff;
    if (btn) btn.setAttribute('aria-pressed', String(playing));
    if (radio) radio.classList.toggle('is-on', playing);
    if (chip) {
      chip.textContent = t.chip;
      chip.hidden = !playing;
    }
  }

  function setPlaying(on) {
    if (on === playing) return;
    if (on) {
      var ok = AUDIO_SRC ? startFile() : startSynth();
      if (!ok) {
        if (status) status.textContent = TEXT[lang()].unsupported;
        return;
      }
    } else {
      if (AUDIO_SRC && audioEl) audioEl.pause();
      else stopSynth();
    }
    playing = on;
    render();
  }

  function init() {
    radio = document.querySelector('.radio');
    btn = document.querySelector('[data-radio-toggle]');
    if (!radio || !btn) return;
    label = btn.querySelector('[data-radio-label]');
    status = document.querySelector('[data-radio-status]');

    chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'radio-chip';
    chip.hidden = true;
    document.body.appendChild(chip);

    btn.addEventListener('click', function () { setPlaying(!playing); });
    chip.addEventListener('click', function () { setPlaying(false); btn.focus({ preventScroll: true }); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && playing) setPlaying(false);
    });

    // Re-label when js/lang-toggle.js switches language
    new MutationObserver(render).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    render();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
