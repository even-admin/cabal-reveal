/* CABAL y Asociados — Landing Copy
   All Spanish strings live here so the client can edit without touching components. */

window.COPY = {
  /* ─── Global ─── */
  brand: {
    name: 'CABAL',
    suffix: 'y Asociados',
    tagline: 'Derecho laboral · Villahermosa',
    since: 'Desde 1995',
  },

  /* WhatsApp deep link — every CTA on the page uses this */
  wa: {
    number: '529933128454',
    defaultMsg: 'Hola, necesito asesoría laboral gratuita.',
    url(msg) {
      return `https://wa.me/${this.number}?text=${encodeURIComponent(msg || this.defaultMsg)}`;
    },
  },

  /* Contact */
  contact: {
    address: 'Pedro C. Colorado 462, Col. Centro · Villahermosa, Tabasco · CP 86000',
    phones: ['993 312 8454', '993 314 6462'],
    email: 'despachocabalyasociados@hotmail.com',
  },

  /* Trust line below every CTA */
  trustLine: 'Gratis · Sin compromiso · Confidencial · Respondemos en menos de 1 hora.',

  /* ─── 1. Navbar ─── */
  nav: {
    cta: 'Consulta gratis',
  },

  /* ─── 2. Hero ─── */
  hero: {
    kicker: 'Despacho jurídico · Villahermosa, Tabasco',
    headline1: '¿Te trataron mal',
    headline2: 'en el trabajo?',
    headline3: 'Nosotros peleamos',
    headline4: 'por ti.',
    sub: 'Fuimos abogados de las empresas por 30 años. Conocemos cada truco que usan para no pagarte. Ahora ese conocimiento trabaja para defenderte.',
    ctaPrimary: 'Quiero mi consulta gratis',
    ctaSecondary: '¿Cuáles son mis derechos?',
    waMsg: 'Hola, vi su sitio y quisiera una consulta gratis.',
  },

  /* ─── 3. Trust bar ─── */
  trustStats: [
    { value: '30+',      label: 'Años de experiencia' },
    { value: '500+',     label: 'Casos resueltos' },
    { value: 'Nacional', label: 'Cobertura en México' },
    { value: '1995',     label: 'Año de fundación' },
  ],

  /* ─── 4. Hook (Agitate) ─── */
  hook: {
    kicker: 'nº 01 — El giro',
    title1: 'Del otro lado',
    title2: 'del escritorio.',
    paragraphs: [
      'Durante 30 años, asesoramos a algunas de las empresas más grandes de Tabasco y México: Home Depot, Grupo Proteak, Naviera Integral. Los ayudamos a ganar casos laborales.',
      'Vimos de cerca todas sus estrategias: cómo documentan despidos, cómo presionan renuncias, cómo evitan pagar lo que les corresponde a sus trabajadores.',
      'Hoy usamos ese conocimiento del otro lado. Si tu patrón te debe algo, sabemos exactamente cómo probarlo y cómo cobrarlo.',
    ],
    cta: 'Cuéntanos tu caso — es gratis →',
    waMsg: 'Hola, quiero contarles mi caso laboral.',
  },

  /* ─── 5. Problems we solve ─── */
  problems: {
    kicker: 'nº 02 — Si estás aquí es porque',
    title1: 'Algo no está',
    title2: 'bien en tu trabajo.',
    sub: 'Identifica tu situación. La solución empieza con un mensaje.',
    items: [
      { num: '01', q: '¿Te despidieron injustamente?',                 d: 'Sin causa, sin aviso, sin liquidación completa.', msg: 'Me despidieron injustamente y necesito asesoría.' },
      { num: '02', q: '¿No te pagan lo que te deben?',                 d: 'Salarios caídos, horas extra, comisiones retenidas.', msg: 'Mi patrón no me paga lo que me debe.' },
      { num: '03', q: '¿Tu patrón no te dio de alta en el IMSS?',      d: 'Trabajas sin seguridad social ni registro oficial.', msg: 'Trabajo sin estar dado de alta en el IMSS.' },
      { num: '04', q: '¿Te deben aguinaldo, vacaciones o utilidades?', d: 'Prestaciones de ley que tu patrón no ha cubierto.', msg: 'Me deben prestaciones de ley.' },
      { num: '05', q: '¿Sufres acoso o maltrato en tu trabajo?',       d: 'Hostigamiento, discriminación, condiciones indignas.', msg: 'Sufro acoso en mi trabajo.' },
      { num: '06', q: '¿Te están forzando a renunciar?',                d: 'Presión, cambios arbitrarios, represalias.', msg: 'Me están presionando para renunciar.' },
    ],
    cardCta: 'Puedo ayudarte →',
  },

  /* ─── 6. Why CABAL ─── */
  why: {
    kicker: 'nº 03 — Por qué CABAL',
    title1: 'Tres razones',
    title2: 'para elegirnos.',
    items: [
      { num: '01', title: 'Conocimiento interno',     body: 'Pasamos 30 años del lado del patrón. Sabemos exactamente cómo operan, cómo se defienden y cómo piensan. Eso te da una ventaja real.' },
      { num: '02', title: 'Atención personalizada',   body: 'No somos una fábrica de casos. Limitamos cuántos clientes tomamos para que tu caso tenga la atención que merece desde el primer día.' },
      { num: '03', title: 'Red nacional',             body: 'Sede en Villahermosa, abogados corresponsales en todo el país. Si tu patrón opera en otro estado, llegamos hasta allá.' },
    ],
  },

  /* ─── 7. Attorney bio ─── */
  bio: {
    kicker: 'nº 04 — Socio fundador',
    firstName: 'Fernando',
    lastName: 'Cabal Gómez',
    title: 'Lic. en Derecho · UJAT',
    quote: 'La ley se trabaja, no se improvisa. Cada caso es un oficio que se entrega cerrado o no se entrega.',
    bullets: [
      '30+ años de experiencia en derecho laboral',
      'Profesor investigador UJAT · 20+ años',
      'Cátedras: Derecho del Trabajo, Derechos Humanos, Mercantil, Ética',
      'Fundador del despacho desde 1995',
    ],
    credentials: [
      { k: 'Cédula',      v: '[pendiente]' },
      { k: 'Formación',   v: 'UJAT · Derecho' },
      { k: 'Docencia',    v: 'UJAT · 20+ años' },
      { k: 'Especialidad',v: 'Laboral · Mercantil' },
    ],
    clientsLabel: 'Clientes representados (1995—2025)',
    clients: ['Home Depot', 'Grupo Proteak', 'Naviera Integral', 'Telas Parisina', 'KFC', 'Pizza Hut', 'Applebee\'s'],
  },

  /* ─── 8. Process (dark) ─── */
  process: {
    kicker: 'nº 05 — Cómo trabajamos',
    title1: 'Tres pasos.',
    title2: 'Sin misterio.',
    steps: [
      { num: '01', title: 'Cuéntanos tu caso',      body: 'Mándanos un mensaje por WhatsApp o llena el formulario. Gratis, confidencial, sin compromiso.' },
      { num: '02', title: 'Evaluamos tu situación', body: 'Revisamos los hechos y la ley. Te decimos con honestidad si tienes caso y qué puedes recuperar.' },
      { num: '03', title: 'Peleamos por ti',        body: 'Tomamos tu representación. Usamos 30 años de conocimiento para recuperar lo que te corresponde.' },
    ],
    cta: 'Empieza ahora — es gratis',
    waMsg: 'Hola, quiero empezar mi consulta gratis.',
  },

  /* ─── 9. Testimonials ─── */
  testimonials: {
    kicker: 'nº 06 — Casos resueltos',
    title1: 'Lo que',
    title2: 'dicen nuestros clientes.',
    note: 'Iniciales usadas por confidencialidad.',
    items: [
      { quote: 'Pensé que no tenía caso porque no tenía contrato firmado. CABAL me demostró que sí tenía derechos y recuperé 3 meses de salario caído.', who: 'M.H.R.', case: 'Despido injustificado' },
      { quote: 'Mi patrón me presionó a renunciar después de 8 años. Gracias a CABAL cobré todo lo que me correspondía sin ir a juicio.',             who: 'J.L.M.', case: 'Renuncia bajo presión' },
      { quote: 'Nunca me dieron de alta en el IMSS en 2 años. CABAL resolvió mi caso y ahora tengo mis derechos de seguridad social completos.',      who: 'A.P.T.', case: 'Alta retroactiva IMSS' },
    ],
  },

  /* ─── 10. FAQ ─── */
  faq: {
    kicker: 'nº 07 — Preguntas frecuentes',
    title1: 'Antes de',
    title2: 'escribirnos.',
    items: [
      { q: '¿Cuánto cuesta la consulta inicial?',     a: 'Nada. Cero. La primera consulta —30 a 45 minutos, por WhatsApp, videollamada o en oficina— es totalmente gratuita y sin compromiso.' },
      { q: '¿Cuánto tiempo tarda un caso laboral?',   a: 'Depende del tipo. Una negociación directa puede cerrarse en semanas; un litigio laboral formal suele tomar entre 6 y 18 meses. Te damos un estimado honesto desde el día uno.' },
      { q: '¿Qué documentos necesito para empezar?',  a: 'Solo cuéntanos lo que pasó. Lo demás —contratos, recibos, mensajes, testigos— lo revisamos juntos. Nunca dejes que la falta de papeles te detenga: muchas veces tenemos caso igual.' },
      { q: '¿Atienden fuera de Villahermosa?',        a: 'Sí. Tenemos red de abogados corresponsales en toda la república. Si tu patrón opera en otro estado, llegamos hasta allá sin costo adicional para coordinarlo.' },
      { q: '¿Qué pasa si no tengo dinero para pagar?', a: 'Platiquemos primero. En muchos casos laborales trabajamos con honorarios contingentes —cobramos solo cuando recuperas— y lo evaluamos caso por caso sin compromiso.' },
    ],
  },

  /* ─── 11. Contact form ─── */
  contactSection: {
    kicker: 'nº 08 — Hablemos',
    title1: 'Tu consulta',
    title2: 'empieza aquí.',
    sub: 'Elige cómo prefieres contactarnos. Todos los canales llegan al mismo equipo.',
    formSub: 'Tres campos. Sin trampas. Respondemos en menos de 1 hora.',
    formDisclaimer: 'Tu información es privada y confidencial. Esta consulta no establece una relación abogado-cliente.',
    submit: 'Enviar mensaje',
    waBtn: 'Prefiero escribir por WhatsApp →',
  },

  /* ─── 12. Footer ─── */
  footer: {
    tagline: 'Defiende con oficio.',
    disclaimer: 'La información contenida en este sitio es de carácter general e informativa. No constituye asesoría legal ni establece una relación abogado-cliente. Para orientación sobre su caso, contacte directamente al despacho.',
    copyright: '© 1995—2026 CABAL y Asociados · Todos los derechos reservados',
    legal: ['Aviso de privacidad', 'Términos de uso'],
  },

  /* ─── Fixed: WhatsApp FAB ─── */
  fab: {
    bubbleTitle: 'Habla con un abogado.',
    bubbleBody: 'Respondemos en menos de 1 hora. Gratis y confidencial.',
    waMsg: 'Hola, necesito asesoría laboral gratuita.',
  },
};
