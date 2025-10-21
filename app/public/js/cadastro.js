document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#cadastro-form');
  if (!form) return;

  const senha = form.querySelector('#senha') || form.querySelector('input[name="senha"]');
  const confirmar = form.querySelector('#confirmar-senha');
  const labelSenha = senha ? form.querySelector(`label[for="${senha.id}"]`) : null;
  const labelConfirmar = confirmar ? form.querySelector(`label[for="${confirmar.id}"]`) : null;

  function setError(labelEl, inputEl, message) {
    if (labelEl) labelEl.dataset.error = message || '';
    if (inputEl) {
      if (message) {
        inputEl.classList.add('invalid');
        inputEl.setAttribute('aria-invalid', 'true');
      } else {
        inputEl.classList.remove('invalid');
        inputEl.setAttribute('aria-invalid', 'false');
      }
    }
  }

  function validateSenha() {
    if (!senha) return true;
    const v = senha.value.trim();
    if (v.length === 0) {
      setError(labelSenha, senha, '');
      return false;
    }
    if (v.length < 6) {
      setError(labelSenha, senha, 'A senha deve ter no mínimo 6 caracteres');
      return false;
    }
    setError(labelSenha, senha, '');
    return true;
  }

  function validateConfirmar() {
    if (!confirmar) return true;
    const s = senha ? senha.value : '';
    const c = confirmar.value;
    if (c.length === 0) {
      setError(labelConfirmar, confirmar, '');
      return false;
    }
    if (s !== c) {
      setError(labelConfirmar, confirmar, 'A senha inválida');
      return false;
    }
    setError(labelConfirmar, confirmar, '');
    return true;
  }

  if (senha) {
    senha.addEventListener('input', () => { validateSenha(); validateConfirmar(); });
    senha.addEventListener('blur', validateSenha);
  }
  if (confirmar) {
    confirmar.addEventListener('input', validateConfirmar);
    confirmar.addEventListener('blur', validateConfirmar);
  }

  form.addEventListener('submit', (e) => {
    const ok1 = validateSenha();
    const ok2 = validateConfirmar();
    if (!ok1 || !ok2) {
      e.preventDefault();
      const firstInvalid = form.querySelector('.invalid');
      if (firstInvalid) firstInvalid.focus();
    }
  });
});