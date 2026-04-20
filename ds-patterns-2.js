/* DS sections: patterns part 2 (FAQ, contact, footer, WhatsApp) */
(function () {
  const { pair, section, codeBlock } = window.__ds;
  window.__dsSections = window.__dsSections || {};

  // ═════════════════════ FAQ ═════════════════════
  window.__dsSections.faq = () => {
    const item = (num, q, a, open = false) => `
      <div style="border-top:1px solid rgba(14,15,12,0.14); padding:22px 0;">
        <div style="display:grid; grid-template-columns: 48px 1fr 24px; gap:20px; align-items:baseline; cursor:pointer;">
          <span style="font-family:'Instrument Serif',serif; font-style:italic; color:#8E1F1C; font-size:18px;">${num}</span>
          <div style="font-family:'Instrument Serif',serif; font-size:24px; line-height:1.25; letter-spacing:-0.005em; color:#0E0F0C;">${q}</div>
          <span style="font-family:'Geist',sans-serif; font-size:18px; color:#0E0F0C; text-align:right;">${open ? '−' : '+'}</span>
        </div>
        ${open ? `<div style="padding:14px 0 0 68px; font-family:'Geist',sans-serif; font-size:14.5px; line-height:1.65; color:#3a3a33; max-width:640px;">${a}</div>` : ''}
      </div>
    `;
    const preview = `
      <div style="width:100%; background:#fff; padding:56px 48px; font-family:'Geist',sans-serif;">
        <div style="max-width:960px; margin:0 auto;">
          <div style="font-family:'Geist',sans-serif; font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:#8E1F1C; margin-bottom:10px;">nº 05 — Preguntas frecuentes</div>
          <h2 style="font-family:'Instrument Serif',serif; font-size:40px; line-height:1; letter-spacing:-0.015em; margin:0 0 32px;">Lo que <em style="font-style:italic; color:#8E1F1C;">conviene saber.</em></h2>
          ${item('01', '¿Cuánto cuesta una primera consulta?', 'La primera reunión de diagnóstico —45 minutos, presencial o por videollamada— es sin costo. Si acordamos proceder, acordamos honorarios por escrito antes de cualquier actuación.', true)}
          ${item('02', '¿Atienden fuera de Tabasco?')}
          ${item('03', '¿En cuánto tiempo responden un caso urgente?')}
          ${item('04', '¿Trabajan por igualas o por caso?')}
        </div>
      </div>`;

    const code = `// components/patterns/FAQ.tsx
'use client';
import { useState } from 'react';
import { cn } from '@/lib/cn';

type QA = { q: string; a: string };

export function FAQ({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-paper px-6 md:px-12 py-16 md:py-24">
      <div className="mx-auto max-w-[960px]">
        <div className="text-xs font-medium tracking-[0.22em] uppercase text-claret mb-2.5">
          nº 05 — Preguntas frecuentes
        </div>
        <h2 className="font-serif text-[40px] leading-none tracking-tight m-0 mb-8">
          Lo que <em className="italic text-claret">conviene saber.</em>
        </h2>

        <ul className="list-none p-0 m-0">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <li key={it.q} className="border-t border-rule last:border-b">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full py-5.5 grid grid-cols-[48px_1fr_24px] gap-5 items-baseline text-left"
                >
                  <span className="font-serif italic text-claret text-lg">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-serif text-2xl leading-snug tracking-tight text-ink">
                    {it.q}
                  </span>
                  <span className="text-lg text-right">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div
                  className={cn(
                    'grid transition-[grid-template-rows] duration-300 ease-out',
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pl-[68px] max-w-[640px] text-[14.5px] leading-relaxed text-ink/75 m-0">
                      {it.a}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}`;

    return section(
      'faq', 'nº 16',
      'FAQ', '',
      'Acordeón editorial. Número en serif itálico claret, pregunta en Instrument Serif 24px, indicador +/−. Al abrir: animación suave con grid-template-rows 0fr→1fr. Un item puede estar abierto a la vez.',
      pair(preview, code, { wide: true, stack: true, file: 'FAQ.tsx', label: 'FAQ' })
    );
  };

  // ═════════════════════ CONTACT FORM ═════════════════════
  window.__dsSections.contact = () => {
    const inp = 'width:100%; font-family:"Geist",sans-serif; font-size:14px; padding:12px 14px; border:1px solid rgba(14,15,12,0.2); border-radius:2px; background:#fff; color:#0E0F0C;';
    const lbl = 'display:block; font-family:"Geist",sans-serif; font-size:10.5px; font-weight:500; letter-spacing:0.22em; text-transform:uppercase; color:#0E0F0C; margin-bottom:6px;';

    const preview = `
      <div style="width:100%; background:#F5F1E8; padding:56px 48px; font-family:'Geist',sans-serif;">
        <div style="max-width:1240px; margin:0 auto; display:grid; grid-template-columns: 1fr 1fr; gap:72px;">
          <div>
            <div style="font-family:'Geist',sans-serif; font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:#8E1F1C; margin-bottom:10px;">nº 06 — Contacto</div>
            <h2 style="font-family:'Instrument Serif',serif; font-size:48px; line-height:0.95; letter-spacing:-0.02em; margin:0;">Hablemos<br><em style="font-style:italic; color:#8E1F1C;">del caso.</em></h2>
            <p style="margin:20px 0 32px; font-size:15px; line-height:1.6; color:#3a3a33; max-width:420px;">Respondemos en menos de 2 horas hábiles. La primera reunión es sin costo.</p>
            <div style="border-top:1px solid rgba(14,15,12,0.2); padding-top:20px; display:flex; flex-direction:column; gap:14px;">
              <div>
                <div style="font-family:'Geist',sans-serif; font-size:10px; font-weight:500; letter-spacing:0.22em; text-transform:uppercase; color:#8A8574; margin-bottom:3px;">Oficina</div>
                <div style="font-family:'Instrument Serif',serif; font-style:italic; font-size:18px;">Av. Paseo Tabasco 1234 · Villahermosa</div>
              </div>
              <div>
                <div style="font-family:'Geist',sans-serif; font-size:10px; font-weight:500; letter-spacing:0.22em; text-transform:uppercase; color:#8A8574; margin-bottom:3px;">Directo</div>
                <div style="font-family:'Instrument Serif',serif; font-style:italic; font-size:18px;">+52 993 123 4567 · contacto@cabal.mx</div>
              </div>
            </div>
          </div>
          <form style="display:flex; flex-direction:column; gap:18px;">
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:14px;">
              <div><label style="${lbl}">Nombre</label><input style="${inp}" placeholder="Ana Velázquez"></div>
              <div><label style="${lbl}">Empresa</label><input style="${inp}" placeholder="Opcional"></div>
            </div>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:14px;">
              <div><label style="${lbl}">Correo *</label><input style="${inp}" placeholder="ana@empresa.mx"></div>
              <div><label style="${lbl}">Teléfono</label><input style="${inp}" placeholder="+52 …"></div>
            </div>
            <div><label style="${lbl}">Asunto *</label><select style="${inp} appearance:none;"><option>Derecho corporativo</option><option>Laboral</option></select></div>
            <div><label style="${lbl}">Descripción *</label><textarea rows="4" style="${inp}" placeholder="Cuéntanos brevemente tu caso."></textarea></div>
            <label style="display:flex; gap:10px; align-items:flex-start; font-size:12.5px; color:#3a3a33; line-height:1.5;">
              <input type="checkbox" style="margin-top:3px;"> Acepto el <span style="border-bottom:1px solid #0E0F0C;">aviso de privacidad</span> y la comunicación por los medios proporcionados.
            </label>
            <button style="align-self:flex-start; font-family:'Geist',sans-serif; font-weight:500; font-size:14px; padding:14px 28px; background:#8E1F1C; color:#fff; border:none; border-radius:4px;">Enviar mensaje →</button>
          </form>
        </div>
      </div>`;

    const code = `// components/patterns/ContactForm.tsx
'use client';
import { useState } from 'react';
import { Input, Textarea, Select } from '@/components/primitives/Input';
import { Button } from '@/components/primitives/Button';

export function ContactForm() {
  const [sending, setSending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const data = Object.fromEntries(new FormData(e.currentTarget));
    await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
    setSending(false);
  }

  return (
    <section className="bg-paper-2 px-6 md:px-12 py-16 md:py-24">
      <div className="mx-auto max-w-[1240px] grid grid-cols-1 md:grid-cols-2 gap-18 md:gap-[72px]">

        {/* Left: copy */}
        <div>
          <div className="text-xs font-medium tracking-[0.22em] uppercase text-claret mb-2.5">
            nº 06 — Contacto
          </div>
          <h2 className="font-serif text-4xl md:text-5xl leading-[0.95] tracking-[-0.02em] m-0">
            Hablemos<br /><em className="italic text-claret">del caso.</em>
          </h2>
          <p className="mt-5 mb-8 text-base leading-relaxed text-ink/75 max-w-[420px]">
            Respondemos en menos de 2 horas hábiles. La primera reunión es sin costo.
          </p>

          <dl className="border-t border-ink/20 pt-5 flex flex-col gap-3.5">
            <ContactMeta label="Oficina" value="Av. Paseo Tabasco 1234 · Villahermosa" />
            <ContactMeta label="Directo" value="+52 993 123 4567 · contacto@cabal.mx" />
          </dl>
        </div>

        {/* Right: form */}
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3.5">
            <Input label="Nombre" name="name" required />
            <Input label="Empresa" name="company" placeholder="Opcional" />
          </div>
          <div className="grid grid-cols-2 gap-3.5">
            <Input label="Correo" name="email" type="email" required />
            <Input label="Teléfono" name="phone" type="tel" />
          </div>
          <Select label="Asunto" name="topic" required>
            <option>Derecho corporativo</option>
            <option>Laboral y patronal</option>
            <option>Inmobiliario</option>
            <option>Otro</option>
          </Select>
          <Textarea
            label="Descripción"
            name="message"
            required
            placeholder="Cuéntanos brevemente tu caso."
          />
          <label className="flex gap-2.5 items-start text-[12.5px] text-ink/75 leading-normal">
            <input type="checkbox" name="privacy" required className="mt-0.5" />
            <span>
              Acepto el <a href="/privacidad" className="border-b border-ink">aviso de privacidad</a> y la comunicación por los medios proporcionados.
            </span>
          </label>
          <Button type="submit" disabled={sending} className="self-start">
            {sending ? 'Enviando…' : 'Enviar mensaje →'}
          </Button>
        </form>
      </div>
    </section>
  );
}

function ContactMeta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] font-medium tracking-[0.22em] uppercase text-stone-2 mb-1">{label}</dt>
      <dd className="font-serif italic text-lg m-0">{value}</dd>
    </div>
  );
}`;

    return section(
      'contact', 'nº 17',
      'ContactForm', '',
      'Dos columnas: copy editorial a la izquierda (meta de contacto en serif itálico), formulario a la derecha (primitivos Input/Textarea/Select). Fondo <code class="inline">paper-2</code> para diferenciarlo del resto de la página.',
      pair(preview, code, { wide: true, stack: true, file: 'ContactForm.tsx', label: 'ContactForm' })
    );
  };

  // ═════════════════════ FOOTER ═════════════════════
  window.__dsSections.footerPat = () => {
    const preview = `
      <div style="width:100%; background:#0E0F0C; color:#F5F1E8; padding:64px 48px 40px; font-family:'Geist',sans-serif;">
        <div style="max-width:1240px; margin:0 auto;">
          <div style="display:grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap:48px; padding-bottom:48px; border-bottom:1px solid rgba(243,239,230,0.18);">
            <div>
              <div style="display:flex; align-items:center; gap:16px; margin-bottom:20px;">
                <div class="monogram" style="--m-h:36px; --m-w:4.5px; --m-gap:3px;"><i></i><i></i><i></i><i></i></div>
                <div style="font-family:'Instrument Serif',serif; font-size:26px; letter-spacing:0.04em;">Cabal <span style="font-style:italic;">y</span> Asociados</div>
              </div>
              <p style="font-family:'Instrument Serif',serif; font-style:italic; font-size:22px; line-height:1.35; max-width:380px; margin:0; color:rgba(245,241,232,0.85);">Defiende con oficio.</p>
              <p style="margin:18px 0 0; font-size:13px; line-height:1.6; color:rgba(245,241,232,0.55); max-width:380px;">Villahermosa, Tabasco. Inscritos en el Colegio de Abogados. Desde 1995.</p>
            </div>
            ${[
              ['Áreas', ['Corporativo', 'Laboral', 'Inmobiliario', 'Familiar', 'Fiscal']],
              ['Firma', ['Sobre nosotros', 'Socios', 'Casos', 'Publicaciones']],
              ['Contacto', ['WhatsApp', 'Teléfono', 'Correo', 'Oficina']],
            ].map(([title, items]) => `
              <div>
                <div style="font-family:'Geist',sans-serif; font-size:10px; font-weight:500; letter-spacing:0.24em; text-transform:uppercase; color:rgba(245,241,232,0.5); margin-bottom:14px;">${title}</div>
                <ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:8px;">
                  ${items.map(it => `<li style="font-family:'Geist',sans-serif; font-size:13.5px; color:#F5F1E8;">${it}</li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
          <div style="padding-top:24px; display:flex; justify-content:space-between; align-items:center; font-size:11px; letter-spacing:0.16em; text-transform:uppercase; color:rgba(245,241,232,0.4);">
            <div>© 1995—2026 Cabal y Asociados · Todos los derechos reservados</div>
            <div>Aviso de privacidad · Términos</div>
          </div>
        </div>
      </div>`;

    const code = `// components/patterns/Footer.tsx
import { Monogram } from '@/components/brand/Monogram';

const COLUMNS = [
  { title: 'Áreas',    items: ['Corporativo', 'Laboral', 'Inmobiliario', 'Familiar', 'Fiscal'] },
  { title: 'Firma',    items: ['Sobre nosotros', 'Socios', 'Casos', 'Publicaciones'] },
  { title: 'Contacto', items: ['WhatsApp', 'Teléfono', 'Correo', 'Oficina'] },
];

export function Footer() {
  return (
    <footer className="bg-ink text-paper-2 px-6 md:px-12 pt-16 pb-10">
      <div className="mx-auto max-w-[1240px]">

        {/* Top: brand + columns */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 pb-12 border-b border-paper-2/20">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <Monogram size="md" />
              <span className="font-serif text-[26px] tracking-[0.04em]">
                Cabal <em className="italic">y</em> Asociados
              </span>
            </div>
            <p className="font-serif italic text-xl leading-snug max-w-[380px] m-0 text-paper-2/85">
              Defiende con oficio.
            </p>
            <p className="mt-4.5 text-sm leading-relaxed text-paper-2/55 max-w-[380px]">
              Villahermosa, Tabasco. Inscritos en el Colegio de Abogados. Desde 1995.
            </p>
          </div>

          {COLUMNS.map(col => (
            <div key={col.title}>
              <div className="text-[10px] font-medium tracking-[0.24em] uppercase text-paper-2/50 mb-3.5">
                {col.title}
              </div>
              <ul className="list-none p-0 m-0 flex flex-col gap-2">
                {col.items.map(it => (
                  <li key={it}>
                    <a href="#" className="text-[13.5px] text-paper-2 hover:text-claret transition-colors">
                      {it}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom: meta */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 text-xs tracking-[0.16em] uppercase text-paper-2/40">
          <div>© 1995—2026 Cabal y Asociados · Todos los derechos reservados</div>
          <div className="flex gap-6">
            <a href="/privacidad">Aviso de privacidad</a>
            <a href="/terminos">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}`;

    return section(
      'footer-pat', 'nº 18',
      'Footer', '',
      'Fondo tinta, 4 columnas (marca + 3 de links). Cita editorial de la firma bajo el lockup, separador fino, línea de copyright en caps tracking alto.',
      pair(preview, code, { wide: true, stack: true, file: 'Footer.tsx', label: 'Footer' })
    );
  };

  // ═════════════════════ WHATSAPP FAB ═════════════════════
  window.__dsSections.wa = () => {
    const preview = `
      <div style="width:100%; min-height:200px; background:#F5F1E8; position:relative; padding:32px;">
        <div style="font-family:'Geist',sans-serif; font-size:12px; color:#8A8574; letter-spacing:0.1em; text-transform:uppercase;">— fondo de página —</div>
        <div style="position:absolute; bottom:28px; right:28px; display:flex; flex-direction:column; align-items:flex-end; gap:10px;">
          <div style="background:#0E0F0C; color:#fff; padding:10px 14px; border-radius:6px 6px 2px 6px; font-family:'Geist',sans-serif; font-size:12.5px; max-width:220px; line-height:1.4; box-shadow: 0 12px 28px rgba(0,0,0,0.15);">
            <div style="font-family:'Instrument Serif',serif; font-style:italic; font-size:15px; color:#C9C1B0; margin-bottom:2px;">Habla con un abogado.</div>
            Respondemos en &lt; 2 h hábiles.
          </div>
          <button style="width:58px; height:58px; border-radius:50%; background:#8E1F1C; border:none; color:#fff; cursor:pointer; display:flex; align-items:center; justify-content:center; box-shadow: 0 12px 28px rgba(142,31,28,0.35), 0 4px 10px rgba(0,0,0,0.15);">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 016.988 2.896 9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </button>
        </div>
      </div>`;

    const code = `// components/patterns/WhatsAppButton.tsx
'use client';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/cn';

const WA_NUMBER = '529931234567';
const WA_MSG = encodeURIComponent(
  'Hola, quisiera agendar una consulta en Cabal y Asociados.'
);

export function WhatsAppButton() {
  const [bubble, setBubble] = useState(false);

  // Show the prompt once after 6s, unless already dismissed
  useEffect(() => {
    if (sessionStorage.getItem('wa-bubble-seen')) return;
    const t = setTimeout(() => setBubble(true), 6000);
    return () => clearTimeout(t);
  }, []);

  function dismiss() {
    setBubble(false);
    sessionStorage.setItem('wa-bubble-seen', '1');
  }

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-2.5 z-50">
      {bubble && (
        <div className="bg-ink text-paper px-3.5 py-2.5 rounded-md rounded-br-sm max-w-[220px] shadow-lg text-[12.5px] leading-snug">
          <div className="font-serif italic text-[15px] text-stone mb-0.5">
            Habla con un abogado.
          </div>
          Respondemos en &lt; 2 h hábiles.
          <button
            onClick={dismiss}
            className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-paper text-ink text-[11px] leading-none"
            aria-label="Cerrar"
          >×</button>
        </div>
      )}

      <a
        href={\`https://wa.me/\${WA_NUMBER}?text=\${WA_MSG}\`}
        target="_blank" rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp a Cabal y Asociados"
        className={cn(
          'w-14 h-14 rounded-full bg-claret text-paper',
          'flex items-center justify-center',
          'shadow-fab hover:bg-claret-deep transition-colors',
          'focus:outline-none focus-visible:ring-4 focus-visible:ring-claret/30',
        )}
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 016.988 2.896 9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}`;

    return section(
      'wa', 'nº 19',
      'WhatsAppButton', '',
      'Botón flotante abajo-derecha. Usa el único <code class="inline">shadow-fab</code> reservado del sistema — es lícito aquí porque necesita separarse del fondo de página en cualquier sección. Burbuja de prompt aparece una vez por sesión, a los 6 segundos.',
      pair(preview, code, { wide: true, stack: true, file: 'WhatsAppButton.tsx', label: 'WhatsAppButton' })
    );
  };
})();
