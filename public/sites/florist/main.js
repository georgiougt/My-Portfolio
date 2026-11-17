/* Shared interaction layer: reveals, split headings, parallax, tabs, filters, counters. No dependencies. */
(function () {
  'use strict';
  var doc = document;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, c) { return Array.prototype.slice.call((c || doc).querySelectorAll(s)); };

  /* Split headings into words so each can rise out of a masked line */
  $('[data-split]').forEach(function (el) {
    var i = 0;
    var walk = function (node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (child) {
        if (child.nodeType === 3) {
          var frag = doc.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach(function (part) {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(doc.createTextNode(' ')); return; }
            var mask = doc.createElement('span');
            mask.className = 'w';
            var inner = doc.createElement('span');
            inner.className = 'w-i';
            inner.style.transitionDelay = (i++ * 55) + 'ms';
            inner.textContent = part;
            mask.appendChild(inner);
            frag.appendChild(mask);
          });
          node.replaceChild(frag, child);
        } else if (child.nodeType === 1 && child.tagName !== 'BR') {
          walk(child);
        }
      });
    };
    walk(el);
  });

  /* Reveal on scroll */
  var targets = $('[data-reveal], [data-split]');
  targets.forEach(function (el) {
    if (el.dataset.delay) el.style.setProperty('--d', el.dataset.delay + 'ms');
  });
  if (reduce || !('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    /* Anything already on screen at load is revealed on a timer, so the first view never waits on the observer */
    var vh0 = window.innerHeight;
    targets.forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < vh0 * 0.92 && r.bottom > 0) {
        setTimeout(function () { el.classList.add('is-in'); }, 80);
      } else {
        io.observe(el);
      }
    });
  }

  /* Count up */
  var counters = $('[data-count]');
  var runCount = function (el) {
    var end = parseFloat(el.dataset.count);
    var dec = (el.dataset.count.split('.')[1] || '').length;
    var fmt = function (v) {
      return v.toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec });
    };
    if (reduce) { el.textContent = fmt(end); return; }
    var t0 = null;
    var step = function (t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / 1600, 1);
      el.textContent = fmt(end * (1 - Math.pow(1 - p, 4)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if ('IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { runCount(e.target); cio.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { cio.observe(el); });
  } else {
    counters.forEach(runCount);
  }

  /* Header state + parallax, one rAF-throttled scroll handler */
  var header = doc.querySelector('[data-header]');
  var layers = reduce ? [] : $('[data-parallax]');
  var ticking = false;
  var onScroll = function () {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle('is-scrolled', y > 40);
    var vh = window.innerHeight;
    layers.forEach(function (el) {
      var r = el.parentElement.getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) return;
      var offset = (r.top + r.height / 2 - vh / 2) * parseFloat(el.dataset.parallax || 0.1);
      el.style.transform = 'translate3d(0,' + (-offset).toFixed(1) + 'px,0)';
    });
    ticking = false;
  };
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  /* Mobile navigation */
  var toggle = doc.querySelector('[data-nav-toggle]');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = doc.body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    $('[data-nav] a').forEach(function (a) {
      a.addEventListener('click', function () {
        doc.body.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* Tabs */
  $('[data-tabs]').forEach(function (root) {
    var tabs = $('[data-tab]', root);
    var panels = $('[data-panel]', root);
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) {
          var on = t === tab;
          t.classList.toggle('is-active', on);
          t.setAttribute('aria-selected', on ? 'true' : 'false');
        });
        panels.forEach(function (p) {
          var on = p.dataset.panel === tab.dataset.tab;
          p.hidden = !on;
          if (on) { p.classList.remove('is-shown'); void p.offsetWidth; p.classList.add('is-shown'); }
        });
      });
    });
  });

  /* Filters */
  $('[data-filter-group]').forEach(function (root) {
    var buttons = $('[data-filter]', root);
    var items = $('[data-cat]', root);
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.classList.toggle('is-active', b === btn); });
        var f = btn.dataset.filter;
        items.forEach(function (it) {
          var show = f === 'all' || it.dataset.cat.split(' ').indexOf(f) > -1;
          it.hidden = !show;
          if (show) { it.classList.remove('is-shown'); void it.offsetWidth; it.classList.add('is-shown'); }
        });
      });
    });
  });

  /* Drag to scroll rails */
  $('[data-drag]').forEach(function (rail) {
    var down = false, startX = 0, startLeft = 0, moved = false;
    rail.addEventListener('pointerdown', function (e) {
      if (e.pointerType !== 'mouse') return;
      down = true; moved = false; startX = e.clientX; startLeft = rail.scrollLeft;
    });
    window.addEventListener('pointermove', function (e) {
      if (!down) return;
      var dx = e.clientX - startX;
      if (Math.abs(dx) > 4) { moved = true; rail.classList.add('is-dragging'); }
      rail.scrollLeft = startLeft - dx;
    });
    window.addEventListener('pointerup', function () {
      down = false; rail.classList.remove('is-dragging');
    });
    rail.addEventListener('click', function (e) {
      if (moved) { e.preventDefault(); e.stopPropagation(); }
    }, true);
  });
  $('[data-rail-prev], [data-rail-next]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var rail = doc.querySelector(btn.dataset.railPrev || btn.dataset.railNext);
      if (!rail) return;
      var dir = btn.hasAttribute('data-rail-next') ? 1 : -1;
      rail.scrollBy({ left: dir * rail.clientWidth * 0.7, behavior: reduce ? 'auto' : 'smooth' });
    });
  });

  /* Demo forms: no backend, confirm inline */
  $('[data-demo-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = form.querySelector('[data-form-note]');
      if (note) { note.textContent = form.dataset.demoForm || 'Thank you. We will be in touch shortly.'; note.classList.add('is-shown'); }
      form.reset();
    });
  });

  $('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
