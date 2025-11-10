// validation.js - form validation and localStorage handling (v3)
export const validator = (function(){
  function showError(form, fieldName, message){
    const el = form.querySelector(`[data-error-for="${fieldName}"]`);
    if(el) el.textContent = message;
  }
  function clearErrors(form){
    form.querySelectorAll('.error-msg').forEach(e=>e.textContent='');
  }

  function validateForm(form){
    clearErrors(form);
    let valid = true;
    const elements = Array.from(form.elements).filter(e=>e.name);
    elements.forEach(el=>{
      const name = el.name;
      const value = (el.value || '').trim();
      if(el.required && !value){
        showError(form, name, 'Campo obrigatório');
        valid = false;
        return;
      }
      if(el.minLength && value.length < el.minLength){
        showError(form, name, `Mínimo ${el.minLength} caracteres`);
        valid = false;
        return;
      }
      if(el.pattern){
        const re = new RegExp(el.pattern);
        if(value && !re.test(value)){
          showError(form, name, 'Formato inválido');
          valid = false;
          return;
        }
      }
      if(el.type === 'email' && value){
        const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        if(!ok){ showError(form, name, 'E-mail inválido'); valid = false; return;}
      }
    });
    return valid;
  }

  function attachFormHandlers(){
    const cf = document.getElementById('contact-form');
    if(cf){
      cf.addEventListener('submit', (e)=>{
        e.preventDefault();
        if(validateForm(cf)){
          const data = {
            name: cf.querySelector('[name=name]').value,
            email: cf.querySelector('[name=email]').value,
            message: cf.querySelector('[name=message]').value,
            ts: new Date().toISOString()
          };
          const list = JSON.parse(localStorage.getItem('tg_contacts_v3')||'[]');
          list.push(data);
          localStorage.setItem('tg_contacts_v3', JSON.stringify(list));
          document.getElementById('contact-result').textContent = 'Mensagem enviada — obrigado! Em breve responderemos.';
          cf.reset();
        } else {
          document.getElementById('contact-result').textContent = 'Corrija os campos e tente novamente.';
        }
      });
    }
  }

  return { validateForm, attachFormHandlers };
})();
