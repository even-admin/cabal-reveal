/* ═══════════════════════════════════════════════════════════════
   CABAL · Landing v1 JS
   - Custom cursor with magnetic hover
   - Scroll progress bar
   - Nav state on scroll
   - Reveal animations (IntersectionObserver)
   - Animated counters
   - Testimonial rotator
   =============================================================== */

(function () {
  'use strict';

  // ─── Custom cursor + magnetic buttons ─────────────────────────
  const cursor = document.getElementById('cursor');
  const dot = cursor?.querySelector('.cursor-dot');
  const ring = cursor?.querySelector('.cursor-ring');
  const isTouch = matchMedia('(hover: none), (pointer: coarse)').matches;

  if (cursor && !isTouch) {
    let mx = -100, my = -100, rx = -100, ry = -100;
    window.addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
      if (dot) { dot.style.left = mx + 'px'; dot.style.top = my + 'px'; }
    }, { passive: true });
    function raf() {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ring) { ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; }
      requestAnimationFrame(raf);
    }
    raf();
    document.addEventListener('mouseleave', () => cursor.classList.add('hidden'));
    document.addEventListener('mouseenter', () => cursor.classList.remove('hidden'));

    // Hover enlargement on interactive elements
    document.querySelectorAll('a, button, [data-magnetic], summary').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    // Magnetic buttons
    document.querySelectorAll('[data-magnetic]').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        btn.style.setProperty('--mx', (x * 0.25) + 'px');
        btn.style.setProperty('--my', (y * 0.25) + 'px');
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.setProperty('--mx', '0px');
        btn.style.setProperty('--my', '0px');
      });
    });
  }

  // ─── Scroll progress + nav state ──────────────────────────────
  const scrollBar = document.getElementById('scrollBar');
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    const pct = Math.min(1, Math.max(0, scrollY / max));
    if (scrollBar) scrollBar.style.width = (pct * 100) + '%';
    if (nav) nav.classList.toggle('scrolled', scrollY > 12);
  }, { passive: true });

  // ─── Reveal on scroll ─────────────────────────────────────────
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, [data-observe]').forEach(el => io.observe(el));

  // Hero reveals fire immediately on load
  requestAnimationFrame(() => {
    document.querySelectorAll('.hero .reveal').forEach(el => el.classList.add('in'));
  });

  // ─── Counters ─────────────────────────────────────────────────
  const countIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const dur = 1600;
      const t0 = performance.now();
      function tick(t) {
        const p = Math.min(1, (t - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
        el.textContent = Math.round(eased * target).toLocaleString('es-MX');
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target.toLocaleString('es-MX');
      }
      requestAnimationFrame(tick);
      countIO.unobserve(el);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll('.count').forEach(el => countIO.observe(el));

  // ─── Testimonial rotator ──────────────────────────────────────
  const testimonials = [
    {
      quote: 'Me corrieron sin pagarme nada después de ocho años. El Lic. Cabal escuchó mi caso un sábado por WhatsApp, y en cuatro meses recuperé mi liquidación completa <em>más la indemnización.</em> Lo que más me sorprendió fue que nunca me cobró hasta el final — tal como lo prometió.',
      name: 'María Gabriela Hernández',
      role: 'Administradora · Villahermosa · Exp. 2024-312'
    },
    {
      quote: 'Llevo una empresa de construcción. Nos demandaron por un despido que no fue así. El despacho armó la defensa completa en menos de dos semanas. <em>Ganamos en primera instancia</em> — y el juez los obligó a pagar costas.',
      name: 'Roberto Jiménez Paz',
      role: 'Director · Villahermosa · Exp. 2023-188'
    },
    {
      quote: 'Sufrí un accidente en obra y el patrón quería pagarme con un finiquito raquítico. El Lic. Cabal revisó todo y me dijo exactamente qué me correspondía. Recuperé <em>cinco veces</em> lo que ofrecían, más la pensión del IMSS que no habían tramitado.',
      name: 'Luis Fernando Aguilar',
      role: 'Albañil · Centro, Tabasco · Exp. 2024-047'
    }
  ];
  let tIdx = 0;
  const tQuote = document.querySelector('.t-quote');
  const tName = document.querySelector('.t-name');
  const tRole = document.querySelector('.t-role');
  const tCur = document.getElementById('tCur');
  const tTot = document.getElementById('tTot');
  if (tTot) tTot.textContent = testimonials.length;
  function renderT(i, dir = 1) {
    if (!tQuote) return;
    tQuote.style.transition = 'opacity 180ms ease-out, transform 180ms ease-out';
    tQuote.style.opacity = 0;
    tQuote.style.transform = `translateX(${dir * -8}px)`;
    setTimeout(() => {
      const t = testimonials[i];
      tQuote.innerHTML = t.quote;
      tName.textContent = t.name;
      tRole.textContent = t.role;
      if (tCur) tCur.textContent = i + 1;
      tQuote.style.transform = `translateX(${dir * 8}px)`;
      requestAnimationFrame(() => {
        tQuote.style.transition = 'opacity 280ms var(--ease-out), transform 280ms var(--ease-out)';
        tQuote.style.opacity = 1;
        tQuote.style.transform = 'translateX(0)';
      });
    }, 200);
  }
  document.querySelector('[data-t-prev]')?.addEventListener('click', () => {
    tIdx = (tIdx - 1 + testimonials.length) % testimonials.length;
    renderT(tIdx, -1);
  });
  document.querySelector('[data-t-next]')?.addEventListener('click', () => {
    tIdx = (tIdx + 1) % testimonials.length;
    renderT(tIdx, 1);
  });

  // ─── Mobile nav drawer ────────────────────────────────────────
  const burger = document.getElementById('navBurger');
  const drawer = document.getElementById('navDrawer');
  const body = document.body;
  function setNavOpen(open) {
    body.classList.toggle('nav-open', open);
    burger?.setAttribute('aria-expanded', open ? 'true' : 'false');
    drawer?.setAttribute('aria-hidden', open ? 'false' : 'true');
    body.style.overflow = open ? 'hidden' : '';
  }
  burger?.addEventListener('click', () => setNavOpen(!body.classList.contains('nav-open')));
  drawer?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => setNavOpen(false));
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setNavOpen(false);
  });
})();
