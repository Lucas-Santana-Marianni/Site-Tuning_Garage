// app.js - versão compatível com Live Server e GitHub Pages
import { router } from './router.js';
import { templates } from './templates.js';
import { validator } from './validation.js';

const app = document.getElementById('app');
document.getElementById('year').textContent = new Date().getFullYear();

router.init(app, templates);

window.__TG_afterRender = () => {
  validator.attachFormHandlers();
  const grid = document.querySelector('.gallery-grid');
  if (grid) {
    grid.addEventListener('click', (e) => {
      const img = e.target.closest('img');
      if (!img) return;
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.inset = '0';
      overlay.style.background = 'rgba(0,0,0,0.85)';
      overlay.style.display = 'flex';
      overlay.style.alignItems = 'center';
      overlay.style.justifyContent = 'center';
      overlay.style.zIndex = 120;
      const im = document.createElement('img');
      im.src = img.src;
      im.style.maxWidth = '92%';
      im.style.maxHeight = '92%';
      im.style.borderRadius = '12px';
      overlay.appendChild(im);
      overlay.addEventListener('click', () => overlay.remove());
      document.body.appendChild(overlay);
    });
  }
};

// nav
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const link = btn.dataset.link;
    // 🟢 Usa hash em vez de pathname
    location.hash = link;
  });
});

// 🟢 Novo listener baseado em hash
window.addEventListener('hashchange', () => {
  const route = location.hash.replace('#', '') || '/';
  router.handle(route);
});

// 🟢 Roteia ao carregar
const initialRoute = location.hash.replace('#', '') || '/';
router.handle(initialRoute);
