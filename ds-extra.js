/* DS sections: depth additions — motion, layout, states, link, icon,
   voice, accessibility, counter pattern. Live demos where it matters. */
(function () {
  window.__dsSections = window.__dsSections || {};
  const ds = () => window.__ds;

  // ═════════════════════ MOTION ═════════════════════
  window.__dsSections.motion = () => {
    const { pair, section, codeBlock } = ds();
    const demo = `
      <style>
        .mdemo { display:grid; grid-template-columns: 160px 1fr 110px; gap:20px; align-items:center; padding:22px 0; border-top:1px solid var(--rule); }
        .mdemo:last-of-type { border-bottom:1px solid var(--rule); }
        .mdemo .m-label { font-family:'Geist Mono', ui-monospace, monospace; font-size:11px; color:var(--stone-2); letter-spacing:0.04em; }
        .mdemo .m-label b { display:block; font-family:'Geist',sans-serif; font-weight:500; font-size:10.5px; letter-spacing:0.22em; text-transform:uppercase; color:var(--ink); margin-bottom:4px; }
        .mdemo .m-track { position:relative; height:48px; background:var(--paper-2); border:1px solid var(--rule); border-radius:var(--r-sm); overflow:hidden; }
        .mdemo .m-dot { position:absolute; top:14px; left:14px; width:20px; height:20px; background:var(--claret); border-radius:50%; }
        .mdemo .m-meta { font-family:'Geist Mono', ui-monospace, monospace; font-size:11px; color:var(--stone-2); text-align:right; }
        .mdemo .m-btn { font-family:'Geist',sans-serif; font-size:11px; letter-spacing:0.16em; text-transform:uppercase; background:var(--ink); color:var(--paper); border:none; padding:6px 12px; border-radius:var(--r-xs); cursor:pointer; }
        .mdemo .m-btn:hover { background:var(--claret); }

        /* Timed runs — each takes its duration, pauses 2.6s, then reverses.
           We stretch the animation duration and use keyframes with holds. */
        .m-dot { animation: motHold 3s ease-out infinite; }
        .m-dot.run-150 { animation-name: motRun150; }
        .m-dot.run-200 { animation-name: motRun200; }
        .m-dot.run-250 { animation-name: motRun250; }
        .m-dot.run-400 { animation-name: motRun400; }
        .m-dot.run-600 { animation-name: motRun600; }

        @keyframes motRun150 {
          0%, 100% { transform: translateX(0); }
          5%       { transform: translateX(calc(100% + 280px)); animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1); }
          50%      { transform: translateX(calc(100% + 280px)); }
          55%      { transform: translateX(0); animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1); }
        }
        @keyframes motRun200 {
          0%, 100% { transform: translateX(0); }
          6.66%    { transform: translateX(calc(100% + 280px)); animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1); }
          50%      { transform: translateX(calc(100% + 280px)); }
          56.66%   { transform: translateX(0); animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1); }
        }
        @keyframes motRun250 {
          0%, 100% { transform: translateX(0); }
          8.33%    { transform: translateX(calc(100% + 280px)); animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          50%      { transform: translateX(calc(100% + 280px)); }
          58.33%   { transform: translateX(0); animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
        }
        @keyframes motRun400 {
          0%, 100% { transform: translateX(0); }
          13.33%   { transform: translateX(calc(100% + 280px)); animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          50%      { transform: translateX(calc(100% + 280px)); }
          63.33%   { transform: translateX(0); animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
        }
        @keyframes motRun600 {
          0%, 100% { transform: translateX(0); }
          20%      { transform: translateX(calc(100% + 280px)); animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1); }
          50%      { transform: translateX(calc(100% + 280px)); }
          70%      { transform: translateX(0); animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1); }
        }
        .m-dot.paused { animation-play-state: paused; }

        /* Easing curve previews */
        .curves { display:grid; grid-template-columns: repeat(4, 1fr); gap:14px; margin-top:24px; }
        .curve { border:1px solid var(--rule); border-radius:var(--r-md); padding:18px 16px 14px; background:var(--paper); }
        .curve svg { width:100%; height:72px; display:block; }
        .curve .c-name { font-family:'Instrument Serif', serif; font-style:italic; font-size:18px; margin-top:10px; letter-spacing:-0.005em; }
        .curve .c-val { font-family:'Geist Mono', ui-monospace, monospace; font-size:11px; color:var(--stone-2); margin-top:2px; }
        .curve .c-use { font-size:12.5px; color:var(--text-secondary); margin-top:8px; line-height:1.55; }
      </style>

      <div class="mdemo">
        <div class="m-label"><b>Micro · 150ms</b>color · opacity · border</div>
        <div class="m-track"><span class="m-dot run-150"></span></div>
        <div class="m-meta">150ms · ease-out</div>
      </div>
      <div class="mdemo">
        <div class="m-label"><b>Button · 200ms</b>estados de CTA</div>
        <div class="m-track"><span class="m-dot run-200"></span></div>
        <div class="m-meta">200ms · ease-out</div>
      </div>
      <div class="mdemo">
        <div class="m-label"><b>Panel · 250ms</b>reveals, FAQ</div>
        <div class="m-track"><span class="m-dot run-250"></span></div>
        <div class="m-meta">250ms · ease-in-out</div>
      </div>
      <div class="mdemo">
        <div class="m-label"><b>Modal · 400ms</b>entradas importantes</div>
        <div class="m-track"><span class="m-dot run-400"></span></div>
        <div class="m-meta">400ms · ease-in-out</div>
      </div>
      <div class="mdemo">
        <div class="m-label"><b>Hero · 600ms</b>entrada editorial</div>
        <div class="m-track"><span class="m-dot run-600"></span></div>
        <div class="m-meta">600ms · ease-expo</div>
      </div>

      <h3 class="sub-h">Curvas</h3>
      <p class="sub-desc">Cuatro curvas, cada una con un rol. Nunca <code class="inline">ease</code> por defecto — su aceleración es plana y no tiene carácter.</p>

      <div class="curves">
        <div class="curve">
          <svg viewBox="0 0 100 72" preserveAspectRatio="none">
            <path d="M0 72 C 20 72, 40 0, 100 0" fill="none" stroke="#8E1F1C" stroke-width="2"/>
            <line x1="0" y1="72" x2="100" y2="72" stroke="rgba(14,15,12,0.15)" stroke-width="1"/>
            <line x1="0" y1="0"  x2="0"  y2="72" stroke="rgba(14,15,12,0.15)" stroke-width="1"/>
          </svg>
          <div class="c-name">ease-out</div>
          <div class="c-val">cubic-bezier(0.22, 1, 0.36, 1)</div>
          <div class="c-use">Default. Entradas, hover, micro-UI. Arranca rápido, cierra suave.</div>
        </div>
        <div class="curve">
          <svg viewBox="0 0 100 72" preserveAspectRatio="none">
            <path d="M0 72 C 40 72, 60 0, 100 0" fill="none" stroke="#8E1F1C" stroke-width="2"/>
            <line x1="0" y1="72" x2="100" y2="72" stroke="rgba(14,15,12,0.15)" stroke-width="1"/>
            <line x1="0" y1="0"  x2="0"  y2="72" stroke="rgba(14,15,12,0.15)" stroke-width="1"/>
          </svg>
          <div class="c-name">ease-in-out</div>
          <div class="c-val">cubic-bezier(0.65, 0, 0.35, 1)</div>
          <div class="c-use">Estados simétricos. Paneles, drawers, toggles.</div>
        </div>
        <div class="curve">
          <svg viewBox="0 0 100 72" preserveAspectRatio="none">
            <path d="M0 72 C 14 72, 28 0, 100 0" fill="none" stroke="#8E1F1C" stroke-width="2"/>
            <line x1="0" y1="72" x2="100" y2="72" stroke="rgba(14,15,12,0.15)" stroke-width="1"/>
            <line x1="0" y1="0"  x2="0"  y2="72" stroke="rgba(14,15,12,0.15)" stroke-width="1"/>
          </svg>
          <div class="c-name">ease-expo</div>
          <div class="c-val">cubic-bezier(0.16, 1, 0.3, 1)</div>
          <div class="c-use">Hero, reveals grandes. Aceleración fuerte, salida editorial.</div>
        </div>
        <div class="curve">
          <svg viewBox="0 0 100 72" preserveAspectRatio="none">
            <path d="M0 72 L 100 0" fill="none" stroke="rgba(14,15,12,0.4)" stroke-width="2" stroke-dasharray="3 4"/>
            <line x1="0" y1="72" x2="100" y2="72" stroke="rgba(14,15,12,0.15)" stroke-width="1"/>
            <line x1="0" y1="0"  x2="0"  y2="72" stroke="rgba(14,15,12,0.15)" stroke-width="1"/>
          </svg>
          <div class="c-name" style="color:var(--stone-2);">linear</div>
          <div class="c-val">evitar</div>
          <div class="c-use">Sólo para progreso determinista (barras). Nunca para UI.</div>
        </div>
      </div>
    `;

    const motionCss = `/* tokens en brand.css */
:root {
  /* Durations */
  --t-micro: 150ms;   /* color, opacity, border */
  --t-small: 200ms;   /* botones, hover compuesto */
  --t-medium: 250ms;  /* paneles, FAQ, tabs */
  --t-large: 400ms;   /* modales, drawers */
  --t-xlarge: 600ms;  /* hero reveals */

  /* Easings */
  --ease-out:    cubic-bezier(0.22, 1, 0.36, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-expo:   cubic-bezier(0.16, 1, 0.3, 1);
  /* 'ease' y 'linear' no tienen alias — si los necesitas, escríbelos. */
}

/* Patrón: transición compuesta */
.button {
  transition:
    background-color var(--t-small) var(--ease-out),
    color            var(--t-small) var(--ease-out),
    border-color     var(--t-small) var(--ease-out);
}

/* Patrón: reveal en entrada */
.reveal {
  opacity: 0;
  transform: translateY(12px);
  transition:
    opacity   var(--t-xlarge) var(--ease-expo),
    transform var(--t-xlarge) var(--ease-expo);
}
.reveal.in {
  opacity: 1;
  transform: none;
}

/* Reduced motion: respeto obligatorio */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}`;

    return section(
      'motion', 'nº 07',
      'Movimiento ·', 'duración y curva',
      'Cinco duraciones, tres curvas. El movimiento aquí no adorna — comunica estado. Un hover de 500ms se siente <em>lento</em>, uno de 80ms se siente <em>brusco</em>. La tabla de abajo es la referencia única; cualquier transición en producción debe leerse de aquí.',
      `
        ${demo}

        <h3 class="sub-h">Tokens</h3>
        ${codeBlock(motionCss, 'css', 'brand.css — motion')}

        <h3 class="sub-h">Dónde se aplica</h3>
        <table class="tokens">
          <thead><tr><th>Elemento</th><th>Propiedad</th><th>Duración · curva</th></tr></thead>
          <tbody>
            <tr><td>Button</td><td>bg, color, border</td><td><code>200ms · ease-out</code></td></tr>
            <tr><td>Link inline</td><td>color, border-bottom</td><td><code>150ms · ease-out</code></td></tr>
            <tr><td>Input</td><td>border-color, ring</td><td><code>150ms · ease-out</code></td></tr>
            <tr><td>FAQ accordion</td><td>grid-template-rows</td><td><code>250ms · ease-in-out</code></td></tr>
            <tr><td>Modal / Drawer</td><td>transform, opacity</td><td><code>400ms · ease-in-out</code></td></tr>
            <tr><td>Hero reveal</td><td>opacity, translateY</td><td><code>600ms · ease-expo</code></td></tr>
            <tr><td>Progress bar</td><td>width</td><td><code>linear</code></td></tr>
          </tbody>
        </table>

        <div class="callout">
          <b>Reduced motion es obligatorio.</b>
          <p>Todo el sistema respeta <code class="inline">prefers-reduced-motion</code>. Si agregas una animación nueva, verifica que se desactive con ese media query. No es opcional en un sitio legal: parte de nuestra audiencia lo requiere.</p>
        </div>
      `
    );
  };

  // ═════════════════════ LAYOUT ═════════════════════
  window.__dsSections.layout = () => {
    const { pair, section, codeBlock } = ds();
    const gridDemo = `
      <style>
        .layout-demo { background:var(--paper-2); padding:32px; border-radius:var(--r-md); border:1px solid var(--rule); }
        .layout-demo .cols { display:grid; grid-template-columns: repeat(12, 1fr); gap:16px; }
        .layout-demo .cols > span {
          height:44px; background:linear-gradient(180deg, rgba(142,31,28,0.08), rgba(142,31,28,0.18));
          border:1px solid rgba(142,31,28,0.22); border-radius:var(--r-xs);
          display:flex; align-items:center; justify-content:center;
          font-family:'Geist Mono', ui-monospace, monospace; font-size:11px; color:var(--claret);
        }
        .layout-demo .scale { display:flex; justify-content:space-between; margin-top:10px; font-family:'Geist Mono', ui-monospace, monospace; font-size:10px; color:var(--stone-2); }

        .bp-table { width:100%; border-collapse:collapse; margin-top:8px; }
        .bp-table th, .bp-table td { border-bottom:1px solid var(--rule); padding:14px 16px; text-align:left; vertical-align:top; }
        .bp-table th { font-family:'Geist',sans-serif; font-weight:500; font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:var(--stone-2); border-bottom:1px solid var(--rule-strong); }
        .bp-table .bp-name { font-family:'Instrument Serif',serif; font-style:italic; font-size:22px; line-height:1; color:var(--ink); }
        .bp-table .bp-range { font-family:'Geist Mono', ui-monospace, monospace; font-size:12px; color:var(--claret); }
        .bp-table .bp-bar { position:relative; height:6px; background:var(--paper-2); border-radius:3px; overflow:hidden; border:1px solid var(--rule); }
        .bp-table .bp-bar > i { position:absolute; top:0; left:0; bottom:0; background:var(--claret); }
      </style>

      <div class="layout-demo">
        <div class="cols">
          ${Array.from({length: 12}, (_, i) => `<span>${i+1}</span>`).join('')}
        </div>
        <div class="scale">
          <span>0</span>
          <span>max-w: 1240px · 12 cols · gap 16px · px 24–48</span>
          <span>1240</span>
        </div>
      </div>
    `;

    const bpRow = (name, w, usage, pct) => `
      <tr>
        <td><span class="bp-name">${name}</span></td>
        <td><span class="bp-range">${w}</span></td>
        <td style="font-size:13.5px; color:var(--text-secondary); line-height:1.55;">${usage}</td>
        <td style="width:160px;"><div class="bp-bar"><i style="width:${pct}%"></i></div></td>
      </tr>
    `;

    const layoutJsx = `// Un layout canónico
<section className="px-6 md:px-12 py-16 md:py-24">
  <div className="mx-auto max-w-[1240px]">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="md:col-span-7">{/* 7 cols · copy */}</div>
      <div className="md:col-span-4 md:col-start-9">{/* 4 cols · aside */}</div>
    </div>
  </div>
</section>

// Patrón "split editorial" (hero, bio)
<div className="grid grid-cols-1 md:grid-cols-[420px_1fr] gap-14 items-start">
  <figure>…</figure>
  <div>…</div>
</div>

// Patrón "service grid"
<div className="grid md:grid-cols-3 gap-4">
  {services.map(s => <ServiceCard {...s} />)}
</div>`;

    const breakpointsCss = `@theme {
  /* Breakpoints — sólo los que usamos */
  --breakpoint-sm: 640px;   /* phone ancha */
  --breakpoint-md: 768px;   /* tablet / landing colapsa */
  --breakpoint-lg: 1024px;  /* desktop small */
  --breakpoint-xl: 1280px;  /* desktop full */

  /* Contenedor */
  --container-default: 1240px;   /* landing, bio, services */
  --container-narrow:  960px;    /* FAQ, legal, artículos */
  --container-prose:   680px;    /* cuerpo de artículo */
}`;

    return section(
      'layout', 'nº 06',
      'Layout ·', 'container, grid, breakpoints',
      'Un ancho máximo (<b>1240px</b>) gobierna la mayor parte del sitio. Para lectura densa usamos <b>960px</b>; para artículos, <b>680px</b>. Grid de 12 columnas con gap 16px, padding horizontal 24–48px según viewport.',
      `
        <h3 class="sub-h">Grid base · 12 columnas</h3>
        <p class="sub-desc">Reservado para landings y secciones con asimetría. Para grids de contenido (services, FAQ) se usa el grid adaptativo más simple (1 → 3 columnas).</p>
        ${gridDemo}

        <h3 class="sub-h">Breakpoints</h3>
        <table class="bp-table">
          <thead><tr><th>Nombre</th><th>Ancho</th><th>Uso</th><th>Proporción</th></tr></thead>
          <tbody>
            ${bpRow('sm', '≥ 640px',  'Ajustes menores: chrome, footer columnado.', 50)}
            ${bpRow('md', '≥ 768px',  'Layout desktop empieza. Grids laterales se activan.', 62)}
            ${bpRow('lg', '≥ 1024px', 'Hero completo, 3 columnas de services, bio split.', 82)}
            ${bpRow('xl', '≥ 1280px', 'Container a su ancho máximo. Gutters a 48px.', 100)}
          </tbody>
        </table>

        <h3 class="sub-h">Contenedores</h3>
        <table class="tokens">
          <thead><tr><th>Token</th><th>Ancho</th><th>Uso</th></tr></thead>
          <tbody>
            <tr><td><code>container-default</code></td><td>1240px</td><td>Landing, hero, services, bio, footer.</td></tr>
            <tr><td><code>container-narrow</code></td><td>960px</td><td>FAQ, términos legales, formularios largos.</td></tr>
            <tr><td><code>container-prose</code></td><td>680px</td><td>Cuerpo de artículo, obituarios, prosa editorial.</td></tr>
          </tbody>
        </table>

        <h3 class="sub-h">Configuración</h3>
        ${codeBlock(breakpointsCss, 'css', 'app/globals.css')}

        <h3 class="sub-h">Patrones canónicos</h3>
        ${codeBlock(layoutJsx, 'tsx')}

        <div class="callout">
          <b>No multiplicar anchos máximos.</b>
          <p>Tres containers son suficientes para todo el sitio. Si una pantalla parece necesitar un cuarto, probablemente el contenido debe dividirse en dos secciones, no un layout nuevo.</p>
        </div>
      `
    );
  };

  // ═════════════════════ STATES MATRIX ═════════════════════
  window.__dsSections.states = () => {
    const { pair, section, codeBlock } = ds();
    const base = 'font-family:"Geist",sans-serif; font-weight:500; font-size:13.5px; letter-spacing:0.02em; padding:11px 20px; border-radius:4px; border:1px solid transparent; display:inline-flex; align-items:center; gap:8px; line-height:1; cursor:pointer;';
    const primBase = base + ' background:#8E1F1C; color:#fff; border-color:#8E1F1C;';
    const secBase = base + ' background:transparent; color:#0E0F0C; border-color:#0E0F0C;';

    const cell = (label, inner) => `
      <div style="display:flex; flex-direction:column; gap:10px; align-items:flex-start;">
        <span style="font-family:'Geist',sans-serif; font-size:9.5px; font-weight:500; letter-spacing:0.22em; text-transform:uppercase; color:var(--stone-2);">${label}</span>
        ${inner}
      </div>
    `;

    const primRow = `
      <div style="display:grid; grid-template-columns: repeat(5, 1fr); gap:24px;">
        ${cell('Default', `<button style="${primBase}">Agendar</button>`)}
        ${cell('Hover', `<button style="${primBase} background:#6F1516; border-color:#6F1516;">Agendar</button>`)}
        ${cell('Active', `<button style="${primBase} background:#6F1516; border-color:#6F1516; transform:scale(0.98);">Agendar</button>`)}
        ${cell('Focus', `<button style="${primBase} outline:2px solid #8E1F1C; outline-offset:2px;">Agendar</button>`)}
        ${cell('Disabled', `<button style="${primBase} opacity:0.4; cursor:not-allowed;">Agendar</button>`)}
      </div>`;

    const secRow = `
      <div style="display:grid; grid-template-columns: repeat(5, 1fr); gap:24px;">
        ${cell('Default', `<button style="${secBase}">Conocer más</button>`)}
        ${cell('Hover', `<button style="${secBase} background:#0E0F0C; color:#fff;">Conocer más</button>`)}
        ${cell('Active', `<button style="${secBase} background:#0E0F0C; color:#fff; transform:scale(0.98);">Conocer más</button>`)}
        ${cell('Focus', `<button style="${secBase} outline:2px solid #8E1F1C; outline-offset:2px;">Conocer más</button>`)}
        ${cell('Disabled', `<button style="${secBase} opacity:0.35; cursor:not-allowed;">Conocer más</button>`)}
      </div>`;

    const inpBase = 'font-family:"Geist",sans-serif; font-size:14px; padding:12px 14px; border:1px solid rgba(14,15,12,0.2); border-radius:2px; background:#fff; color:#0E0F0C; width:220px; outline:none;';
    const inpRow = `
      <div style="display:grid; grid-template-columns: repeat(5, 1fr); gap:24px;">
        ${cell('Default', `<input style="${inpBase}" value="Ana Velázquez">`)}
        ${cell('Hover', `<input style="${inpBase} border-color:rgba(14,15,12,0.4);" value="Ana Velázquez">`)}
        ${cell('Focus', `<input style="${inpBase} border-color:#8E1F1C; box-shadow:0 0 0 3px rgba(142,31,28,0.18);" value="Ana Velázquez">`)}
        ${cell('Error', `<input style="${inpBase} border-color:#8E1F1C;" value="ana@mal">`)}
        ${cell('Disabled', `<input style="${inpBase} background:#F5F1E8; color:#8A8574; cursor:not-allowed;" value="No editable" disabled>`)}
      </div>`;

    const statesCode = `// Button — todos los estados en un archivo
.button-primary {
  background: var(--claret);
  color: var(--paper);
  border: 1px solid var(--claret);
  transition:
    background-color var(--t-small) var(--ease-out),
    border-color     var(--t-small) var(--ease-out),
    transform        var(--t-small) var(--ease-out);
}

.button-primary:hover {
  background: var(--claret-deep);   /* más profundo, no más claro */
  border-color: var(--claret-deep);
}

.button-primary:active {
  transform: scale(0.98);           /* nunca menos — se siente brusco */
}

.button-primary:focus-visible {
  outline: 2px solid var(--claret);
  outline-offset: 2px;
  border-radius: inherit;           /* que el outline respete la forma */
}

.button-primary:disabled {
  opacity: 0.4;                     /* no cambies color — la opacidad es honesta */
  cursor: not-allowed;
  pointer-events: none;
}`;

    return section(
      'states', 'nº 14',
      'Estados ·', 'matriz por primitivo',
      'Cada primitivo tiene cinco estados: <b>default</b>, <b>hover</b>, <b>active</b>, <b>focus</b>, <b>disabled</b>. Están codificados en tokens — nunca se inventan en línea. <code class="inline">focus-visible</code> siempre es claret, nunca el color del navegador.',
      `
        <h3 class="sub-h">Button · primary</h3>
        <div class="pair stack">
          <div class="preview">${primRow}</div>
        </div>

        <h3 class="sub-h">Button · secondary</h3>
        <div class="pair stack">
          <div class="preview">${secRow}</div>
        </div>

        <h3 class="sub-h">Input</h3>
        <div class="pair stack">
          <div class="preview">${inpRow}</div>
        </div>

        <h3 class="sub-h">Receta CSS</h3>
        ${codeBlock(statesCode, 'css', 'button.css')}

        <div class="callout">
          <b>Active: nunca menos de scale(0.98).</b>
          <p><code class="inline">scale(0.95)</code> se siente de app móvil barata. <code class="inline">scale(0.98)</code> con 200ms lee como un botón físico hundiéndose — que es lo que queremos.</p>
        </div>
      `
    );
  };

  // ═════════════════════ LINK ═════════════════════
  window.__dsSections.link = () => {
    const { pair, section, codeBlock } = ds();
    const preview = `
      <div style="display:flex; flex-direction:column; gap:28px; max-width:560px;">
        <div style="font-family:'Geist',sans-serif; font-size:15.5px; line-height:1.65; color:#0E0F0C;">
          En nuestra práctica,
          <a href="#" style="color:#0E0F0C; border-bottom:1px solid rgba(14,15,12,0.3); text-decoration:none; padding-bottom:1px; transition:color 150ms, border-color 150ms;">cada expediente</a>
          es una conversación con el sistema judicial.
          Puedes revisar
          <a href="#" style="color:#8E1F1C; border-bottom:1px solid #8E1F1C; text-decoration:none; padding-bottom:1px;">los casos publicados</a>
          o escribir a
          <a href="#" style="color:#0E0F0C; border-bottom:1px solid rgba(14,15,12,0.3); text-decoration:none; padding-bottom:1px;">contacto@cabal.mx</a>.
        </div>

        <div style="display:flex; gap:28px; flex-wrap:wrap;">
          <a href="#" style="font-family:'Geist',sans-serif; font-size:11px; font-weight:500; letter-spacing:0.22em; text-transform:uppercase; color:#0E0F0C; border-bottom:1px solid #0E0F0C; padding-bottom:3px; text-decoration:none;">Ver todos los servicios →</a>
          <a href="#" style="font-family:'Geist',sans-serif; font-size:11px; font-weight:500; letter-spacing:0.22em; text-transform:uppercase; color:#8E1F1C; border-bottom:1px solid #8E1F1C; padding-bottom:3px; text-decoration:none;">Descargar manifesto →</a>
        </div>

        <div style="font-family:'Instrument Serif',serif; font-style:italic; font-size:22px; line-height:1.4; color:#0E0F0C;">
          Léelo con calma en la
          <a href="#" style="color:#8E1F1C; border-bottom:1px solid rgba(142,31,28,0.4); text-decoration:none;">publicación impresa</a>
          de octubre.
        </div>
      </div>`;

    const code = `// components/primitives/Link.tsx
import { AnchorHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'inline' | 'inline-accent' | 'standalone' | 'standalone-accent';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
}

const VARIANTS: Record<Variant, string> = {
  'inline':
    'text-ink border-b border-ink/30 pb-[1px] hover:border-ink hover:text-claret transition-colors duration-150',
  'inline-accent':
    'text-claret border-b border-claret pb-[1px] hover:border-claret-deep hover:text-claret-deep transition-colors duration-150',
  'standalone':
    'inline-flex items-baseline text-[11px] font-medium tracking-[0.22em] uppercase text-ink border-b border-ink pb-0.5 hover:text-claret hover:border-claret transition-colors duration-150',
  'standalone-accent':
    'inline-flex items-baseline text-[11px] font-medium tracking-[0.22em] uppercase text-claret border-b border-claret pb-0.5 hover:text-claret-deep hover:border-claret-deep transition-colors duration-150',
};

export function Link({ variant = 'inline', className, ...props }: LinkProps) {
  return (
    <a
      className={cn(
        'no-underline',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-claret focus-visible:ring-offset-2 rounded-sm',
        VARIANTS[variant],
        className,
      )}
      {...props}
    />
  );
}`;

    const usage = `// Uso
<p>
  Revisa <Link href="/casos">los casos publicados</Link> o escríbenos a{' '}
  <Link href="mailto:contacto@cabal.mx">contacto@cabal.mx</Link>.
</p>

<Link variant="standalone" href="/servicios">Ver todos los servicios →</Link>

<Link variant="inline-accent" href="/publicaciones">
  la publicación impresa
</Link>`;

    return section(
      'link', 'nº 12',
      'Link', '',
      'Cuatro variantes: <b>inline</b> (en prosa, tinta + borde 30%), <b>inline-accent</b> (destaca en prosa, claret), <b>standalone</b> (caps tracking alto, estilo botón-editorial), <b>standalone-accent</b>. Nunca <code class="inline">text-decoration: underline</code> — siempre <code class="inline">border-bottom</code> para controlar grosor, offset y transición.',
      `
        ${pair(preview, usage, { stack: true, file: 'uso' })}

        <h3 class="sub-h">Componente</h3>
        ${codeBlock(code, 'tsx', 'Link.tsx')}

        <div class="callout">
          <b>Subrayado como arquitectura, no como decoración.</b>
          <p>El <code class="inline">text-decoration</code> del navegador no permite controlar el offset ni el grosor con precisión, y cruza los descenders de la tipografía. Con <code class="inline">border-bottom</code> tenemos un subrayado editorial limpio y consistente en toda la marca.</p>
        </div>
      `
    );
  };

  // ═════════════════════ ICONOGRAPHY ═════════════════════
  window.__dsSections.icon = () => {
    const { pair, section, codeBlock } = ds();
    const icons = {
      arrow: '<path d="M5 12h14m-6-6l6 6-6 6" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
      arrowDown: '<path d="M12 5v14m-6-6l6 6 6-6" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
      check: '<path d="M5 12l4 4 10-10" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
      close: '<path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/>',
      plus: '<path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/>',
      minus: '<path d="M5 12h14" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/>',
      mail: '<path d="M3 7l9 6 9-6M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7a2 2 0 012-2h14a2 2 0 012 2" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
      phone: '<path d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v3a2 2 0 01-2 2A15 15 0 013 6a2 2 0 012-2" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
      clock: '<circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M12 8v4l2.5 2.5" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/>',
      scale: '<path d="M12 4v16m-6 0h12M6 10l-3 4a3 3 0 006 0l-3-4zm12 0l-3 4a3 3 0 006 0l-3-4zM3 4h18" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
      doc: '<path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5zm0 0v5h5M9 13h6M9 17h6" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
      chevron: '<path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
    };

    const swatch = (name, path) => `
      <div style="border:1px solid var(--rule); border-radius:var(--r-sm); padding:20px 14px 14px; background:var(--paper); display:flex; flex-direction:column; align-items:center; gap:10px;">
        <svg width="28" height="28" viewBox="0 0 24 24" style="color:#0E0F0C;">${path}</svg>
        <div style="font-family:'Geist Mono', ui-monospace, monospace; font-size:11px; color:var(--stone-2);">${name}</div>
      </div>
    `;

    const preview = `
      <div style="display:grid; grid-template-columns: repeat(6, 1fr); gap:14px;">
        ${Object.entries(icons).map(([k, v]) => swatch(k, v)).join('')}
      </div>
    `;

    const sizesPreview = `
      <div style="display:flex; gap:36px; align-items:flex-end;">
        <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
          <svg width="14" height="14" viewBox="0 0 24 24" style="color:#0E0F0C;">${icons.arrow}</svg>
          <span style="font-family:'Geist Mono', ui-monospace, monospace; font-size:10px; color:var(--stone-2);">14 · inline</span>
        </div>
        <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
          <svg width="16" height="16" viewBox="0 0 24 24" style="color:#0E0F0C;">${icons.arrow}</svg>
          <span style="font-family:'Geist Mono', ui-monospace, monospace; font-size:10px; color:var(--stone-2);">16 · button</span>
        </div>
        <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
          <svg width="20" height="20" viewBox="0 0 24 24" style="color:#0E0F0C;">${icons.arrow}</svg>
          <span style="font-family:'Geist Mono', ui-monospace, monospace; font-size:10px; color:var(--stone-2);">20 · nav</span>
        </div>
        <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
          <svg width="28" height="28" viewBox="0 0 24 24" style="color:#0E0F0C;">${icons.arrow}</svg>
          <span style="font-family:'Geist Mono', ui-monospace, monospace; font-size:10px; color:var(--stone-2);">28 · FAB</span>
        </div>
      </div>
    `;

    const iconJsx = `// components/primitives/Icon.tsx
import { SVGProps } from 'react';

const PATHS = {
  arrow:     'M5 12h14m-6-6l6 6-6 6',
  arrowDown: 'M12 5v14m-6-6l6 6 6-6',
  check:     'M5 12l4 4 10-10',
  close:     'M6 6l12 12M18 6l-12 12',
  plus:      'M12 5v14M5 12h14',
  minus:     'M5 12h14',
  chevron:   'M9 6l6 6-6 6',
  clock:     '',   // compuesto — ver archivo completo
  mail:      '',
  phone:     '',
  scale:     '',
  doc:       '',
} as const;

export type IconName = keyof typeof PATHS;

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: 14 | 16 | 20 | 28;
}

export function Icon({ name, size = 16, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
      {...props}
    >
      <path d={PATHS[name]} />
    </svg>
  );
}`;

    return section(
      'icon', 'nº 13',
      'Iconografía', '',
      'Un set pequeño, todos dibujados con <b>stroke 1.5px</b>, línea <b>monocromática</b> (currentColor), viewBox <b>24×24</b>. Nunca íconos de colores; nunca íconos decorativos. Cuando acompañan texto, <b>14 o 16px</b> — el ojo no necesita más.',
      `
        <h3 class="sub-h">Set base</h3>
        <p class="sub-desc">12 íconos cubren el sitio actual. Si falta uno, primero ver si se resuelve con tipografía o un símbolo Unicode (→, ·, —).</p>
        <div class="pair stack">
          <div class="preview">${preview}</div>
        </div>

        <h3 class="sub-h">Tamaños</h3>
        <div class="pair stack">
          <div class="preview">${sizesPreview}</div>
        </div>

        <h3 class="sub-h">Componente</h3>
        ${codeBlock(iconJsx, 'tsx', 'Icon.tsx')}

        <div class="callout">
          <b>Nunca íconos para adornar.</b>
          <p>Si un ícono no aporta información (un check antes de un ítem de lista ya obvio, un candado antes de "privacidad"), bórralo. Cada ícono debe justificar su existencia — y la tipografía suele bastar.</p>
        </div>
      `
    );
  };

  // ═════════════════════ COUNTER / STAT ═════════════════════
  window.__dsSections.counter = () => {
    const { pair, section, codeBlock } = ds();
    const preview = `
      <div style="width:100%; background:#fff; padding:48px; font-family:'Geist',sans-serif;">
        <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:0; border-top:1px solid rgba(14,15,12,0.2); border-bottom:1px solid rgba(14,15,12,0.2);">
          ${[
            ['30', 'años', 'De ejercicio del derecho laboral desde 1995'],
            ['500', '+',   'Casos representados del lado empresarial y del trabajador'],
            ['92',  '%',   'De consultas resueltas sin llegar a juicio'],
            ['24',  'h',   'Tiempo máximo de respuesta en casos urgentes'],
          ].map(([n, suf, label], i) => `
            <div style="padding:36px 28px; ${i > 0 ? 'border-left:1px solid rgba(14,15,12,0.14);' : ''}">
              <div style="display:flex; align-items:baseline; gap:8px;">
                <span style="font-family:'Instrument Serif',serif; font-size:80px; line-height:0.9; letter-spacing:-0.03em; color:#0E0F0C;">${n}</span>
                <span style="font-family:'Instrument Serif',serif; font-size:28px; font-style:italic; color:#8A8574; letter-spacing:-0.01em;">${suf}</span>
              </div>
              <p style="margin:14px 0 0; font-size:13px; line-height:1.55; color:#3a3a33; max-width:220px;">${label}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    const counterJsx = `// components/patterns/Counter.tsx
'use client';
import { useEffect, useRef, useState } from 'react';

interface CounterProps {
  value: number;       // 500
  suffix?: string;     // '+', '%', 'h', 'años'
  label: string;
  duration?: number;   // ms, default 1400
}

export function Counter({ value, suffix = '', label, duration = 1400 }: CounterProps) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started.current) return;
      started.current = true;

      const t0 = performance.now();
      function tick(now: number) {
        const p = Math.min(1, (now - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3);      // ease-out cubic
        setDisplay(Math.round(eased * value));
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      io.unobserve(el);
    }, { threshold: 0.4 });

    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <div ref={ref} className="px-7 py-9 border-l border-rule first:border-l-0">
      <div className="flex items-baseline gap-2">
        <span className="font-serif text-[80px] leading-[0.9] tracking-[-0.03em] text-ink tabular-nums">
          {display.toLocaleString('es-MX')}
        </span>
        {suffix && (
          <span className="font-serif italic text-[28px] tracking-tight text-stone-2">
            {suffix}
          </span>
        )}
      </div>
      <p className="mt-3.5 text-[13px] leading-snug text-ink/75 max-w-[220px]">{label}</p>
    </div>
  );
}

// components/patterns/CounterBar.tsx
export function CounterBar({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-paper px-6 md:px-12 py-16">
      <div className="mx-auto max-w-[1240px] grid grid-cols-2 md:grid-cols-4 border-y border-ink/20">
        {children}
      </div>
    </section>
  );
}`;

    const usage = `<CounterBar>
  <Counter value={30}  suffix="años" label="De ejercicio del derecho laboral desde 1995" />
  <Counter value={500} suffix="+"    label="Casos representados del lado empresarial y del trabajador" />
  <Counter value={92}  suffix="%"    label="De consultas resueltas sin llegar a juicio" />
  <Counter value={24}  suffix="h"    label="Tiempo máximo de respuesta en casos urgentes" />
</CounterBar>`;

    return section(
      'counter', 'nº 20',
      'Counter ·', 'stat editorial',
      'El número es el protagonista: Instrument Serif 80px sin itálica, sufijo en itálico 28px. Cuenta al entrar al viewport con <code class="inline">ease-out cubic</code>, dura 1400ms — suficiente para leerse como declaración, no como telemetría.',
      `
        ${pair(preview, usage, { wide: true, stack: true, file: 'uso', label: 'CounterBar' })}

        <h3 class="sub-h">Componente</h3>
        ${codeBlock(counterJsx, 'tsx', 'Counter.tsx')}

        <div class="callout">
          <b>Tabular-nums es obligatorio.</b>
          <p>Al contar, los dígitos cambian y el layout se sacude si las cifras no son de ancho fijo. <code class="inline">tabular-nums</code> bloquea eso — cada dígito ocupa el mismo ancho, el número crece sin brincar.</p>
        </div>
      `
    );
  };

  // ═════════════════════ VOICE & COPY ═════════════════════
  window.__dsSections.voice = () => {
    const { pair, section, codeBlock } = ds();
    const doDont = (good, bad, why) => `
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:0; border:1px solid var(--rule); border-radius:var(--r-md); overflow:hidden; margin-bottom:14px;">
        <div style="padding:22px 24px; background:var(--paper); border-right:1px solid var(--rule);">
          <div style="font-family:'Geist',sans-serif; font-size:10px; font-weight:500; letter-spacing:0.22em; text-transform:uppercase; color:#2a7a3a; margin-bottom:10px;">Sí</div>
          <p style="margin:0; font-family:'Instrument Serif',serif; font-size:20px; line-height:1.4; letter-spacing:-0.005em; color:#0E0F0C;">${good}</p>
        </div>
        <div style="padding:22px 24px; background:var(--paper-2);">
          <div style="font-family:'Geist',sans-serif; font-size:10px; font-weight:500; letter-spacing:0.22em; text-transform:uppercase; color:#8E1F1C; margin-bottom:10px;">No</div>
          <p style="margin:0; font-family:'Instrument Serif',serif; font-size:20px; line-height:1.4; letter-spacing:-0.005em; color:var(--stone-2); text-decoration:line-through; text-decoration-color:rgba(142,31,28,0.35);">${bad}</p>
          <div style="margin-top:14px; font-size:12.5px; line-height:1.55; color:var(--text-secondary);">${why}</div>
        </div>
      </div>
    `;

    const pillars = `
      <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:20px; margin-bottom:32px;">
        ${[
          ['Sobrio', 'Frases cortas, verbos fuertes. Sin adjetivos de marketing.', 'Representamos. Defendemos. Resolvemos.'],
          ['Documentado', 'Cifras, fechas, plazos. Específico sobre general.', '30 años. 500 casos. Respuesta en menos de 24 h.'],
          ['Humano', 'Lenguaje claro, sin jerga innecesaria. Tú, no usted.', 'Tu caso es una conversación con el sistema judicial.'],
        ].map(([n, d, ex]) => `
          <div style="border:1px solid var(--rule); border-radius:var(--r-md); padding:24px 22px; background:var(--paper);">
            <div style="font-family:'Instrument Serif',serif; font-style:italic; font-size:28px; color:#8E1F1C; letter-spacing:-0.01em;">${n}</div>
            <p style="margin:8px 0 14px; font-size:14px; line-height:1.55; color:var(--text-secondary);">${d}</p>
            <p style="margin:0; padding:12px 14px; background:var(--paper-2); border-left:2px solid #8E1F1C; border-radius:0 var(--r-sm) var(--r-sm) 0; font-family:'Instrument Serif',serif; font-style:italic; font-size:15px; line-height:1.45;">${ex}</p>
          </div>
        `).join('')}
      </div>
    `;

    return section(
      'voice', 'nº 04b',
      'Voz y', 'copy',
      'La tipografía ya carga peso institucional — la voz puede permitirse ser humana. <b>Tuteo</b> siempre, verbos en primera persona plural (<em>representamos</em>, <em>defendemos</em>), cifras en vez de adjetivos. Evitar lenguaje de despacho ("la firma", "el suscrito") excepto en documentos legales.',
      `
        <h3 class="sub-h">Tres pilares</h3>
        ${pillars}

        <h3 class="sub-h">Patrones · sí / no</h3>
        ${doDont(
          'Respuesta en menos de 24 h.',
          'Nos caracterizamos por una atención ágil y oportuna.',
          'Declarativo vs. genérico. El número convierte; el adjetivo se esfuma.'
        )}
        ${doDont(
          'Tu trabajo merece protección.',
          'El suscrito despacho brinda asesoría en materia laboral.',
          'Tuteo, sujeto humano, verbo directo. No hablar en tercera persona de sí mismos.'
        )}
        ${doDont(
          'Defendí empresas durante treinta años.',
          'Cuento con amplia experiencia en el sector corporativo.',
          'Primera persona + cifra + verbo concreto. "Amplia experiencia" no dice nada.'
        )}
        ${doDont(
          'Consulta sin costo · Respondemos en &lt; 2 h hábiles.',
          '¡Agenda tu cita GRATIS! Asesoría inmediata.',
          'Caps + exclamaciones son voz de tianguis. La especificidad (&lt; 2 h) sustituye al entusiasmo.'
        )}

        <h3 class="sub-h">Lista de términos</h3>
        <table class="tokens">
          <thead><tr><th>Usar</th><th>Evitar</th><th>Por qué</th></tr></thead>
          <tbody>
            <tr><td><b>representamos</b></td><td>asesoramos / acompañamos</td><td>Representar es un acto jurídico; lo otro es ambiguo.</td></tr>
            <tr><td><b>el caso</b></td><td>el asunto</td><td>Específico; "asunto" es de tarjeta de visita.</td></tr>
            <tr><td><b>honorarios</b></td><td>precios / costos</td><td>Es el término legal correcto y señala profesionalismo.</td></tr>
            <tr><td><b>consulta</b></td><td>asesoría / orientación</td><td>Consulta es un encuentro definido; los otros son vaporosos.</td></tr>
            <tr><td><b>expediente</b></td><td>archivo / documento</td><td>Señala trabajo metódico y oficial.</td></tr>
            <tr><td><b>resolver</b></td><td>solucionar</td><td>Resolver tiene peso jurídico; solucionar es de atención al cliente.</td></tr>
            <tr><td><b>audiencia</b></td><td>reunión / cita</td><td>Cuando es audiencia, se nombra así.</td></tr>
          </tbody>
        </table>

        <div class="callout">
          <b>La itálica es un recurso, no un estilo.</b>
          <p>Usar <em>cursiva</em> solo para énfasis verdaderos, nombres de publicaciones, y el nexo del wordmark ("Cabal <em>y</em> Asociados"). No para decorar cada dos palabras — pierde su función.</p>
        </div>
      `
    );
  };

  // ═════════════════════ ACCESSIBILITY ═════════════════════
  window.__dsSections.a11y = () => {
    const { pair, section, codeBlock } = ds();
    // Contrast tests (computed by hand for clarity):
    // WCAG AA: normal text ≥ 4.5, large text / UI ≥ 3.0
    const row = (fg, bg, fgLabel, bgLabel, ratio, pass, size = 'body') => {
      const passLabel = pass ? 'AA' : 'Falla';
      const passColor = pass ? '#2a7a3a' : '#8E1F1C';
      return `
        <tr>
          <td><div style="display:inline-block; width:22px; height:22px; background:${fg}; border:1px solid rgba(14,15,12,0.14); border-radius:3px; vertical-align:middle; margin-right:8px;"></div><code>${fgLabel}</code></td>
          <td><div style="display:inline-block; width:22px; height:22px; background:${bg}; border:1px solid rgba(14,15,12,0.14); border-radius:3px; vertical-align:middle; margin-right:8px;"></div><code>${bgLabel}</code></td>
          <td style="padding:10px 14px; background:${bg}; color:${fg}; font-family:${size === 'display' ? "'Instrument Serif',serif" : "'Geist',sans-serif"}; font-size:${size === 'display' ? '24px' : '15px'}; line-height:1.3;">Aa — Cabal</td>
          <td style="font-family:'Geist Mono', ui-monospace, monospace; font-size:12px; color:var(--ink);">${ratio}</td>
          <td><span style="font-family:'Geist',sans-serif; font-size:10.5px; font-weight:500; letter-spacing:0.22em; text-transform:uppercase; color:${passColor};">${passLabel}</span></td>
        </tr>
      `;
    };

    const focusDemo = `
      <div style="display:flex; gap:20px; align-items:center; flex-wrap:wrap;">
        <button style="font-family:'Geist',sans-serif; font-weight:500; font-size:14px; padding:12px 22px; background:#8E1F1C; color:#fff; border:none; border-radius:4px; outline:2px solid #8E1F1C; outline-offset:2px;">Button focused</button>
        <a href="#" style="font-family:'Geist',sans-serif; font-size:14px; color:#0E0F0C; border-bottom:1px solid rgba(14,15,12,0.3); padding:2px 4px; border-radius:2px; outline:2px solid #8E1F1C; outline-offset:2px; text-decoration:none;">Link focused</a>
        <input placeholder="Input focused" style="font-family:'Geist',sans-serif; font-size:14px; padding:12px 14px; border:1px solid #8E1F1C; border-radius:2px; box-shadow:0 0 0 3px rgba(142,31,28,0.18); outline:none; width:200px;">
      </div>
    `;

    const a11yCode = `// Principios
// 1. Todo elemento interactivo tiene focus-visible
// 2. Nunca outline:none sin un reemplazo
// 3. Texto normal ≥ 4.5:1 contraste (AA). Titulares ≥ 3:1.

// Focus ring global
*:focus-visible {
  outline: 2px solid var(--claret);
  outline-offset: 2px;
  border-radius: inherit;
}

// Skip link (en layout.tsx)
<a
  href="#contenido"
  className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2
             focus:z-50 focus:bg-ink focus:text-paper focus:px-4 focus:py-2
             focus:rounded-sm"
>
  Saltar al contenido
</a>

// Labels siempre asociados
<label htmlFor="email">Correo</label>
<input id="email" name="email" type="email" aria-required />

// Imágenes: alt descriptivo o aria-hidden si es decorativa
<Image src="/retrato.jpg" alt="Juan Cabal López, Socio Director" />
<svg aria-hidden {/* decorativa */} />`;

    return section(
      'a11y', 'nº 15',
      'Accesibilidad', '',
      'No es una capa aparte — es parte del sistema. Un despacho legal tiene por audiencia a gente en situaciones vulnerables: gente mayor, gente estresada, gente con herramientas asistidas. Todo el sistema está diseñado para que el contraste, el foco y la estructura semántica funcionen por default.',
      `
        <h3 class="sub-h">Matriz de contraste · combinaciones del sistema</h3>
        <p class="sub-desc">WCAG AA: texto normal ≥ 4.5:1; texto grande / UI ≥ 3:1. Toda combinación que aparece en el sitio debe estar en esta tabla.</p>
        <table class="tokens">
          <thead><tr><th>Texto</th><th>Fondo</th><th>Muestra</th><th>Ratio</th><th>WCAG</th></tr></thead>
          <tbody>
            ${row('#0E0F0C', '#FFFFFF', 'ink',    'paper',   '18.5 : 1', true)}
            ${row('#0E0F0C', '#F5F1E8', 'ink',    'paper-2', '16.9 : 1', true)}
            ${row('#8E1F1C', '#FFFFFF', 'claret', 'paper',   '7.4 : 1',  true)}
            ${row('#8E1F1C', '#F5F1E8', 'claret', 'paper-2', '6.7 : 1',  true)}
            ${row('#FFFFFF', '#0E0F0C', 'paper',  'ink',     '18.5 : 1', true)}
            ${row('#FFFFFF', '#8E1F1C', 'paper',  'claret',  '7.4 : 1',  true)}
            ${row('#8A8574', '#FFFFFF', 'stone-2','paper',   '4.1 : 1',  false, 'body')}
            ${row('#8A8574', '#0E0F0C', 'stone-2','ink',     '4.5 : 1',  true,  'body')}
          </tbody>
        </table>

        <div class="callout" style="border-left-color:#8E1F1C;">
          <b>Stone-2 sobre paper falla para body text.</b>
          <p>4.1:1 no alcanza el umbral de 4.5:1 para texto normal sobre fondo blanco. Solo se usa para <b>meta / labels / captions</b> (que se consideran UI, ratio mínimo 3:1). Nunca para body text — si aparece un párrafo en stone-2 sobre paper, es un bug.</p>
        </div>

        <h3 class="sub-h">Focus visible · todos los interactivos</h3>
        <div class="pair stack">
          <div class="preview">${focusDemo}</div>
        </div>

        <h3 class="sub-h">Checklist en producción</h3>
        <table class="tokens">
          <thead><tr><th>Requisito</th><th>Cómo se verifica</th></tr></thead>
          <tbody>
            <tr><td><code>html lang="es"</code> en root</td><td>Lectores de pantalla pronuncian correcto.</td></tr>
            <tr><td>Skip link al inicio del body</td><td>Primer Tab lo revela; enlace a <code>#contenido</code>.</td></tr>
            <tr><td>Un solo <code>h1</code> por página</td><td>axe-core o Lighthouse.</td></tr>
            <tr><td><code>focus-visible</code> en todo interactivo</td><td>Navegar la página completa con Tab, nada invisible.</td></tr>
            <tr><td>Labels asociados a inputs</td><td><code>htmlFor</code> + <code>id</code>. Nunca solo placeholder.</td></tr>
            <tr><td>Alt descriptivo en imágenes</td><td>Retratos, diagramas. Íconos decorativos: <code>aria-hidden</code>.</td></tr>
            <tr><td><code>prefers-reduced-motion</code> respetado</td><td>DevTools → Rendering → emulate reduced motion.</td></tr>
            <tr><td>Enlaces no dependen solo del color</td><td>Todos tienen <code>border-bottom</code>, no solo <code>color</code>.</td></tr>
          </tbody>
        </table>

        <h3 class="sub-h">Receta global</h3>
        ${codeBlock(a11yCode, 'tsx')}
      `
    );
  };
})();
