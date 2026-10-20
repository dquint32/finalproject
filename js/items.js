/*
  Tienda Salvadoreña — product gallery (items.html)
  File: js/items.js

  1. Category filter buttons (also reads ?cat=food from home-page links)
  2. Photo zoom in a native <dialog> (Esc and the × button close it)
*/
(function () {
  'use strict';

  var gallery = document.getElementById('product-gallery');
  if (!gallery) return;
  var tiles = Array.prototype.slice.call(gallery.querySelectorAll('.tile'));
  var buttons = Array.prototype.slice.call(document.querySelectorAll('.filter-btn'));

  /* 1. FILTERS ----------------------------------------------------------- */
  function filter(category, scroll) {
    tiles.forEach(function (tile) {
      tile.hidden = !(category === 'all' || tile.dataset.category === category);
    });
    buttons.forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.dataset.category === category));
    });
    if (scroll && window.innerWidth < 768) {
      gallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () { filter(btn.dataset.category, true); });
  });

  var requested = new URLSearchParams(window.location.search).get('cat');
  if (requested && buttons.some(function (b) { return b.dataset.category === requested; })) {
    filter(requested, false);
  }

  /* 2. ZOOM DIALOG -------------------------------------------------------- */
  var dialog = document.getElementById('zoom');
  if (!dialog || typeof dialog.showModal !== 'function') return;   // very old browsers: no zoom
  var zoomImg = dialog.querySelector('img');
  var zoomCaption = dialog.querySelector('.zoom__caption');

  gallery.addEventListener('click', function (event) {
    var btn = event.target.closest('.tile__btn');
    if (!btn) return;
    var img = btn.querySelector('img');
    zoomImg.src = img.currentSrc || img.src;
    zoomImg.alt = img.alt;
    zoomCaption.textContent = btn.querySelector('.shelf-tag__name').textContent;
    dialog.showModal();
  });

  dialog.querySelector('.zoom__close').addEventListener('click', function () { dialog.close(); });
  // Click on the dark backdrop closes it too
  dialog.addEventListener('click', function (event) {
    if (event.target === dialog) dialog.close();
  });
})();
