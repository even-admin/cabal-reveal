/* CABAL — Landing page behavior
   Hydrates all copy from window.COPY, wires interactions, WhatsApp deeplinks, FAQ, form. */

(function () {
  const C = window.COPY;
  if (!C) { console.error('copy.js not loaded'); return; }

  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const text = (id, val) => { const el = $('#' + id); if (el) el.textContent = val; };

  /* ─── 1. NAV CTA ─── */
  text('nav-cta', C.nav.cta);

  /* ─── 2. HERO ─── */
  $('#hero-kicker').textContent = C.hero.kicker;
  $('#h1a').textContent = C.hero.headline1;
  $('#h1b').textContent = C.hero.headline2;
  $('#h1c').childNodes[0]?.remove;
  // Rebuild third H1 line with em inside:
  const h1c = $('#h1c');
  h1c.innerHTML = `${C.hero.headline3} <em>${C.hero.headline4}</em>`;
  text('hero-sub', C.hero.sub);
  text('hero-cta', C.hero.ctaPrimary);
  text('hero-cta2', C.hero.ctaSecondary);
  text('hero-trust', C.trustLine);

  /* ─── 3. TRUST BAR ─── */
  $('#trust-grid').innerHTML = C.trustStats.map(s => `
    <div class="trust-item">
      <div class="value">${s.value}</div>
      <div class="label">${s.label}</div>
    </div>
  `).join('');

  /* ─── 4. HOOK ─── */
  text('hook-kicker', C.hook.kicker);
  text('hook-t1', C.hook.title1);
  text('hook-t2', C.hook.title2);
  $('#hook-paragraphs').innerHTML = C.hook.paragraphs.map((p, i) => {
    // Drop-in claret highlight for the 3rd paragraph's first 3 words for texture
    if (i === 2) {
      const parts = p.split(' ');
      return `<p><span class="drop">${parts.slice(0,3).join(' ')}</span> ${parts.slice(3).join(' ')}</p>`;
    }
    return `<p>${p}</p>`;
  }).join('');
  text('hook-cta', C.hook.cta);
  text('hook-trust', C.trustLine);

  const HOOK_CLIENTS = [
    { year: '1995—', name: 'Home Depot' },
    { year: '2002—', name: 'Grupo Proteak' },
    { year: '2008—', name: 'Naviera Integral' },
    { year: '2010—', name: 'Telas Parisina' },
    { year: '2015—', name: 'KFC · Pizza Hut · Applebee\'s' },
  ];
  $('#hook-clients').innerHTML = HOOK_CLIENTS.map(c => `
    <div class="hook-client">
      <div class="year">${c.year}</div>
      <div class="name">${c.name}</div>
    </div>
  `).join('');

  /* ─── 5. PROBLEMS ─── */
  text('prob-kicker', C.problems.kicker);
  text('prob-t1', C.problems.title1);
  text('prob-t2', C.problems.title2);
  text('prob-sub', C.problems.sub);
  $('#problems-grid').innerHTML = C.problems.items.map(p => `
    <a class="problem-card" data-wa-msg="${p.msg}" href="#">
      <div class="pc-head">
        <span class="pc-num">nº ${p.num}</span>
        <span class="pc-arrow">→</span>
      </div>
      <h3 class="pc-q">${p.q}</h3>
      <p class="pc-desc">${p.d}</p>
      <div class="pc-cta">${C.problems.cardCta}</div>
    </a>
  `).join('');

  /* ─── 6. WHY ─── */
  text('why-kicker', C.why.kicker);
  text('why-t1', C.why.title1);
  text('why-t2', C.why.title2);
  $('#why-grid').innerHTML = C.why.items.map(w => `
    <div class="why-item">
      <span class="why-num">nº ${w.num}</span>
      <h3 class="why-title">${w.title}</h3>
      <p class="why-body">${w.body}</p>
    </div>
  `).join('');

  /* ─── 7. BIO ─── */
  text('bio-kicker', C.bio.kicker);
  text('bio-first', C.bio.firstName);
  text('bio-last', C.bio.lastName);
  text('bio-role', C.bio.title);
  $('#bio-quote').textContent = `"${C.bio.quote}"`;
  $('#bio-bullets').innerHTML = C.bio.bullets.map(b => `<li>${b}</li>`).join('');
  $('#bio-creds').innerHTML = C.bio.credentials.map(c => `
    <div><div class="k">${c.k}</div><div class="v">${c.v}</div></div>
  `).join('');
  text('bio-clients-label', C.bio.clientsLabel);
  $('#bio-clients-list').innerHTML = C.bio.clients.map(c => `<span class="chip">${c}</span>`).join('');

  /* ─── 8. PROCESS ─── */
  text('proc-kicker', C.process.kicker);
  text('proc-t1', C.process.title1);
  text('proc-t2', C.process.title2);
  $('#process-grid').innerHTML = C.process.steps.map(s => `
    <div class="process-step">
      <span class="ps-num">${s.num}</span>
      <h3 class="ps-title">${s.title}</h3>
      <p class="ps-body">${s.body}</p>
    </div>
  `).join('');
  text('proc-cta', C.process.cta);
  text('proc-trust', C.trustLine);

  /* ─── 9. TESTIMONIALS ─── */
  text('test-kicker', C.testimonials.kicker);
  text('test-t1', C.testimonials.title1);
  text('test-t2', C.testimonials.title2);
  text('test-note', C.testimonials.note);
  $('#testimonials-grid').innerHTML = C.testimonials.items.map(t => `
    <article class="testimonial">
      <div class="mark">"</div>
      <p class="quote">${t.quote}</p>
      <div class="meta">
        <div class="who">— ${t.who}</div>
        <div class="case">${t.case}</div>
      </div>
    </article>
  `).join('');

  /* ─── 10. FAQ ─── */
  text('faq-kicker', C.faq.kicker);
  text('faq-t1', C.faq.title1);
  text('faq-t2', C.faq.title2);
  $('#faq-list').innerHTML = C.faq.items.map((it, i) => `
    <li class="faq-item${i === 0 ? ' open' : ''}">
      <button class="faq-btn" aria-expanded="${i === 0}">
        <span class="faq-num">${String(i+1).padStart(2,'0')}</span>
        <span class="faq-q">${it.q}</span>
        <span class="faq-toggle">+</span>
      </button>
      <div class="faq-a"><div class="faq-a-inner"><p>${it.a}</p></div></div>
    </li>
  `).join('');

  $$('.faq-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      // Close siblings for cleaner UX
      $$('.faq-item.open').forEach(x => { if (x !== item) x.classList.remove('open'); });
      item.classList.toggle('open', !isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
    });
  });

  /* ─── 11. CONTACT ─── */
  text('cont-kicker', C.contactSection.kicker);
  text('cont-t1', C.contactSection.title1);
  text('cont-t2', C.contactSection.title2);
  text('cont-sub', C.contactSection.sub);
  $('#cont-addr').textContent = C.contact.address;
  $('#cont-phones').innerHTML = C.contact.phones.map(p => `<a href="tel:${p.replace(/\s/g,'')}">${p}</a>`).join(' · ');
  $('#cont-email').innerHTML = `<a href="mailto:${C.contact.email}">${C.contact.email}</a>`;
  text('cont-wa-btn', C.contactSection.waBtn);
  text('form-sub', C.contactSection.formSub);
  text('form-submit', C.contactSection.submit);
  text('form-disc', C.contactSection.formDisclaimer);

  /* ─── 12. FOOTER ─── */
  $('#foot-contact').innerHTML = `
    <li>${C.contact.address}</li>
    ${C.contact.phones.map(p => `<li><a href="tel:${p.replace(/\s/g,'')}">${p}</a></li>`).join('')}
  `;
  $('#foot-email').innerHTML = `<a href="mailto:${C.contact.email}">${C.contact.email}</a>`;
  $('#foot-disc').textContent = C.footer.disclaimer;
  $('#foot-meta').innerHTML = C.footer.legal.map(l => `<span>${l}</span>`).join('');
  $('#foot-copy').textContent = C.footer.copyright;

  /* ─── FAB bubble ─── */
  text('fab-b-title', C.fab.bubbleTitle);
  text('fab-b-body', C.fab.bubbleBody);

  const bubble = $('#fab-bubble');
  const seen = sessionStorage.getItem('cabal-fab-seen');
  if (!seen) {
    setTimeout(() => bubble.classList.add('show'), 5200);
    setTimeout(() => bubble.classList.remove('show'), 18000);
  }
  $('#fab-close').addEventListener('click', () => {
    bubble.classList.remove('show');
    sessionStorage.setItem('cabal-fab-seen', '1');
  });

  /* ─── Wire ALL WhatsApp deep links ─── */
  const WA_MSGS = {
    default: C.wa.defaultMsg,
    hero:    C.hero.waMsg,
    hook:    C.hook.waMsg,
    process: C.process.waMsg,
    contact: C.wa.defaultMsg,
    footer:  C.wa.defaultMsg,
    fab:     C.fab.waMsg,
  };
  $$('[data-wa]').forEach(el => {
    const key = el.dataset.wa;
    el.href = C.wa.url(WA_MSGS[key] || C.wa.defaultMsg);
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
  });
  // Problem cards — per-card pre-filled messages
  $$('[data-wa-msg]').forEach(el => {
    el.href = C.wa.url(el.dataset.waMsg);
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
  });

  /* ─── Sticky nav shadow on scroll ─── */
  const nav = $('#nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ─── Form validation + submit ─── */
  const form = $('#contact-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const fields = [
      { name: 'name',  el: $('#f-name'),  test: v => v.trim().length >= 2 },
      { name: 'phone', el: $('#f-phone'), test: v => v.replace(/\D/g,'').length >= 7 },
      { name: 'desc',  el: $('#f-desc'),  test: v => v.trim().length >= 10 },
    ];
    let ok = true;
    fields.forEach(f => {
      const invalid = !f.test(f.el.value);
      f.el.closest('.field').classList.toggle('invalid', invalid);
      if (invalid && ok) { f.el.focus(); ok = false; }
    });
    if (!ok) return;
    // Success path — no backend; demo mode.
    form.classList.add('sent');
    // Optional: also open WhatsApp with the user's message pre-filled.
    const name = $('#f-name').value.trim();
    const desc = $('#f-desc').value.trim();
    const msg = `Hola, soy ${name}. ${desc}`;
    setTimeout(() => { window.open(C.wa.url(msg), '_blank'); }, 400);
  });

  // Clear invalid state as user types
  $$('.field input, .field textarea').forEach(el => {
    el.addEventListener('input', () => el.closest('.field').classList.remove('invalid'));
  });
})();
