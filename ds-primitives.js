/* DS sections: primitives */
(function () {
  const { pair, section, codeBlock } = window.__ds;
  window.__dsSections = window.__dsSections || {};

  // ═════════════════════ BUTTON ═════════════════════
  window.__dsSections.button = () => {
    // Shared inline styles for previews (mirror the Tailwind classes visually)
    const btnBase = 'font-family:"Geist",sans-serif; font-weight:500; font-size:14px; letter-spacing:0.02em; padding:12px 22px; border-radius:4px; cursor:pointer; border:1px solid transparent; display:inline-flex; align-items:center; gap:8px; line-height:1;';
    const btnPrimary = btnBase + ' background:#8E1F1C; color:#fff;';
    const btnSecondary = btnBase + ' background:transparent; color:#0E0F0C; border-color:#0E0F0C;';
    const btnGhost = btnBase + ' background:transparent; color:#0E0F0C; padding-left:4px; padding-right:4px; border-bottom:1px solid #0E0F0C; border-radius:0;';
    const btnDisabled = btnBase + ' background:#8E1F1C; color:#fff; opacity:0.4; cursor:not-allowed;';
    const btnSm = 'font-size:12px; padding:8px 14px;';
    const btnLg = 'font-size:15px; padding:16px 28px;';

    const primaryPreview = `
      <div style="display:flex; gap:16px; align-items:center; flex-wrap:wrap;">
        <button style="${btnPrimary} ${btnSm}">Contactar</button>
        <button style="${btnPrimary}">Agendar consulta</button>
        <button style="${btnPrimary} ${btnLg}">Hablar con un abogado</button>
      </div>`;

    const variantsPreview = `
      <div style="display:flex; gap:16px; align-items:center; flex-wrap:wrap;">
        <button style="${btnPrimary}">Agendar consulta</button>
        <button style="${btnSecondary}">Conocer más</button>
        <button style="${btnGhost}">Ver todos los servicios →</button>
        <button style="${btnDisabled}">Disabled</button>
      </div>`;

    const buttonJsx = `// components/primitives/Button.tsx
import { cn } from '@/lib/cn';
import { ButtonHTMLAttributes, forwardRef } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const VARIANTS: Record<Variant, string> = {
  primary:   'bg-claret text-paper border-claret hover:bg-claret-deep',
  secondary: 'bg-transparent text-ink border-ink hover:bg-ink hover:text-paper',
  ghost:     'bg-transparent text-ink border-0 border-b border-ink rounded-none px-1 hover:text-claret hover:border-claret',
};

const SIZES: Record<Size, string> = {
  sm: 'text-xs px-3.5 py-2',
  md: 'text-sm px-5.5 py-3',
  lg: 'text-[15px] px-7 py-4',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center gap-2 font-sans font-medium tracking-wide',
        'rounded-md border transition-colors duration-150',
        'disabled:opacity-40 disabled:cursor-not-allowed',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-claret focus-visible:ring-offset-2',
        VARIANTS[variant],
        SIZES[size],
        className,
      )}
      {...props}
    />
  )
);
Button.displayName = 'Button';`;

    const usageJsx = `// Uso
<Button>Agendar consulta</Button>
<Button variant="secondary">Conocer más</Button>
<Button variant="ghost">Ver todos los servicios →</Button>
<Button size="lg">Hablar con un abogado</Button>
<Button disabled>Disabled</Button>`;

    return section(
      'button', 'nº 08',
      'Button', '',
      'Tres variantes: <b>primary</b> (claret, para CTA principal, máximo 1 por pantalla), <b>secondary</b> (outline tinta, para acciones alternas), <b>ghost</b> (links estilo editorial con subrayado). Tres tamaños. Sin sombra — la jerarquía viene del fill.',
      `
        <h3 class="sub-h">Primary · tamaños</h3>
        ${pair(primaryPreview, `<Button size="sm">Contactar</Button>
<Button>Agendar consulta</Button>
<Button size="lg">Hablar con un abogado</Button>`, { file: 'uso' })}

        <h3 class="sub-h">Variantes</h3>
        ${pair(variantsPreview, usageJsx, { file: 'uso' })}

        <h3 class="sub-h">Componente</h3>
        ${pair(
          `<button style="${btnPrimary}">Agendar consulta</button>`,
          buttonJsx,
          { file: 'Button.tsx' }
        )}

        <div class="callout">
          <b>Un solo primary por pantalla.</b>
          <p>El claret es recurso escaso. En el hero, en el footer, en la ficha de servicio. Otras acciones van en secondary o ghost.</p>
        </div>
      `
    );
  };

  // ═════════════════════ INPUT + TEXTAREA + SELECT ═════════════════════
  window.__dsSections.input = () => {
    const inputStyle = 'font-family:"Geist",sans-serif; font-size:14px; padding:12px 14px; border:1px solid rgba(14,15,12,0.2); border-radius:2px; background:#fff; color:#0E0F0C; width:100%; outline:none;';
    const labelStyle = 'display:block; font-family:"Geist",sans-serif; font-size:10.5px; font-weight:500; letter-spacing:0.22em; text-transform:uppercase; color:#0E0F0C; margin-bottom:6px;';
    const hintStyle = 'font-family:"Geist",sans-serif; font-size:12px; color:#8A8574; margin-top:6px;';
    const errStyle  = 'font-family:"Geist",sans-serif; font-size:12px; color:#8E1F1C; margin-top:6px;';

    const inputPreview = `
      <div style="display:flex; flex-direction:column; gap:18px; width:100%; max-width:380px;">
        <div>
          <label style="${labelStyle}">Nombre completo</label>
          <input type="text" placeholder="Ana Velázquez" style="${inputStyle}">
        </div>
        <div>
          <label style="${labelStyle}">Correo</label>
          <input type="email" placeholder="ana@empresa.mx" style="${inputStyle} border-color:#8E1F1C;">
          <div style="${errStyle}">El correo es obligatorio.</div>
        </div>
        <div>
          <label style="${labelStyle}">Asunto</label>
          <select style="${inputStyle} appearance:none; background-image:url('data:image/svg+xml;utf8,<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;12&quot; height=&quot;8&quot; viewBox=&quot;0 0 12 8&quot;><path d=&quot;M1 1l5 5 5-5&quot; stroke=&quot;%230E0F0C&quot; stroke-width=&quot;1.5&quot; fill=&quot;none&quot; stroke-linecap=&quot;round&quot;/></svg>'); background-repeat:no-repeat; background-position:right 14px center; padding-right:36px;">
            <option>Derecho corporativo</option>
            <option>Laboral</option>
            <option>Inmobiliario</option>
          </select>
        </div>
        <div>
          <label style="${labelStyle}">Mensaje</label>
          <textarea rows="4" placeholder="Cuéntanos brevemente tu caso." style="${inputStyle} resize:vertical; font-family:inherit;"></textarea>
          <div style="${hintStyle}">Máx. 500 caracteres. Respondemos en &lt; 2 h hábiles.</div>
        </div>
      </div>`;

    const inputJsx = `// components/primitives/Input.tsx
import { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/cn';

const fieldBase = cn(
  'w-full bg-paper text-ink font-sans text-sm',
  'px-3.5 py-3 border border-ink/20 rounded-sm',
  'transition-colors duration-150 outline-none',
  'placeholder:text-stone-2',
  'focus:border-claret focus:ring-2 focus:ring-claret/20',
  'disabled:bg-paper-2 disabled:text-stone-2',
);

interface FieldProps {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
}

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & FieldProps
>(({ label, hint, error, required, className, id, ...props }, ref) => {
  const inputId = id ?? props.name;
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-[10.5px] font-medium tracking-[0.22em] uppercase text-ink mb-1.5"
        >
          {label}{required && <span className="text-claret ml-0.5">*</span>}
        </label>
      )}
      <input
        ref={ref}
        id={inputId}
        aria-invalid={!!error}
        className={cn(fieldBase, error && 'border-claret', className)}
        {...props}
      />
      {error
        ? <p className="mt-1.5 text-xs text-claret">{error}</p>
        : hint && <p className="mt-1.5 text-xs text-stone-2">{hint}</p>}
    </div>
  );
});
Input.displayName = 'Input';

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement> & FieldProps
>(({ label, hint, error, required, className, id, ...props }, ref) => {
  const textareaId = id ?? props.name;
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={textareaId}
          className="block text-[10.5px] font-medium tracking-[0.22em] uppercase text-ink mb-1.5"
        >
          {label}{required && <span className="text-claret ml-0.5">*</span>}
        </label>
      )}
      <textarea
        ref={ref}
        id={textareaId}
        aria-invalid={!!error}
        className={cn(fieldBase, 'resize-y min-h-[96px]', error && 'border-claret', className)}
        {...props}
      />
      {error
        ? <p className="mt-1.5 text-xs text-claret">{error}</p>
        : hint && <p className="mt-1.5 text-xs text-stone-2">{hint}</p>}
    </div>
  );
});
Textarea.displayName = 'Textarea';

export const Select = forwardRef<
  HTMLSelectElement,
  SelectHTMLAttributes<HTMLSelectElement> & FieldProps
>(({ label, hint, error, required, className, id, children, ...props }, ref) => {
  const selectId = id ?? props.name;
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={selectId}
          className="block text-[10.5px] font-medium tracking-[0.22em] uppercase text-ink mb-1.5"
        >
          {label}{required && <span className="text-claret ml-0.5">*</span>}
        </label>
      )}
      <div className="relative">
        <select
          ref={ref}
          id={selectId}
          className={cn(fieldBase, 'appearance-none pr-10', error && 'border-claret', className)}
          {...props}
        >
          {children}
        </select>
        <svg
          className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2"
          width="12" height="8" viewBox="0 0 12 8" aria-hidden
        >
          <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>
      </div>
      {error
        ? <p className="mt-1.5 text-xs text-claret">{error}</p>
        : hint && <p className="mt-1.5 text-xs text-stone-2">{hint}</p>}
    </div>
  );
});
Select.displayName = 'Select';`;

    return section(
      'input', 'nº 09',
      'Input ·', 'Textarea · Select',
      'Campos sobrios, de firma notarial, no de SaaS. Border fino (1px ink/20), focus en claret. Labels en Geist mayúsculas 10.5px con tracking — se sienten como formularios oficiales, no como un chatbot.',
      `
        ${pair(inputPreview, `<Input label="Nombre completo" name="name" placeholder="Ana Velázquez" required />

<Input
  label="Correo"
  name="email"
  type="email"
  placeholder="ana@empresa.mx"
  error="El correo es obligatorio."
  required
/>

<Select label="Asunto" name="topic">
  <option>Derecho corporativo</option>
  <option>Laboral</option>
  <option>Inmobiliario</option>
</Select>

<Textarea
  label="Mensaje"
  name="message"
  placeholder="Cuéntanos brevemente tu caso."
  hint="Máx. 500 caracteres. Respondemos en < 2 h hábiles."
/>`, { file: 'uso' })}

        <h3 class="sub-h">Componente</h3>
        ${codeBlock(inputJsx, 'tsx', 'Input.tsx')}
      `
    );
  };

  // ═════════════════════ CARD ═════════════════════
  window.__dsSections.card = () => {
    const cardBase = 'font-family:"Geist",sans-serif; background:#fff; border:1px solid rgba(14,15,12,0.14); padding:32px; color:#0E0F0C;';

    const plainCard = `
      <div style="${cardBase} width:100%; max-width:420px;">
        <div style="font-family:'Instrument Serif',serif; font-size:14px; font-style:italic; color:#8E1F1C; letter-spacing:0;">nº 03</div>
        <div style="font-family:'Instrument Serif',serif; font-size:26px; line-height:1.15; margin-top:6px; letter-spacing:-0.01em;">Derecho inmobiliario</div>
        <p style="margin:14px 0 0; font-size:14px; line-height:1.6; color:#3a3a33;">Compraventa, escrituración, due diligence de predios y régimen de propiedad en condominio.</p>
        <div style="margin-top:24px; display:flex; gap:8px; padding-top:18px; border-top:1px solid rgba(14,15,12,0.12);">
          <span style="font-family:'Geist',sans-serif; font-size:11px; font-weight:500; letter-spacing:0.2em; text-transform:uppercase; color:#0E0F0C; border-bottom:1px solid #0E0F0C; padding-bottom:2px;">Saber más →</span>
        </div>
      </div>`;

    const inkCard = `
      <div style="${cardBase} background:#0E0F0C; color:#fff; border:none; width:100%; max-width:420px;">
        <div style="font-family:'Instrument Serif',serif; font-size:14px; font-style:italic; color:#C9C1B0; letter-spacing:0;">nº 01</div>
        <div style="font-family:'Instrument Serif',serif; font-size:26px; line-height:1.15; margin-top:6px; letter-spacing:-0.01em;">Derecho corporativo</div>
        <p style="margin:14px 0 0; font-size:14px; line-height:1.6; color:rgba(243,239,230,0.7);">Constitución de sociedades, gobierno corporativo, fusiones, operaciones de capital.</p>
        <div style="margin-top:24px; display:flex; gap:8px; padding-top:18px; border-top:1px solid rgba(243,239,230,0.18);">
          <span style="font-family:'Geist',sans-serif; font-size:11px; font-weight:500; letter-spacing:0.2em; text-transform:uppercase; color:#fff; border-bottom:1px solid #fff; padding-bottom:2px;">Saber más →</span>
        </div>
      </div>`;

    const cardJsx = `// components/primitives/Card.tsx
import { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

type Tone = 'paper' | 'ink';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  tone?: Tone;
}

const TONES: Record<Tone, string> = {
  paper: 'bg-paper text-ink border border-rule',
  ink:   'bg-ink   text-paper border-0',
};

export function Card({ tone = 'paper', className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'p-8 font-sans',
        TONES[tone],
        className,
      )}
      {...props}
    />
  );
}

// Sub-components for consistent rhythm inside cards
export function CardEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-serif italic text-claret text-sm">
      {children}
    </div>
  );
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-serif text-[26px] leading-tight tracking-tight mt-1.5">
      {children}
    </h3>
  );
}

export function CardBody({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-3.5 text-sm leading-relaxed text-ink/75">
      {children}
    </p>
  );
}

export function CardLink({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="inline-block mt-6 pt-4.5 border-t border-rule
                 text-xs font-medium tracking-[0.2em] uppercase
                 border-b border-current pb-0.5"
    >
      {children}
    </a>
  );
}`;

    const usageJsx = `<Card>
  <CardEyebrow>nº 03</CardEyebrow>
  <CardTitle>Derecho inmobiliario</CardTitle>
  <CardBody>
    Compraventa, escrituración, due diligence de predios
    y régimen de propiedad en condominio.
  </CardBody>
  <CardLink href="/servicios/inmobiliario">Saber más →</CardLink>
</Card>

<Card tone="ink">
  <CardEyebrow>nº 01</CardEyebrow>
  <CardTitle>Derecho corporativo</CardTitle>
  <CardBody>
    Constitución de sociedades, gobierno corporativo,
    fusiones, operaciones de capital.
  </CardBody>
  <CardLink href="/servicios/corporativo">Saber más →</CardLink>
</Card>`;

    return section(
      'card', 'nº 10',
      'Card', '',
      'Contenedor editorial. Dos tonos: <code class="inline">paper</code> (blanco con border) y <code class="inline">ink</code> (negro tinta). Sin sombra. Interior de 32px y un separador fino antes del link de salida — respira como una ficha impresa.',
      `
        <h3 class="sub-h">Variantes</h3>
        ${pair(`<div style="display:flex; gap:24px; flex-wrap:wrap;">${plainCard}${inkCard}</div>`, usageJsx, { file: 'uso' })}

        <h3 class="sub-h">Componente</h3>
        ${codeBlock(cardJsx, 'tsx', 'Card.tsx')}
      `
    );
  };

  // ═════════════════════ BADGE ═════════════════════
  window.__dsSections.badge = () => {
    const base = 'font-family:"Geist",sans-serif; font-weight:500; font-size:10.5px; letter-spacing:0.22em; text-transform:uppercase; padding:5px 10px; border-radius:2px; display:inline-flex; align-items:center; gap:6px; line-height:1;';

    const stylePreview = `
      <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center;">
        <span style="${base} background:transparent; color:#0E0F0C; border:1px solid rgba(14,15,12,0.25);">Corporativo</span>
        <span style="${base} background:#F5F1E8; color:#0E0F0C;">Nuevo caso</span>
        <span style="${base} background:#8E1F1C; color:#fff;">Urgente</span>
        <span style="${base} background:#0E0F0C; color:#fff;">Confidencial</span>
        <span style="${base} background:transparent; color:#8E1F1C; border:1px solid #8E1F1C;">
          <span style="width:6px; height:6px; border-radius:50%; background:#8E1F1C;"></span>
          En línea
        </span>
      </div>`;

    const badgeJsx = `// components/primitives/Badge.tsx
import { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

type Tone = 'outline' | 'soft' | 'claret' | 'ink' | 'claret-outline';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
  dot?: boolean;
}

const TONES: Record<Tone, string> = {
  outline:         'bg-transparent text-ink border border-ink/25',
  soft:            'bg-paper-2 text-ink',
  claret:          'bg-claret text-paper',
  ink:             'bg-ink text-paper',
  'claret-outline':'bg-transparent text-claret border border-claret',
};

export function Badge({ tone = 'outline', dot, className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm leading-none',
        'font-sans font-medium text-[10.5px] tracking-[0.22em] uppercase',
        TONES[tone],
        className,
      )}
      {...props}
    >
      {dot && (
        <span className={cn(
          'h-1.5 w-1.5 rounded-full',
          tone === 'claret-outline' ? 'bg-claret' : 'bg-current',
        )}/>
      )}
      {children}
    </span>
  );
}`;

    const usageJsx = `<Badge>Corporativo</Badge>
<Badge tone="soft">Nuevo caso</Badge>
<Badge tone="claret">Urgente</Badge>
<Badge tone="ink">Confidencial</Badge>
<Badge tone="claret-outline" dot>En línea</Badge>`;

    return section(
      'badge', 'nº 11',
      'Badge', '',
      'Etiquetas discretas para categorías, estados y metadatos. Cinco tonos, todos con Geist 10.5px tracking 0.22em — el ritmo del chrome del brandbook.',
      `
        ${pair(stylePreview, usageJsx, { file: 'uso' })}

        ${codeBlock(badgeJsx, 'tsx', 'Badge.tsx')}
      `
    );
  };
})();
