// 🌙 Cambio de tema y persistencia
const root = document.documentElement;
const themeBtn = document.getElementById('themeBtn');
const saved = localStorage.getItem('theme');

if (saved === 'light') root.classList.add('light');

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    root.classList.toggle('light');
    localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
  });
}

// 📅 Año dinámico en el pie de página
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();