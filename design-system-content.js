/* Content for DesignSystem.html — sections, previews, code blocks.
   Kept as a single file for easy editing but split into section builders. */

(function () {
  const root = document.getElementById('content-root');
  if (!root) return;

  // ─── Helpers ───────────────────────────────────────────────────
  const h = (html) => { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content; };

  // Escape HTML for inside <pre>
  const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  // Very light JSX/CSS token highlighter — good enough for docs.
  function highlight(raw, lang) {
    let s = esc(raw);
    if (lang === 'jsx' || lang === 'tsx' || lang === 'js') {
      // comments first
      s = s.replace(/(\/\/[^\n]*)/g, '<span class="tk-comment">$1</span>');
      s = s.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="tk-comment">$1</span>');
      // strings
      s = s.replace(/("[^"\n]*"|'[^'\n]*'|`[^`]*`)/g, '<span class="tk-str">$1</span>');
      // JSX tags
      s = s.replace(/(&lt;\/?)([A-Za-z][\w.-]*)/g, '$1<span class="tk-tag">$2</span>');
      // attributes
      s = s.replace(/(\s)([a-zA-Z][\w-]*)(=)/g, '$1<span class="tk-attr">$2</span>$3');
      // keywords
      s = s.replace(/\b(import|from|export|default|const|let|function|return|if|else|true|false|null|async|await)\b/g, '<span class="tk-kw">$1</span>');
    } else if (lang === 'css') {
      s = s.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="tk-comment">$1</span>');
      s = s.replace(/(@[a-z-]+)/g, '<span class="tk-kw">$1</span>');
      s = s.replace(/(--[\w-]+)/g, '<span class="tk-var">$1</span>');
      s = s.replace(/(#[0-9a-fA-F]{3,8})/g, '<span class="tk-str">$1</span>');
      s = s.replace(/([\w-]+)(:)/g, '<span class="tk-attr">$1</span>$2');
    } else if (lang === 'html') {
      s = s.replace(/(&lt;\/?)([a-z][\w-]*)/g, '$1<span class="tk-tag">$2</span>');
      s = s.replace(/(\s)([a-zA-Z][\w-]*)(=)/g, '$1<span class="tk-attr">$2</span>$3');
      s = s.replace(/("[^"]*")/g, '<span class="tk-str">$1</span>');
    } else if (lang === 'bash') {
      s = s.replace(/(#[^\n]*)/g, '<span class="tk-comment">$1</span>');
      s = s.replace(/\b(npm|pnpm|yarn|npx|cd|install|add|create)\b/g, '<span class="tk-kw">$1</span>');
    }
    return s;
  }

  // Build a code block w/ header + copy button.
  function codeBlock(raw, lang = 'jsx', file = '') {
    const highlighted = highlight(raw.trim(), lang);
    return `<div class="code">
      <div class="code-head">
        <span class="lang">${file || lang}</span>
        <button class="code-copy" type="button">Copiar</button>
      </div>
      <pre class="code-body" data-raw="${esc(raw.trim()).replace(/"/g, '&quot;')}"><code>${highlighted}</code></pre>
    </div>`;
  }

  // Pair a preview (HTML) with a code block.
  function pair(previewHtml, code, opts = {}) {
    const { dark = false, wide = false, stack = false, label = 'Preview', lang = 'jsx', file = '' } = opts;
    const pvCls = 'preview' + (dark ? ' dark' : '') + (wide ? ' wide' : '');
    return `<div class="pair${stack ? ' stack' : ''}">
      <div class="${pvCls}"><span class="pv-label">${label}</span>${previewHtml}</div>
      ${codeBlock(code, lang, file)}
    </div>`;
  }

  // Section shell.
  function section(id, num, title, titleEm, desc, bodyHtml) {
    return `<section id="${id}">
      <div class="sec-head">
        <div class="num">${num}</div>
        <h2>${title}${titleEm ? ' <em>' + titleEm + '</em>' : ''}</h2>
        <div class="desc">${desc}</div>
      </div>
      ${bodyHtml}
    </section>`;
  }

  // Exposed to sub-files for composing the whole doc.
  window.__ds = { h, esc, highlight, codeBlock, pair, section };

  // Render order
  const order = [
    'laws',
    'install', 'tailwind',
    'colors', 'type', 'voice', 'spacing', 'radii', 'layout', 'motion', 'logo',
    'button', 'input', 'link', 'icon', 'card', 'badge',
    'states', 'a11y',
    'hero', 'trust', 'counter', 'service', 'bio', 'faq', 'contact', 'footerPat', 'wa'
  ];

  function renderAll() {
    let html = '';
    for (const key of order) {
      const fn = window.__dsSections?.[key];
      if (typeof fn === 'function') html += fn();
    }
    root.innerHTML = html;
  }

  // Wait a tick so sub-files can register.
  window.addEventListener('DOMContentLoaded', renderAll);
  if (document.readyState !== 'loading') renderAll();
})();
