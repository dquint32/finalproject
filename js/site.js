/*
  Tienda Salvadoreña — site behaviors
  File: js/site.js

  1. Mobile navigation toggle
  2. Live store-hours badge ("Abierto ahora" / "Cerrado")

  Language switching stays in js/lang-toggle.js. This file only watches the
  <html lang> attribute so the badge re-renders when the language changes.
*/
(function () {
  'use strict';

  /* ------------------------------------------------------------------
     1. MOBILE NAVIGATION
     ------------------------------------------------------------------ */
  function initNav() {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.getElementById('primary-nav');
    if (!toggle || !nav) return;

    function setOpen(open) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    }

    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });

    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) setOpen(false);
    });
  }

  /* ------------------------------------------------------------------
     2. STORE HOURS BADGE
     Hours are evaluated in Denver time, so the badge is right no matter
     where the visitor is. Edit STORE_HOURS if the schedule changes.
     ------------------------------------------------------------------ */
  var STORE_TIME_ZONE = 'America/Denver';
  var STORE_HOURS = [            // index 0 = Sunday; 24-hour clock
    { open: 10, close: 18 },     // Domingo
    { open: 10, close: 19 },     // Lunes
    { open: 10, close: 19 },     // Martes
    { open: 10, close: 19 },     // Miércoles
    { open: 10, close: 19 },     // Jueves
    { open: 10, close: 19 },     // Viernes
    { open: 10, close: 19 }      // Sábado
  ];

  var TEXT = {
    es: {
      open: 'Abierto ahora',
      closed: 'Cerrado',
      until: 'hasta las {time}',
      opensToday: 'abre hoy a las {time}',
      opensTomorrow: 'abre mañana a las {time}'
    },
    en: {
      open: 'Open now',
      closed: 'Closed',
      until: 'until {time}',
      opensToday: 'opens today at {time}',
      opensTomorrow: 'opens tomorrow at {time}'
    }
  };

  var WEEKDAYS = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

  function denverNow() {
    var parts = new Intl.DateTimeFormat('en-US', {
      timeZone: STORE_TIME_ZONE,
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
      hourCycle: 'h23'
    }).formatToParts(new Date());

    var out = {};
    parts.forEach(function (part) { out[part.type] = part.value; });
    return {
      day: WEEKDAYS[out.weekday],
      hours: (parseInt(out.hour, 10) % 24) + parseInt(out.minute, 10) / 60
    };
  }

  function formatHour(hour) {
    var suffix = hour >= 12 ? 'PM' : 'AM';
    var h = hour % 12 === 0 ? 12 : hour % 12;
    return h + ' ' + suffix;
  }

  function getStatus() {
    var now = denverNow();
    var today = STORE_HOURS[now.day];

    if (today && now.hours >= today.open && now.hours < today.close) {
      return { state: 'open', day: now.day, detail: 'until', time: formatHour(today.close) };
    }
    if (today && now.hours < today.open) {
      return { state: 'closed', day: now.day, detail: 'opensToday', time: formatHour(today.open) };
    }
    var tomorrow = STORE_HOURS[(now.day + 1) % 7];
    return { state: 'closed', day: now.day, detail: 'opensTomorrow', time: formatHour(tomorrow.open) };
  }

  function renderStatus() {
    var badges = document.querySelectorAll('[data-store-status]');
    var tables = document.querySelectorAll('[data-hours-table]');
    if (!badges.length && !tables.length) return;

    var status;
    try {
      status = getStatus();
    } catch (error) {
      return; // Very old browser without time-zone support: keep the static hours
    }

    var lang = document.documentElement.lang === 'en' ? 'en' : 'es';
    var text = TEXT[lang];
    var label = text[status.state];
    var detail = text[status.detail].replace('{time}', status.time);

    badges.forEach(function (badge) {
      badge.dataset.state = status.state;
      badge.textContent = '';
      var strong = document.createElement('span');
      strong.textContent = label;
      var extra = document.createElement('span');
      extra.className = 'status-badge__detail';
      extra.textContent = '· ' + detail;
      badge.append(strong, ' ', extra);
      badge.hidden = false;
    });

    // Highlight today's row in the weekly hours table (rows run Sunday → Saturday)
    tables.forEach(function (table) {
      Array.prototype.forEach.call(table.querySelectorAll('tbody tr'), function (row, index) {
        row.classList.toggle('is-today', index === status.day);
      });
    });
  }

  function init() {
    initNav();
    renderStatus();
    setInterval(renderStatus, 60 * 1000);

    // Re-render when lang-toggle.js switches language
    new MutationObserver(renderStatus).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['lang']
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
