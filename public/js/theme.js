(() => {
  const key = 'naseef-appearance';
  let preference = 'system';
  try { const saved = localStorage.getItem(key); if (['light', 'dark', 'system'].includes(saved)) preference = saved; } catch {}
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  function apply() {
    const theme = preference === 'system' ? (media.matches ? 'dark' : 'light') : preference;
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#15181d' : '#f9fafb');
    document.querySelectorAll('[data-theme-choice]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.themeChoice === preference)));
  }
  window.portfolioAppearance = { get preference() { return preference; }, set(value) { if (!['light', 'dark', 'system'].includes(value)) return; preference = value; try { localStorage.setItem(key, value); } catch {} apply(); }, apply };
  media.addEventListener('change', () => { if (preference === 'system') apply(); });
  window.addEventListener('storage', event => { if (event.key === key || event.key === null) { preference = ['light', 'dark', 'system'].includes(event.newValue) ? event.newValue : 'system'; apply(); } });
  apply();
})();
