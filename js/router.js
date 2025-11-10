// router.js
export const router = (function(){
  let mount, templates;
  function init(mountEl, tpl){ mount = mountEl; templates = tpl; }
  function navigate(path){ history.pushState({}, '', path); handle(path); }
  function handle(path){
    if(!path || path === '/') path = '/';
    let html;
    switch(path){
      case '/': html = templates.home(); break;
      case '/jdms': html = templates.jdms(); break;
      case '/alemaes': html = templates.alemaes(); break;
      case '/americanos': html = templates.americanos(); break;
      case '/brasil': html = templates.brasil(); break;
      case '/pecas': html = templates.pecas(); break;
      case '/contato': html = templates.contact(); break;
      default: html = templates.notFound(); break;
    }
    mount.innerHTML = html;
    mount.querySelectorAll('.section').forEach((s,i)=>{
      s.style.opacity = 0; s.style.transform='translateY(10px)';
      setTimeout(()=>{ s.style.transition = 'opacity 420ms ease, transform 420ms ease'; s.style.opacity=1; s.style.transform='translateY(0)'; }, 80*i);
    });
    if(typeof window.__TG_afterRender === 'function') window.__TG_afterRender();
  }
  return { init, navigate, handle };
})();
