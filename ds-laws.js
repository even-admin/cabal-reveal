/* DS sections: las 10 leyes del sistema — el prefacio conceptual.
   Estas leyes gobiernan cada decisión de token, primitivo y patrón. */
(function () {
  const { section } = window.__ds;
  window.__dsSections = window.__dsSections || {};

  // Tarjeta de ley — estructura repetible.
  function law(n, title, body, example = '') {
    return `
      <article class="law">
        <div class="law-n">${n}</div>
        <div class="law-body">
          <h3 class="law-title">${title}</h3>
          <div class="law-text">${body}</div>
          ${example ? `<div class="law-ex">${example}</div>` : ''}
        </div>
      </article>
    `;
  }

  window.__dsSections.laws = () => section(
    'laws', 'nº 00',
    'Diez leyes', 'del sistema',
    'Antes que los tokens, las primitivas o los patrones: las decisiones que gobiernan cada pieza del sistema. Son reglas de oficio, no adornos. Si dudas sobre una implementación, regresa aquí.',
    `
      <style>
        .laws-grid {
          display: grid;
          gap: 0;
          border-top: 1px solid var(--border-default);
          margin-top: 8px;
        }
        .law {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 28px;
          padding: 32px 0;
          border-bottom: 1px solid var(--border-default);
          align-items: start;
        }
        .law-n {
          font-family: 'Instrument Serif', serif;
          font-style: italic;
          font-size: 48px;
          line-height: 1;
          color: var(--claret);
          font-weight: 400;
        }
        .law-title {
          font-family: 'Instrument Serif', serif;
          font-weight: 400;
          font-size: 26px;
          line-height: 1.25;
          margin: 4px 0 10px;
          letter-spacing: -0.01em;
          color: var(--text-primary);
        }
        .law-text {
          font-size: 15px;
          line-height: 1.7;
          color: var(--text-secondary);
          max-width: 62ch;
        }
        .law-text strong {
          color: var(--text-primary);
          font-weight: 500;
        }
        .law-text code {
          font-family: 'Geist Mono', monospace;
          font-size: 12.5px;
          background: var(--paper-2);
          padding: 2px 6px;
          border-radius: var(--r-xs);
          color: var(--claret);
        }
        .law-ex {
          margin-top: 16px;
          padding: 14px 18px;
          background: var(--paper-2);
          border-left: 2px solid var(--claret);
          border-radius: 0 var(--r-sm) var(--r-sm) 0;
          font-size: 13.5px;
          line-height: 1.65;
          color: var(--text-secondary);
        }
        .law-ex b {
          display: block;
          font-family: 'Instrument Serif', serif;
          font-style: italic;
          font-size: 14.5px;
          color: var(--text-primary);
          margin-bottom: 4px;
          font-weight: 400;
        }
      </style>

      <div class="laws-grid">
        ${law(
          '01',
          'Radios de esquina suaves, nunca afilados',
          'Usa la <strong>escala de radios</strong> del sistema (<code>--r-xs</code> a <code>--r-2xl</code>). Un botón <code>--r-md</code> (12px), una tarjeta <code>--r-xl</code> (20px), un input <code>--r-sm</code> (10px). Los radios escalan con el tamaño del elemento — nunca uses el mismo radio para un chip y para un modal.',
          '<b>En la práctica</b>Evita <code>border-radius: 4px</code> y <code>6px</code>. El sistema no tiene radios menores a 6px porque se ven baratos a tamaños tipográficos grandes.'
        )}

        ${law(
          '02',
          'Respiro óptico antes que medidas matemáticas',
          'Un padding de <code>24px 24px</code> <em>no</em> se ve cuadrado — el ojo percibe más peso arriba y abajo por la altura de línea. <strong>Compensa ópticamente</strong>: padding horizontal ligeramente mayor que el vertical, padding-top un poco mayor que padding-bottom cuando hay un título seguido de texto.',
          '<b>Regla de bolsillo</b>Cards: <code>32px 28px 28px</code>. Buttons: <code>14px 28px</code> (no <code>14px 14px</code>). El cuerpo respira; los bordes no aprietan.'
        )}

        ${law(
          '03',
          'Jerarquía por opacidad, no por tono',
          'La tipografía secundaria no es gris — es <strong>tinta a 68%</strong>. La terciaria es tinta a 45%. Esto mantiene la paleta coherente sobre cualquier fondo (claro, oscuro, crema) y evita el zoo de grises que aparece cuando cada diseñador inventa su <code>#666</code> preferido.',
          '<b>Tokens</b><code>--text-primary</code> · <code>--text-secondary</code> (0.68) · <code>--text-muted</code> (0.45) · <code>--text-ghost</code> (0.28)'
        )}

        ${law(
          '04',
          'Espaciado en una escala de 4/8',
          'Todo margen y padding es múltiplo de 4px; los múltiplos de 8 son los preferidos. Esto crea <strong>ritmo vertical</strong> predecible en la página y hace que los componentes encajen entre sí sin ajustes manuales. <code>--s-1</code> (4px) para micro, <code>--s-4</code> (16px) body, <code>--s-8</code> (32px) entre bloques, <code>--s-20</code> (80px) entre secciones.',
          '<b>Prohibido</b>Valores como <code>13px</code>, <code>27px</code>, <code>41px</code>. Si los usas, el ritmo se rompe y la página se siente <em>fuera de cuadro</em>.'
        )}

        ${law(
          '05',
          'Transiciones cortas con curva correcta',
          'Las interacciones micro (color, opacidad, borde) duran <strong>150ms</strong>. Los estados de botón, <strong>200ms</strong>. Los paneles y reveals, <strong>250ms</strong>. Todo con <code>--ease-out</code> (entrar) o <code>--ease-in-out</code> (cambiar). Nunca <code>ease</code> por defecto del navegador — es plano y sin carácter.',
          '<b>Patrón</b><code>transition: all 200ms var(--ease-out)</code> en botones. <code>transform: scale(0.98)</code> en <code>:active</code> — nunca <code>scale(0.95)</code>, se siente brusco.'
        )}

        ${law(
          '06',
          'Profundidad por bordes, no por sombras',
          'Este sistema casi no usa box-shadow. La separación entre superficies viene de <strong>bordes a baja opacidad</strong> (<code>rgba(14, 15, 12, 0.10)</code>) sobre fondo crema. Las sombras, cuando existen, son muy sutiles (<code>--shadow-sm</code>) y solo para elementos flotantes (dropdowns, FAB).',
          '<b>Filosofía</b>Bordes = arquitectura. Sombras = teatro. Somos abogados, no actores.'
        )}

        ${law(
          '07',
          'Serif para emoción, sans para información',
          'Instrument Serif (con su cursiva distintiva) es para <strong>titulares, citas y frases con peso humano</strong>: nombres del despacho, cita del fundador, frases hero. Geist es para <strong>todo lo que se lee en modo de trabajo</strong>: body, labels, datos, formularios, código. Mezclar ambos en la misma frase está permitido — eso es parte del carácter.',
          '<b>La tensión</b>Geist sola se siente fría, como startup. Instrument sola se siente pesada, como anuario. Juntas: bufete con temperatura humana.'
        )}

        ${law(
          '08',
          'Menos cromo, más claridad',
          'Cada elemento decorativo (divisor, icono, badge, gradiente, patrón) debe <strong>justificar su existencia</strong>. Si puedes quitarlo sin perder información, quítalo. El lujo en este sistema no se expresa con capas — se expresa con tipografía respirando en espacio blanco.',
          '<b>Señales de alarma</b>Dividers decorativos entre párrafos · Iconos redundantes junto a labels claros · Gradientes de fondo para "dar energía" · Badges con colores para todo.'
        )}

        ${law(
          '09',
          'Estados de foco visibles, siempre',
          'Todo elemento interactivo tiene estado <code>:focus-visible</code> con <strong>outline de 2px en claret</strong> (<code>#8E1F26</code>) y <code>outline-offset: 2px</code>. Nunca <code>outline: none</code> sin reemplazo. Accesibilidad no es una opción para un sistema que ofrece consulta legal — es la línea base.',
          '<b>Patrón</b><code>outline: 2px solid var(--claret); outline-offset: 2px; border-radius: inherit;</code>'
        )}

        ${law(
          '10',
          'Un sistema, dos documentos, un código',
          'El <a href="Brandbook.html" style="color:var(--claret);text-decoration:underline;text-underline-offset:3px;">manual de marca</a> define el <em>por qué</em>: valores, voz, uso del logo. Este sistema define el <em>cómo</em>: tokens, primitivos, patrones. <code>brand.css</code> es la <strong>fuente única de verdad</strong> — si un valor cambia ahí, cambia en ambos documentos y en producción. Nunca hardcodees un color, radio o duración.',
          '<b>Si un token no existe</b>No inventes un valor — propón añadirlo al sistema. Los tokens crecen; los hardcodes corrompen.'
        )}
      </div>
    `
  );
})();
