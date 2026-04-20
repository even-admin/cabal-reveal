/* ═══════════════════════════════════════════════════════════════════
   REVEAL · controller
   - Drives Act I animation on first-view
   - Tracks current act → updates rail / header / background-aware theming
   - reveal-on-enter IntersectionObserver for Acts II+
   - Keyboard nav (↓ ↑ Space)
   - localStorage to remember scroll position
   ═══════════════════════════════════════════════════════════════════ */

(function () {
  const reveal       = document.getElementById('reveal');
  const rail         = document.querySelector('.rail');
  const railDots     = [...document.querySelectorAll('.rail-dot')];
  const head         = document.querySelector('.reveal-head');
  const headChapter  = document.getElementById('headChapter');
  const acts         = [...document.querySelectorAll('.act')];

  // New chrome (from landing): vertical progress rail + inline scroll hint
  const scrollBar    = document.getElementById('scrollBar');
  const progressV    = document.querySelector('.scroll-progress-v');
  const scrollHint   = document.getElementById('scrollHint');

  const CHAPTER_LABELS = [
    'Acto I · Identidad',
    'Acto II · Concepto',
    'Acto III · Sistema',
    'Acto IV · Producto',
    'Acto V · Estrategia',
    'Acto VI · Motor',
    'Acto VII · Brandbook',
  ];

  // ─── ACT I · LOGO ANIMATION ────────────────────────────────────────
  const actI       = document.querySelector('.act-i');
  const logoLockup = document.getElementById('logoLockup');
  const logoWord   = document.getElementById('logoWordmark');

  function playActI() {
    // Measure wordmark width so we can pre-shift the lockup, letting the monogram
    // sit at optical center during the bar-build, then slide to final position.
    function positionForEntrance() {
      logoWord.style.visibility = 'hidden';
      void logoWord.offsetWidth;
      const wordWidth = logoWord.getBoundingClientRect().width;
      // Read the actual flex gap so the optical-center shift matches the current
      // breakpoint (mobile overrides the gap to a smaller value).
      const gapStr = getComputedStyle(logoLockup).columnGap || getComputedStyle(logoLockup).gap || '29px';
      const gap = parseFloat(gapStr) || 29;
      const shift = (wordWidth + gap) / 2;
      logoLockup.style.setProperty('--shift-x', shift + 'px');
      logoWord.style.visibility = '';
      // Arm the animation after the shift lands
      requestAnimationFrame(() => actI.classList.add('anim'));
    }
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(positionForEntrance);
    } else {
      positionForEntrance();
    }
    // Slide lockup back to 0 at t=2000ms (wordmark reveal begins)
    setTimeout(() => { logoLockup.style.setProperty('--shift-x', '0px'); }, 2000);
    // Flip to light at t=4400ms
    setTimeout(() => { actI.classList.add('is-light'); }, 4400);
  }

  // Play on load (one-shot — no replay on scroll return)
  playActI();

  // ─── CURRENT ACT TRACKING ──────────────────────────────────────────
  let currentAct = 0;
  function setCurrentAct(idx) {
    if (idx === currentAct) return;
    currentAct = idx;
    railDots.forEach((d, i) => d.classList.toggle('is-current', i === idx));
    if (headChapter) headChapter.textContent = CHAPTER_LABELS[idx] || '';

    // Show rail + header only AFTER Act I has started to settle
    if (idx >= 1) {
      if (rail) rail.classList.add('is-visible');
      if (head) head.classList.add('is-visible');
    } else {
      if (rail) rail.classList.remove('is-visible');
      if (head) head.classList.remove('is-visible');
    }

    // Theme awareness — default is light ground (Acts II+), which is the
    // standard state. Act I also ends in light after t=4.4s, so no need
    // to toggle on-dark for the rail/header at act 0 (they're hidden anyway).
    if (rail) rail.classList.remove('on-dark');
    if (head) head.classList.remove('on-dark');
  }

  // ─── Scroll-driven act tracking (IO is unreliable in some embeds) ──
  function checkCurrentAct() {
    if (!reveal) return;
    const rootR = reveal.getBoundingClientRect();
    const vMid = rootR.top + rootR.height * 0.5;
    for (let i = acts.length - 1; i >= 0; i--) {
      const r = acts[i].getBoundingClientRect();
      if (r.top <= vMid) {
        const idx = parseInt(acts[i].dataset.act, 10);
        setCurrentAct(idx);
        return;
      }
    }
  }

  // ─── reveal-on-enter animation ─────────────────────────────────────
  // Scroll-driven reveal (IntersectionObserver is unreliable in some embed contexts).
  const revealEls = [...document.querySelectorAll('.reveal-on-enter')];
  function checkRevealEls() {
    if (!reveal) return;
    const rootR = reveal.getBoundingClientRect();
    const threshold = rootR.top + rootR.height * 0.85; // element enters at 85% of viewport
    revealEls.forEach((el) => {
      if (el.classList.contains('is-in')) return;
      const r = el.getBoundingClientRect();
      if (r.top < threshold) {
        const delay = parseInt(el.dataset.delay || '0', 10);
        setTimeout(() => el.classList.add('is-in'), delay);
      }
    });
  }
  // ─── Scroll watcher (setInterval — survives backgrounding and
  //     works reliably across embed contexts). ───
  setInterval(() => {
    checkRevealEls();
    checkCurrentAct();
    checkKineticTrigger();
  }, 100);

  // Debug handle — lets us verify from DevTools / eval that refs resolved.
  window.__revealDebug = {
    checkKineticTrigger: () => checkKineticTrigger(),
    playKinetic: () => playKinetic(),
    getKWordsState: () => [...document.querySelectorAll('.k-word')].map(w => w.className),
    getActIIRect: () => document.querySelector('.act-ii').getBoundingClientRect(),
    getRootRect: () => reveal.getBoundingClientRect(),
  };

  // ─── ACT II · Pure kinetic typography ──────────────────────────────
  // Uses scroll-driven trigger (IntersectionObserver is unreliable in some
  // embedded preview contexts). Plays once when Act II is majority-visible;
  // resets when scrolled back above it.
  const kineticStage = document.getElementById('kineticStage');
  const kCounter     = document.getElementById('kCounter');
  const kCounterNum  = kCounter ? kCounter.querySelector('.k-counter-num') : null;
  const kWords       = kineticStage ? [...kineticStage.querySelectorAll('.k-word')] : [];
  const kTimers      = [];
  const actIISection = document.querySelector('.act-ii');

  function clearKineticTimers() { while (kTimers.length) clearTimeout(kTimers.pop()); }

  let kineticPlayed = false;
  function playKinetic() {
    if (kineticPlayed || !kineticStage) return;
    kineticPlayed = true;

    const WORD_DURATION = 1100;
    const FINAL_HOLD    = 700;

    if (kWords[0]) kWords[0].classList.add('is-current');
    if (kCounterNum) kCounterNum.textContent = '01';

    kWords.forEach((w, idx) => {
      if (idx === 0) return;
      const startAt = idx * WORD_DURATION;
      kTimers.push(setTimeout(() => {
        kWords.forEach((other, j) => {
          if (j < idx) other.classList.replace('is-current', 'is-past');
        });
        w.classList.add('is-current');
        if (kCounterNum) kCounterNum.textContent = String(idx + 1).padStart(2, '0');
      }, startAt));
    });

    const captionAt = kWords.length * WORD_DURATION + FINAL_HOLD;
    kTimers.push(setTimeout(() => {
      kineticStage.classList.add('is-final');
    }, captionAt));
  }

  function resetKinetic() {
    if (!kineticStage) return;
    clearKineticTimers();
    kineticPlayed = false;
    kWords.forEach(w => w.classList.remove('is-current', 'is-past'));
    kineticStage.classList.remove('is-final');
    if (kCounterNum) kCounterNum.textContent = '01';
  }

  // Scroll-driven trigger — fires when Act II's center crosses viewport center.
  function checkKineticTrigger() {
    if (!actIISection || !reveal) return;
    const rootR = reveal.getBoundingClientRect();
    const actR  = actIISection.getBoundingClientRect();
    // Act II is considered "entered" when its top is at or above viewport middle
    // AND its bottom is still below viewport middle (i.e. center is inside it).
    const vMid = rootR.top + rootR.height * 0.5;
    const inView = actR.top <= vMid && actR.bottom >= vMid;
    if (inView && !kineticPlayed) {
      playKinetic();
    } else if (!inView && kineticPlayed && actR.bottom < rootR.top) {
      // Only reset when scrolled above it (so it can replay if user scrolls away + back)
      resetKinetic();
    }
  }
  // checkKineticTrigger is invoked by the rAF loop above.

  // ─── Rail dot clicks → smooth scroll ───────────────────────────────
  railDots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const i = parseInt(dot.dataset.goto, 10);
      acts[i].scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // ─── Keyboard nav ──────────────────────────────────────────────────
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
      e.preventDefault();
      const next = Math.min(currentAct + 1, acts.length - 1);
      acts[next].scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault();
      const prev = Math.max(currentAct - 1, 0);
      acts[prev].scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (e.key === 'Home') {
      acts[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (e.key === 'End') {
      acts[acts.length - 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  // ─── Persist position (so refresh keeps your place during iterative review) ──
  reveal.addEventListener('scroll', () => {
    // Update vertical progress bar every scroll frame.
    // reveal is the scroll container (scroll-snap y mandatory), so we
    // measure against its own scrollTop / scrollHeight, not window.
    if (scrollBar) {
      const max = reveal.scrollHeight - reveal.clientHeight;
      const pct = max > 0 ? Math.min(1, Math.max(0, reveal.scrollTop / max)) : 0;
      scrollBar.style.height = (pct * 100) + '%';
    }
    // Fade the Act I scroll-hint out once the user has started moving.
    if (scrollHint && reveal.scrollTop > 40) {
      scrollHint.classList.remove('is-visible');
    }
    // Throttled persistence via rAF
    if (reveal._rafPending) return;
    reveal._rafPending = true;
    requestAnimationFrame(() => {
      try { localStorage.setItem('reveal_scrollTop', reveal.scrollTop); } catch (e) {}
      reveal._rafPending = false;
    });
  });

  // Reveal the vertical progress + scroll hint after Act I has settled
  // (avoids them flashing during the logo animation's opening beats).
  setTimeout(() => {
    if (progressV) progressV.classList.add('is-visible');
    if (scrollHint) scrollHint.classList.add('is-visible');
  }, 3400);

  // ─── PREVIEW FRAMES (Act III, IV) ──────────────────────────────────
  // Compute the scale factor so the iframe (rendered at 1600px wide) fits
  // the actual on-screen frame width. Without this we fall back to the
  // media-query scale, which is rough; this is precise.
  function updatePreviewScales() {
    const isMobile = window.matchMedia('(max-width: 720px)').matches;
    document.querySelectorAll('.preview-frame').forEach(frame => {
      const body = frame.querySelector('.frame-body');
      if (!body) return;
      const w = body.getBoundingClientRect().width;
      if (w <= 0) return;
      if (isMobile) {
        // Iframe renders at 390px. Scale to fit the phone screen width.
        frame.style.setProperty('--mobile-scale', (w / 390).toFixed(4));
        frame.style.removeProperty('--preview-scale');
      } else {
        // Iframe renders at 1600px for web previews, 1200px for doc-shaped
        // previews (Estrategia, Motor). Scale to fit the frame width.
        const isDoc = frame.classList.contains('preview-frame--doc');
        const iframeW = isDoc ? 1200 : 1600;
        frame.style.setProperty('--preview-scale', (w / iframeW).toFixed(4));
        frame.style.removeProperty('--mobile-scale');
      }
    });
  }
  updatePreviewScales();
  window.addEventListener('resize', updatePreviewScales);
  // Run after fonts/layout settle too
  setTimeout(updatePreviewScales, 500);
  setTimeout(updatePreviewScales, 1500);

  // Restore on load — but only if we're not at the very start (first visit)
  const saved = parseInt(localStorage.getItem('reveal_scrollTop') || '0', 10);
  if (saved > 10) {
    // Delay so Act I has started its animation before we potentially skip past it
    setTimeout(() => {
      reveal.scrollTop = saved;
    }, 100);
  }

  // ── Outro (Act VII): architectural bar reveal + white→black flip ──
  const outro = document.querySelector('.act-vii');
  if (outro) {
    let outroTimer = null;
    // Poll-based check — more reliable than IO with nested scroll containers
    function checkOutro() {
      const rect = outro.getBoundingClientRect();
      const visible = rect.top < innerHeight * 0.5 && rect.bottom > innerHeight * 0.5;
      if (visible && !outro.classList.contains('is-built')) {
        outro.classList.add('is-built');
      } else if (!visible && outro.classList.contains('is-built')) {
        // Reset when scrolled fully away so re-entry replays the build
        outro.classList.remove('is-built');
      }
    }
    reveal.addEventListener('scroll', checkOutro, { passive: true });
    checkOutro();
  }
})();
