/* DS sections: patterns part 1 (hero, trust, service, bio) */
(function () {
  const { pair, section, codeBlock } = window.__ds;
  window.__dsSections = window.__dsSections || {};

  // ═════════════════════ HERO ═════════════════════
  window.__dsSections.hero = () => {
    const preview = `
      <div style="width:100%; background:#fff; padding:56px 48px; font-family:'Geist',sans-serif;">
        <div style="display:grid; grid-template-columns: 1fr 320px; gap:40px; align-items:end;">
          <div>
            <div style="font-family:'Geist',sans-serif; font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:#8E1F1C; margin-bottom:18px;">Bufete jurídico · desde 1995</div>
            <h1 style="font-family:'Instrument Serif',serif; font-size:68px; line-height:0.95; letter-spacing:-0.02em; margin:0;">
              Defiende<br>
              <span style="font-style:italic; color:#8E1F1C;">con oficio.</span>
            </h1>
            <p style="font-family:'Geist',sans-serif; font-size:16px; line-height:1.55; max-width:520px; margin:24px 0 0; color:#2a2a25;">
              Treinta años representando empresas, patrones y herederos en Tabasco y el sureste.
              Asesoría sobria, documentada, sin promesas vacías.
            </p>
            <div style="display:flex; gap:14px; margin-top:30px; align-items:center;">
              <button style="font-family:'Geist',sans-serif; font-weight:500; font-size:14px; letter-spacing:0.02em; padding:14px 26px; border-radius:4px; background:#8E1F1C; color:#fff; border:none;">Agendar consulta →</button>
              <button style="font-family:'Geist',sans-serif; font-weight:500; font-size:14px; padding:14px 0; background:transparent; color:#0E0F0C; border:none; border-bottom:1px solid #0E0F0C;">Conocer al equipo</button>
            </div>
          </div>
          <div style="display:flex; flex-direction:column; gap:14px; border-left:1px solid rgba(14,15,12,0.14); padding-left:28px;">
            <div>
              <div style="font-family:'Instrument Serif',serif; font-style:italic; font-size:40px; line-height:1; color:#8E1F1C; letter-spacing:-0.01em;">+420</div>
              <div style="font-family:'Geist',sans-serif; font-size:10.5px; letter-spacing:0.2em; text-transform:uppercase; color:#8A8574; margin-top:4px;">Casos resueltos</div>
            </div>
            <div>
              <div style="font-family:'Instrument Serif',serif; font-style:italic; font-size:40px; line-height:1; color:#0E0F0C; letter-spacing:-0.01em;">30 años</div>
              <div style="font-family:'Geist',sans-serif; font-size:10.5px; letter-spacing:0.2em; text-transform:uppercase; color:#8A8574; margin-top:4px;">En Tabasco</div>
            </div>
            <div>
              <div style="font-family:'Instrument Serif',serif; font-style:italic; font-size:40px; line-height:1; color:#0E0F0C; letter-spacing:-0.01em;">&lt; 2 h</div>
              <div style="font-family:'Geist',sans-serif; font-size:10.5px; letter-spacing:0.2em; text-transform:uppercase; color:#8A8574; margin-top:4px;">Respuesta hábil</div>
            </div>
          </div>
        </div>
      </div>`;

    const code = `// components/patterns/Hero.tsx
import { Button } from '@/components/primitives/Button';

export function Hero() {
  return (
    <section className="bg-paper px-6 md:px-12 py-16 md:py-24">
      <div className="mx-auto max-w-[1240px] grid grid-cols-1 md:grid-cols-[1fr_320px] gap-10 items-end">

        <div>
          <div className="text-xs font-medium tracking-[0.22em] uppercase text-claret mb-4">
            Bufete Jurídico · desde 1995
          </div>

          <h1
            className="font-serif text-5xl md:text-[68px] leading-[0.95] tracking-[-0.02em] m-0"
            style={{ fontVariantLigatures: 'none' }}
          >
            Defiende<br />
            <em className="italic text-claret">con oficio.</em>
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed max-w-[520px] text-ink/80">
            Treinta años representando empresas, patrones y herederos en Tabasco y el sureste.
            Asesoría sobria, documentada, sin promesas vacías.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <Button size="lg">Agendar consulta →</Button>
            <Button variant="ghost">Conocer al equipo</Button>
          </div>
        </div>

        <aside className="flex flex-col gap-4 border-l border-rule pl-7">
          <Stat value="+420"   label="Casos resueltos" accent />
          <Stat value="30 años" label="En Tabasco" />
          <Stat value="< 2 h"  label="Respuesta hábil" />
        </aside>
      </div>
    </section>
  );
}

function Stat({ value, label, accent }: { value: string; label: string; accent?: boolean }) {
  return (
    <div>
      <div className={\`font-serif italic text-[40px] leading-none tracking-tight \${accent ? 'text-claret' : 'text-ink'}\`}>
        {value}
      </div>
      <div className="mt-1 text-[10.5px] font-medium tracking-[0.2em] uppercase text-stone-2">
        {label}
      </div>
    </div>
  );
}`;

    return section(
      'hero', 'nº 12',
      'Hero', '',
      'Pieza de entrada. Tipografía dominante (H1 itálico claret), tres stats en columna derecha, dos CTAs (primary + ghost). El kicker en claret tracking alto ancla el sector.',
      pair(preview, code, { wide: true, stack: true, file: 'Hero.tsx', label: 'Hero' })
    );
  };

  // ═════════════════════ TRUST BAR ═════════════════════
  window.__dsSections.trust = () => {
    const preview = `
      <div style="width:100%; background:#F5F1E8; padding:32px 48px; font-family:'Geist',sans-serif; display:flex; align-items:center; justify-content:space-between; gap:40px; flex-wrap:wrap;">
        <div style="font-family:'Instrument Serif',serif; font-style:italic; font-size:20px; letter-spacing:-0.005em; color:#0E0F0C; max-width:360px; line-height:1.35;">
          Firma inscrita en el Colegio de Abogados de Tabasco.
        </div>
        <div style="display:flex; gap:36px; align-items:center; flex-wrap:wrap;">
          ${['CANACO', 'CEEAJ', 'ANADE', 'BARRA MX', 'CAMARA IMI'].map(n => `
            <div style="font-family:'Geist',sans-serif; font-size:11px; font-weight:500; letter-spacing:0.2em; text-transform:uppercase; color:#0E0F0C; opacity:0.55;">${n}</div>
          `).join('')}
        </div>
      </div>`;

    const code = `// components/patterns/TrustBar.tsx
const AFFILIATIONS = ['CANACO', 'CEEAJ', 'ANADE', 'Barra MX', 'Cámara IMI'] as const;

export function TrustBar() {
  return (
    <section className="bg-paper-2 px-6 md:px-12 py-8">
      <div className="mx-auto max-w-[1240px] flex flex-wrap items-center justify-between gap-10">

        <p className="font-serif italic text-xl leading-snug max-w-[360px] text-ink">
          Firma inscrita en el Colegio de Abogados de Tabasco.
        </p>

        <ul className="flex flex-wrap items-center gap-9 list-none p-0 m-0">
          {AFFILIATIONS.map(name => (
            <li
              key={name}
              className="text-xs font-medium tracking-[0.2em] uppercase text-ink/55"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}`;

    return section(
      'trust', 'nº 13',
      'TrustBar', '',
      'Franja de autoridad. Fondo <code class="inline">paper-2</code>, cita corta en Instrument Serif itálica, filiales en Geist upper 55% opacidad. Sin logos — los nombres hablan; evitamos la muralla de badges corporativos.',
      pair(preview, code, { wide: true, stack: true, file: 'TrustBar.tsx', label: 'TrustBar' })
    );
  };

  // ═════════════════════ SERVICE CARD GRID ═════════════════════
  window.__dsSections.service = () => {
    const svcCardStyle = 'background:#fff; border:1px solid rgba(14,15,12,0.14); padding:32px; font-family:"Geist",sans-serif; display:flex; flex-direction:column; gap:16px; color:#0E0F0C;';
    const makeCard = (num, title, body, items) => `
      <div style="${svcCardStyle}">
        <div style="display:flex; justify-content:space-between; align-items:baseline;">
          <span style="font-family:'Instrument Serif',serif; font-style:italic; font-size:22px; color:#8E1F1C; letter-spacing:0;">nº ${num}</span>
          <span style="font-family:'Geist',sans-serif; font-size:10px; font-weight:500; letter-spacing:0.22em; text-transform:uppercase; color:#8A8574;">${items.length} áreas</span>
        </div>
        <h3 style="font-family:'Instrument Serif',serif; font-size:26px; line-height:1.1; letter-spacing:-0.01em; margin:0;">${title}</h3>
        <p style="margin:0; font-size:13.5px; line-height:1.6; color:#3a3a33;">${body}</p>
        <ul style="list-style:none; padding:0; margin:8px 0 0; display:flex; flex-direction:column; gap:6px; border-top:1px solid rgba(14,15,12,0.12); padding-top:14px;">
          ${items.map(it => `<li style="font-size:13px; color:#0E0F0C; display:flex; gap:10px; align-items:baseline;"><span style="color:#8E1F1C; font-family:'Instrument Serif',serif; font-style:italic;">—</span>${it}</li>`).join('')}
        </ul>
      </div>
    `;

    const preview = `
      <div style="width:100%; background:#fff; padding:56px 48px; font-family:'Geist',sans-serif;">
        <div style="max-width:1240px; margin:0 auto;">
          <div style="display:flex; justify-content:space-between; align-items:end; margin-bottom:32px;">
            <div>
              <div style="font-family:'Geist',sans-serif; font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:#8E1F1C; margin-bottom:10px;">nº 02 — Áreas de práctica</div>
              <h2 style="font-family:'Instrument Serif',serif; font-size:40px; line-height:1; letter-spacing:-0.015em; margin:0;">Cinco áreas, <em style="font-style:italic; color:#8E1F1C;">un mismo oficio.</em></h2>
            </div>
          </div>
          <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:16px;">
            ${makeCard('01', 'Derecho corporativo', 'Constitución de sociedades, gobierno, M&amp;A.', ['Sociedades y holdings', 'Contratos mercantiles', 'Operaciones de capital'])}
            ${makeCard('02', 'Laboral y patronal', 'Del aviso de despido al convenio ante la Junta.', ['Relaciones individuales', 'Sindicatos y conflictos', 'Cumplimiento NOMs'])}
            ${makeCard('03', 'Inmobiliario', 'Compraventa, escrituración, due diligence.', ['Escrituración', 'Régimen condominal', 'Litigio de propiedad'])}
          </div>
        </div>
      </div>`;

    const code = `// components/patterns/ServiceCard.tsx
type Service = {
  number: string;       // "01"
  title: string;
  body: string;
  areas: string[];
};

export function ServiceCard({ number, title, body, areas }: Service) {
  return (
    <article className="bg-paper border border-rule p-8 flex flex-col gap-4">
      <header className="flex justify-between items-baseline">
        <span className="font-serif italic text-claret text-xl">nº {number}</span>
        <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-stone-2">
          {areas.length} áreas
        </span>
      </header>

      <h3 className="font-serif text-[26px] leading-tight tracking-tight m-0">
        {title}
      </h3>

      <p className="text-[13.5px] leading-relaxed text-ink/75 m-0">
        {body}
      </p>

      <ul className="pt-3.5 mt-2 border-t border-rule flex flex-col gap-1.5 list-none p-0">
        {areas.map(area => (
          <li key={area} className="text-sm text-ink flex gap-2.5 items-baseline">
            <span className="text-claret font-serif italic">—</span>
            {area}
          </li>
        ))}
      </ul>
    </article>
  );
}`;

    const usageJsx = `// Uso en la landing
import { ServiceCard } from '@/components/patterns/ServiceCard';

const SERVICES = [
  {
    number: '01',
    title: 'Derecho corporativo',
    body: 'Constitución de sociedades, gobierno, M&A.',
    areas: ['Sociedades y holdings', 'Contratos mercantiles', 'Operaciones de capital'],
  },
  // ... 4 more
];

export function Services() {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-[1240px] mx-auto">
        <header className="flex justify-between items-end mb-8">
          <div>
            <div className="text-xs font-medium tracking-[0.22em] uppercase text-claret mb-2.5">
              nº 02 — Áreas de práctica
            </div>
            <h2 className="font-serif text-[40px] leading-none tracking-tight m-0">
              Cinco áreas, <em className="italic text-claret">un mismo oficio.</em>
            </h2>
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-4">
          {SERVICES.map(s => <ServiceCard key={s.number} {...s} />)}
        </div>
      </div>
    </section>
  );
}`;

    return section(
      'service', 'nº 14',
      'ServiceCard', '',
      'Ficha de área de práctica. Número en serif claret como ancla, título grande, body, y lista de sub-áreas separada por border-top. Grid de 3 en desktop, 1 en mobile.',
      `
        ${pair(preview, usageJsx, { wide: true, stack: true, file: 'uso', label: 'Services grid' })}

        <h3 class="sub-h">Componente</h3>
        ${codeBlock(code, 'tsx', 'ServiceCard.tsx')}
      `
    );
  };

  // ═════════════════════ ATTORNEY BIO ═════════════════════
  window.__dsSections.bio = () => {
    const photoBg = 'linear-gradient(135deg, #3a3a33 0%, #0E0F0C 100%)';

    const preview = `
      <div style="width:100%; background:#fff; padding:56px 48px; font-family:'Geist',sans-serif;">
        <div style="max-width:1240px; margin:0 auto; display:grid; grid-template-columns: 420px 1fr; gap:56px; align-items:start;">
          <div style="aspect-ratio: 4 / 5; background:${photoBg}; border-radius:4px; position:relative; overflow:hidden;">
            <div style="position:absolute; bottom:20px; left:20px; font-family:'Geist',sans-serif; font-size:10px; font-weight:500; letter-spacing:0.22em; text-transform:uppercase; color:rgba(243,239,230,0.6);">Retrato · Villahermosa 2024</div>
          </div>
          <div>
            <div style="font-family:'Geist',sans-serif; font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:#8E1F1C; margin-bottom:14px;">Socio Director</div>
            <h2 style="font-family:'Instrument Serif',serif; font-size:56px; line-height:0.95; letter-spacing:-0.02em; margin:0;">Héctor <em style="font-style:italic;">Cabal Priego</em></h2>
            <p style="font-family:'Instrument Serif',serif; font-style:italic; font-size:20px; line-height:1.4; color:#3a3a33; margin:18px 0 28px; max-width:520px;">
              "La ley se trabaja, no se improvisa. Cada expediente es un pequeño oficio que se entrega cerrado o no se entrega."
            </p>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:24px 40px; max-width:560px; padding-top:24px; border-top:1px solid rgba(14,15,12,0.2);">
              ${[
                ['Cédula', '1234567 · 1994'],
                ['Formación', 'UNAM · JD'],
                ['Maestría', 'ITAM · Corporativo'],
                ['Idiomas', 'Español · Inglés'],
              ].map(([k, v]) => `
                <div>
                  <div style="font-family:'Geist',sans-serif; font-size:10px; font-weight:500; letter-spacing:0.22em; text-transform:uppercase; color:#8A8574; margin-bottom:4px;">${k}</div>
                  <div style="font-family:'Instrument Serif',serif; font-style:italic; font-size:18px; color:#0E0F0C; letter-spacing:-0.005em;">${v}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>`;

    const code = `// components/patterns/AttorneyBio.tsx
import Image from 'next/image';

interface AttorneyBioProps {
  role: string;            // "Socio Director"
  firstName: string;       // "Héctor"
  lastName: string;        // "Cabal Priego"
  quote: string;
  photoSrc: string;
  photoAlt: string;
  credentials: { label: string; value: string }[];
}

export function AttorneyBio({
  role, firstName, lastName, quote,
  photoSrc, photoAlt, credentials,
}: AttorneyBioProps) {
  return (
    <section className="bg-paper px-6 md:px-12 py-16 md:py-24">
      <div className="mx-auto max-w-[1240px] grid grid-cols-1 md:grid-cols-[420px_1fr] gap-14 items-start">

        <figure className="relative aspect-[4/5] rounded-md overflow-hidden bg-ink">
          <Image
            src={photoSrc}
            alt={photoAlt}
            fill
            sizes="(max-width: 768px) 100vw, 420px"
            className="object-cover"
          />
          <figcaption className="absolute bottom-5 left-5 text-[10px] font-medium tracking-[0.22em] uppercase text-paper/60">
            Retrato · Villahermosa 2024
          </figcaption>
        </figure>

        <div>
          <div className="text-xs font-medium tracking-[0.22em] uppercase text-claret mb-3.5">
            {role}
          </div>

          <h2 className="font-serif text-4xl md:text-[56px] leading-[0.95] tracking-[-0.02em] m-0">
            {firstName} <em className="italic">{lastName}</em>
          </h2>

          <blockquote className="font-serif italic text-xl leading-snug text-ink/80 max-w-[520px] mt-4 mb-7 mx-0 pl-0 border-0">
            "{quote}"
          </blockquote>

          <dl className="grid grid-cols-2 gap-x-10 gap-y-6 max-w-[560px] pt-6 border-t border-ink/20">
            {credentials.map(({ label, value }) => (
              <div key={label}>
                <dt className="text-[10px] font-medium tracking-[0.22em] uppercase text-stone-2 mb-1">
                  {label}
                </dt>
                <dd className="font-serif italic text-lg text-ink m-0">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}`;

    return section(
      'bio', 'nº 15',
      'AttorneyBio', '',
      'Ficha del socio/abogado. Foto 4:5 a la izquierda (placeholder — usar retrato profesional), nombre en serif con apellido itálico, cita editorial, y credenciales en grid de 2 columnas con labels en caps tracking alto.',
      pair(preview, code, { wide: true, stack: true, file: 'AttorneyBio.tsx', label: 'AttorneyBio' })
    );
  };
})();
