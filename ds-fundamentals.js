/* DS sections: fundamentals */
(function () {
  const { pair, section, codeBlock } = window.__ds;
  window.__dsSections = window.__dsSections || {};

  // ═════════════════════ INSTALL ═════════════════════
  window.__dsSections.install = () => section(
    'install', 'nº 01',
    'Instalación y', 'setup',
    'El sistema está optimizado para Next.js 15 + React 19 + Tailwind CSS v4. Los tokens viven en un único archivo <code class="inline">brand.css</code> que se importa una vez desde el layout raíz.',
    `
      <h3 class="sub-h">1 · Dependencias</h3>
      <p class="sub-desc">Instalar Next.js, Tailwind v4 y las fuentes vía <code class="inline">next/font</code>.</p>
      ${codeBlock(`# Crear el proyecto
npx create-next-app@latest cabal-web --typescript --app --tailwind
cd cabal-web

# Tailwind v4 ya viene incluido, pero asegúrate de la versión
npm install tailwindcss@next @tailwindcss/postcss@next

# Fuentes: Instrument Serif + Geist vía next/font (no requiere instalar paquete)`, 'bash')}

      <h3 class="sub-h">2 · Estructura de carpetas</h3>
      <p class="sub-desc">Separamos tokens, primitivos y patrones. Cada componente vive en su propio archivo; los tokens globales viven en <code class="inline">app/globals.css</code>.</p>
      ${codeBlock(`cabal-web/
├── app/
│   ├── globals.css          ← tokens + @theme (Tailwind v4)
│   ├── layout.tsx           ← fonts + html lang="es"
│   └── page.tsx             ← landing
├── components/
│   ├── primitives/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   └── Badge.tsx
│   ├── patterns/
│   │   ├── Hero.tsx
│   │   ├── TrustBar.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── AttorneyBio.tsx
│   │   ├── FAQ.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppButton.tsx
│   └── brand/
│       ├── Monogram.tsx     ← el símbolo de 4 barras
│       └── Wordmark.tsx
└── lib/
    └── cn.ts                ← helper para concatenar clases`, 'bash')}

      <h3 class="sub-h">3 · Carga de fuentes</h3>
      <p class="sub-desc">Instrument Serif para display/serif, Geist para UI. Usar <code class="inline">next/font/google</code> para zero-layout-shift.</p>
      ${codeBlock(`// app/layout.tsx
import { Instrument_Serif, Geist } from 'next/font/google';
import './globals.css';

const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const sans = Geist({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={\`\${serif.variable} \${sans.variable}\`}>
      <body className="bg-paper text-ink font-sans antialiased">
        {children}
      </body>
    </html>
  );
}`, 'tsx', 'app/layout.tsx')}
    `
  );

  // ═════════════════════ TAILWIND CONFIG ═════════════════════
  window.__dsSections.tailwind = () => section(
    'tailwind', 'nº 02',
    'Tailwind v4 ·', '@theme',
    'Tailwind v4 se configura en CSS con <code class="inline">@theme</code>. Este bloque va en <code class="inline">app/globals.css</code> y expone todos los tokens como utilidades (<code class="inline">bg-claret</code>, <code class="inline">text-ink</code>, etc).',
    `
      ${codeBlock(`/* app/globals.css */
@import "tailwindcss";

@theme {
  /* ─── Colors ─── */
  --color-ink:        #0E0F0C;   /* texto principal, primario 50% */
  --color-paper:      #FFFFFF;   /* fondo principal */
  --color-paper-2:    #F5F1E8;   /* fondos secundarios, bloques */
  --color-stone:      #C9C1B0;   /* soporte 5% */
  --color-stone-2:    #8A8574;   /* texto secundario, meta */
  --color-claret:     #8E1F1C;   /* único acento — 10% uso */
  --color-claret-deep:#3E0C0B;   /* sombra del monograma */
  --color-rule:       rgba(14, 15, 12, 0.14);
  --color-rule-strong:rgba(14, 15, 12, 0.35);

  /* ─── Typography ─── */
  --font-serif: var(--font-serif), 'Instrument Serif', 'Times New Roman', serif;
  --font-sans:  var(--font-sans),  'Geist', ui-sans-serif, system-ui, sans-serif;
  --font-mono:  'Geist Mono', ui-monospace, monospace;

  --text-xs:   0.75rem;   /* 12 — chrome, meta */
  --text-sm:   0.875rem;  /* 14 — secondary UI */
  --text-base: 1rem;      /* 16 — body */
  --text-lg:   1.125rem;  /* 18 — lede */
  --text-xl:   1.375rem;  /* 22 — card titles */
  --text-2xl:  1.75rem;   /* 28 — section intro */
  --text-3xl:  2.625rem;  /* 42 — section H2 */
  --text-4xl:  3.5rem;    /* 56 — page H1 */
  --text-5xl:  4.5rem;    /* 72 — hero */
  --text-6xl:  6rem;      /* 96 — display */

  /* ─── Spacing (8pt base) ─── */
  --spacing-0_5: 0.125rem;  /*  2 */
  --spacing-1:   0.25rem;   /*  4 */
  --spacing-2:   0.5rem;    /*  8 */
  --spacing-3:   0.75rem;   /* 12 */
  --spacing-4:   1rem;      /* 16 */
  --spacing-6:   1.5rem;    /* 24 */
  --spacing-8:   2rem;      /* 32 */
  --spacing-12:  3rem;      /* 48 */
  --spacing-16:  4rem;      /* 64 */
  --spacing-24:  6rem;      /* 96 */

  /* ─── Radii ─── */
  --radius-none: 0;
  --radius-sm:   2px;       /* inputs, badges */
  --radius-md:   4px;       /* cards, bloques */
  --radius-lg:   6px;       /* contenedores grandes */
  --radius-full: 9999px;    /* WhatsApp FAB, pill badges */

  /* ─── Shadows — minimal, profesional, no floating cards ─── */
  --shadow-none: none;
  --shadow-mark: 0 8px 12px rgba(90, 15, 15, 0.35),
                 0 2px 3px rgba(0, 0, 0, 0.22);  /* SOLO para el monograma */
  --shadow-fab:  0 12px 28px rgba(142, 31, 28, 0.35),
                 0 4px 10px rgba(0, 0, 0, 0.15); /* SOLO para el botón flotante WA */
}

@layer base {
  body {
    font-family: var(--font-sans);
    letter-spacing: -0.005em;
  }
  .font-serif { letter-spacing: -0.015em; }
}`, 'css', 'app/globals.css')}

      <div class="callout">
        <b>Regla de oro: nada de sombras decorativas.</b>
        <p>El sistema define sólo dos sombras nombradas: <code class="inline">shadow-mark</code> (símbolo) y <code class="inline">shadow-fab</code> (botón flotante). Si un componente necesita jerarquía, se usa borde + tinta, no blur.</p>
      </div>
    `
  );

  // ═════════════════════ COLORS ═════════════════════
  window.__dsSections.colors = () => {
    const swatch = (name, hex, varName, cssVar, bordered = false, utility = '') => `
      <div class="color-swatch">
        <div class="chip${bordered ? ' bordered' : ''}" style="background:${hex}"></div>
        <div class="info">
          <div class="name">${name}</div>
          <div class="hex">${hex}</div>
          <div class="var">${utility}</div>
        </div>
      </div>
    `;

    return section(
      'colors', 'nº 03',
      'Paleta ·', 'tinta, papel, claret',
      'Cuatro colores. El sistema es 80% blanco y negro — así la marca no envejece. El claret es el único acento, reservado para cifras críticas, el símbolo y el nexo tipográfico. La piedra es soporte: fondos y separadores.',
      `
        <div class="token-grid">
          ${swatch('Tinta', '#0E0F0C', '--color-ink', 'ink', false, 'bg-ink · text-ink')}
          ${swatch('Papel', '#FFFFFF', '--color-paper', 'paper', true, 'bg-paper')}
          ${swatch('Paper 2', '#F5F1E8', '--color-paper-2', 'paper-2', false, 'bg-paper-2')}
          ${swatch('Claret', '#8E1F1C', '--color-claret', 'claret', false, 'bg-claret · text-claret')}
          ${swatch('Claret deep', '#3E0C0B', '--color-claret-deep', 'claret-deep', false, 'bg-claret-deep')}
          ${swatch('Stone', '#C9C1B0', '--color-stone', 'stone', false, 'bg-stone')}
          ${swatch('Stone 2', '#8A8574', '--color-stone-2', 'stone-2', false, 'text-stone-2')}
          ${swatch('Rule', 'rgba(14,15,12,0.14)', '--color-rule', 'rule', true, 'border-rule')}
        </div>

        <h3 class="sub-h">Distribución recomendada</h3>
        <p class="sub-desc">El 80 / 35 / 10 / 5 no es estricto pero sí honesto — así se ve un sitio sobrio.</p>
        <table class="tokens">
          <thead><tr><th>Rol</th><th>Token</th><th>% del diseño</th><th>Cuándo usar</th></tr></thead>
          <tbody>
            <tr><td>Tinta</td><td><code>text-ink</code> / <code>bg-ink</code></td><td>50%</td><td>Texto principal, footer, títulos.</td></tr>
            <tr><td>Papel</td><td><code>bg-paper</code></td><td>35%</td><td>Fondo. Siempre blanco puro.</td></tr>
            <tr><td>Paper 2</td><td><code>bg-paper-2</code></td><td>—</td><td>Bloques de énfasis, trust bar, FAQ abierta.</td></tr>
            <tr><td>Claret</td><td><code>text-claret</code></td><td>10%</td><td>CTA, cifras, <code>&lt;em&gt;</code> en titulares, dot de presencia.</td></tr>
            <tr><td>Stone 2</td><td><code>text-stone-2</code></td><td>5%</td><td>Meta, labels, captions, separadores textuales.</td></tr>
          </tbody>
        </table>
      `
    );
  };

  // ═════════════════════ TYPE ═════════════════════
  window.__dsSections.type = () => {
    const row = (label, sample, meta, sampleCls, sampleStyle = '') => `
      <div class="type-row">
        <div class="tr-label"><b>${label.split('·')[0].trim()}</b>${label.split('·')[1] ? label.split('·')[1] : ''}</div>
        <div class="tr-sample ${sampleCls}" style="${sampleStyle}">${sample}</div>
        <div class="tr-meta">${meta}</div>
      </div>
    `;

    return section(
      'type', 'nº 04',
      'Tipografía ·', 'serif de autor + sans funcional',
      'Dos familias. <b>Instrument Serif</b> para títulos, énfasis itálicos y citas — aporta el carácter de oficio. <b>Geist</b> para todo lo funcional: UI, body, chrome, meta. Nunca mezclar dentro de un mismo nivel de jerarquía.',
      `
        <h3 class="sub-h">Escala display (Instrument Serif)</h3>
        <p class="sub-desc">Usar en titulares, lede, nombres de sección. Cuerpo 400, itálica para énfasis.</p>
        ${row('H1 · 72px', 'Defiende con <em style="color:var(--claret);font-style:italic">oficio.</em>', '72 / 0.95 / -0.02em', 'font-serif', 'font-family:"Instrument Serif",serif; font-size:72px; line-height:0.95; letter-spacing:-0.02em;')}
        ${row('H2 · 42px', 'Un sistema, <em style="color:var(--claret);font-style:italic">tres voces.</em>', '42 / 1 / -0.015em', 'font-serif', 'font-family:"Instrument Serif",serif; font-size:42px; line-height:1; letter-spacing:-0.015em;')}
        ${row('H3 · 28px', '<em style="font-style:italic">Derecho corporativo</em>', '28 / 1.1 / -0.01em', 'font-serif', 'font-family:"Instrument Serif",serif; font-size:28px; line-height:1.1; letter-spacing:-0.01em;')}
        ${row('Lede · 22px', 'Treinta años defendiendo empresas en Tabasco y el sureste.', '22 / 1.5 / -0.005em', 'font-serif', 'font-family:"Instrument Serif",serif; font-size:22px; line-height:1.5; letter-spacing:-0.005em; font-style:italic;')}

        <h3 class="sub-h">Escala UI (Geist)</h3>
        <p class="sub-desc">Todo lo funcional. Weights: 400 para body, 500 para labels, 600 para CTAs.</p>
        ${row('Body · 16px', 'En Cabal y Asociados representamos a empresas, patrones y herederos en los asuntos que definen su continuidad.', '16 / 1.6 / -0.005em · 400', '', 'font-family:"Geist",sans-serif; font-size:16px; line-height:1.6; letter-spacing:-0.005em;')}
        ${row('Small · 14px', 'Respuesta en menos de 2 horas hábiles.', '14 / 1.5 · 400', '', 'font-family:"Geist",sans-serif; font-size:14px; line-height:1.5;')}
        ${row('Meta · 11px', 'VILLAHERMOSA · TABASCO · EST. 1995', '11 / 1.4 / 0.22em · 500 · UPPER', '', 'font-family:"Geist",sans-serif; font-size:11px; font-weight:500; letter-spacing:0.22em; text-transform:uppercase; color:var(--stone-2);')}
        ${row('Button · 14px', 'Agendar consulta', '14 / 1 · 500', '', 'font-family:"Geist",sans-serif; font-size:14px; font-weight:500;')}

        <h3 class="sub-h">Tokens Tailwind</h3>
        ${codeBlock(`// Uso en JSX
<h1 className="font-serif text-5xl leading-[0.95] tracking-tight">
  Defiende <em className="text-claret italic">con oficio.</em>
</h1>

<p className="text-lg leading-relaxed text-ink/80">
  Treinta años defendiendo empresas en Tabasco.
</p>

<span className="text-xs font-medium tracking-[0.22em] uppercase text-stone-2">
  Villahermosa · Tabasco
</span>`, 'jsx')}

        <div class="callout">
          <b>Ligaduras: apagar en displays grandes.</b>
          <p>Instrument Serif aplica ligaduras automáticas <code class="inline">fi</code>, <code class="inline">ff</code>, <code class="inline">fl</code>. A +64px los glifos se pegan. Desactivar con <code class="inline">font-variant-ligatures: none</code> y <code class="inline">font-feature-settings: 'liga' 0, 'dlig' 0, 'clig' 0</code>.</p>
        </div>
      `
    );
  };

  // ═════════════════════ SPACING ═════════════════════
  window.__dsSections.spacing = () => {
    const row = (name, px, rem) => `
      <div class="space-row">
        <span class="sp-label">${name}</span>
        <div class="sp-bar" style="width:${px}px"></div>
        <span class="sp-px">${px}px · ${rem}rem</span>
      </div>
    `;

    return section(
      'spacing', 'nº 05',
      'Espaciado ·', 'base 8pt',
      'Escala múltiplo de 4/8. Se usan pocas paradas a propósito — menos opciones, más ritmo consistente. Para padding de secciones grandes: <code class="inline">py-24</code>. Para tarjetas: <code class="inline">p-8</code>. Para elementos inline: <code class="inline">gap-4</code>.',
      `
        ${row('0.5', 2, 0.125)}
        ${row('1', 4, 0.25)}
        ${row('2', 8, 0.5)}
        ${row('3', 12, 0.75)}
        ${row('4', 16, 1)}
        ${row('6', 24, 1.5)}
        ${row('8', 32, 2)}
        ${row('12', 48, 3)}
        ${row('16', 64, 4)}
        ${row('24', 96, 6)}

        <h3 class="sub-h">Recetas de layout</h3>
        <table class="tokens">
          <thead><tr><th>Contexto</th><th>Clases</th><th>Comentario</th></tr></thead>
          <tbody>
            <tr><td>Sección landing</td><td><code>py-24 px-6 md:px-12</code></td><td>96px arriba/abajo en desktop.</td></tr>
            <tr><td>Card de servicio</td><td><code>p-8 gap-6</code></td><td>32px interior, 24px entre elementos.</td></tr>
            <tr><td>Form stack</td><td><code>space-y-4</code></td><td>16px entre campos.</td></tr>
            <tr><td>Nav / chrome</td><td><code>px-12 py-4</code></td><td>48 horizontal, 16 vertical.</td></tr>
            <tr><td>Container máx</td><td><code>max-w-[1240px] mx-auto</code></td><td>Anchura útil landing.</td></tr>
          </tbody>
        </table>
      `
    );
  };

  // ═════════════════════ RADII + ELEVATION ═════════════════════
  window.__dsSections.radii = () => section(
    'radii', 'nº 06',
    'Radios y', 'elevación',
    'Esquinas moderadas: el sitio debe sentirse editorial, no <em>software-y</em>. Elevación: casi ninguna — la jerarquía se construye con espacios y tinta, no con sombras.',
    `
      <table class="tokens">
        <thead><tr><th>Token</th><th>Valor</th><th>Uso</th></tr></thead>
        <tbody>
          <tr><td><code>rounded-none</code></td><td>0</td><td>Bloques de contenido full-bleed, tarjetas grandes editoriales.</td></tr>
          <tr><td><code>rounded-sm</code></td><td>2px</td><td>Inputs, badges, pills.</td></tr>
          <tr><td><code>rounded-md</code></td><td>4px</td><td>Cards, service tiles, CTAs secundarios.</td></tr>
          <tr><td><code>rounded-lg</code></td><td>6px</td><td>Contenedores grandes (hero visual, FAQ).</td></tr>
          <tr><td><code>rounded-full</code></td><td>∞</td><td>Botón flotante WhatsApp, dot de presencia, avatares.</td></tr>
        </tbody>
      </table>

      <h3 class="sub-h">Elevación</h3>
      <table class="tokens">
        <thead><tr><th>Token</th><th>Valor</th><th>Uso</th></tr></thead>
        <tbody>
          <tr><td><code>shadow-none</code></td><td>none</td><td><b>Default para todo.</b> Cards, botones, modales.</td></tr>
          <tr><td><code>shadow-mark</code></td><td>Reservado</td><td>Únicamente el monograma (el símbolo de 4 barras).</td></tr>
          <tr><td><code>shadow-fab</code></td><td>Reservado</td><td>Únicamente el botón flotante de WhatsApp.</td></tr>
        </tbody>
      </table>

      <div class="callout">
        <b>No decorar con sombras.</b>
        <p>Si un componente "no se ve suficiente" sin sombra, probablemente le falta contraste de tinta, borde, o espacio. Ir primero a esos tres ejes.</p>
      </div>
    `
  );

  // ═════════════════════ LOGO ═════════════════════
  window.__dsSections.logo = () => {
    const monogramCss = `
/* components/brand/monogram.css — o inline en globals.css */
.monogram {
  display: inline-flex;
  align-items: flex-end;
  gap: var(--m-gap, 6px);
  height: var(--m-h, 64px);
  filter: drop-shadow(0 calc(var(--m-h, 64px) * 0.07) calc(var(--m-h, 64px) * 0.09) rgba(90, 15, 15, 0.35))
          drop-shadow(0 calc(var(--m-h, 64px) * 0.02) calc(var(--m-h, 64px) * 0.03) rgba(0, 0, 0, 0.22));
}
.monogram i {
  display: block;
  width: var(--m-w, 10px);
  background: linear-gradient(180deg, #B8332E 0%, #8E1F1C 32%, #6B1715 62%, #3E0C0B 100%);
  border-radius: 1px;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.14),
              inset -1px 0 0 rgba(0,0,0,0.24);
}
.monogram i:nth-child(1) { height: 62%; }
.monogram i:nth-child(2) { height: 100%; }
.monogram i:nth-child(3) { height: 84%; }
.monogram i:nth-child(4) { height: 46%; }`;

    const monogramJsx = `// components/brand/Monogram.tsx
import './monogram.css';

type Size = 'sm' | 'md' | 'lg' | 'xl';

const SIZES: Record<Size, { h: number; w: number; gap: number }> = {
  sm: { h: 24, w: 3,    gap: 1.8 },
  md: { h: 40, w: 5,    gap: 3   },
  lg: { h: 64, w: 8,    gap: 5   },
  xl: { h: 108, w: 14,  gap: 9   },
};

export function Monogram({ size = 'md' }: { size?: Size }) {
  const { h, w, gap } = SIZES[size];
  return (
    <span
      className="monogram"
      aria-label="Cabal y Asociados"
      style={{
        ['--m-h' as any]: \`\${h}px\`,
        ['--m-w' as any]: \`\${w}px\`,
        ['--m-gap' as any]: \`\${gap}px\`,
      }}
    >
      <i /><i /><i /><i />
    </span>
  );
}`;

    const wordmarkJsx = `// components/brand/Wordmark.tsx
export function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span
      className={\`font-serif font-normal leading-none tracking-[0.04em] \${className}\`}
    >
      Cabal <em className="italic tracking-normal">y</em> Asociados
    </span>
  );
}`;

    const lockupJsx = `// components/brand/Logo.tsx — el lockup principal
import { Monogram } from './Monogram';
import { Wordmark } from './Wordmark';

export function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const wordSize = { sm: 'text-xl', md: 'text-3xl', lg: 'text-5xl' }[size];
  const gap     = { sm: 'gap-3',    md: 'gap-5',    lg: 'gap-8'    }[size];
  return (
    <div className={\`flex items-center \${gap}\`}>
      <Monogram size={size === 'lg' ? 'xl' : size === 'md' ? 'md' : 'sm'} />
      <Wordmark className={wordSize} />
    </div>
  );
}`;

    const lockupPreview = `
      <div style="display:flex; align-items:center; gap:20px;">
        <div class="monogram" style="--m-h:40px; --m-w:5px; --m-gap:3px;">
          <i></i><i></i><i></i><i></i>
        </div>
        <div class="wordmark" style="font-size:28px; color:var(--ink);">Cabal <span class="amp">y</span> Asociados</div>
      </div>`;

    const monogramAlonePreview = `
      <div style="display:flex; gap:48px; align-items:flex-end;">
        <div class="monogram" style="--m-h:24px; --m-w:3px; --m-gap:1.8px;"><i></i><i></i><i></i><i></i></div>
        <div class="monogram" style="--m-h:40px; --m-w:5px; --m-gap:3px;"><i></i><i></i><i></i><i></i></div>
        <div class="monogram" style="--m-h:64px; --m-w:8px; --m-gap:5px;"><i></i><i></i><i></i><i></i></div>
        <div class="monogram" style="--m-h:108px; --m-w:14px; --m-gap:9px;"><i></i><i></i><i></i><i></i></div>
      </div>`;

    return section(
      'logo', 'nº 07',
      'Logo ·', 'símbolo + wordmark',
      'El símbolo son cuatro columnas de alturas variadas en gradiente rojo — pilares de sala, barras de expediente. El wordmark va en Instrument Serif itálico. Se construyen como componentes React con props de tamaño.',
      `
        <h3 class="sub-h">Lockup principal</h3>
        ${pair(lockupPreview, lockupJsx, { file: 'Logo.tsx' })}

        <h3 class="sub-h">Monograma (4 tamaños)</h3>
        ${pair(monogramAlonePreview, monogramJsx, { file: 'Monogram.tsx' })}

        <h3 class="sub-h">Estilos del símbolo (CSS)</h3>
        <p class="sub-desc">El <code class="inline">drop-shadow</code> y el gradiente son parte del símbolo — no se configuran por utility. Conviven en <code class="inline">monogram.css</code> importado por <code class="inline">Monogram.tsx</code>.</p>
        ${codeBlock(monogramCss, 'css', 'monogram.css')}

        <h3 class="sub-h">Wordmark</h3>
        ${pair(
          `<div class="wordmark" style="font-size:32px; color:var(--ink);">Cabal <span class="amp">y</span> Asociados</div>`,
          wordmarkJsx,
          { file: 'Wordmark.tsx' }
        )}

        <div class="callout">
          <b>Clear space.</b>
          <p>Mínimo 1× la altura del símbolo en todos sus lados. En tamaños <code class="inline">sm</code> puede bajar a 0.5×.</p>
        </div>
      `
    );
  };
})();
