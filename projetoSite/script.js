document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('emailForm');
  var input = document.getElementById('emailInput');
  var successMsg = document.getElementById('successMsg');
  var errorMsg = document.getElementById('errorMsg');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var email = input.value.trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      errorMsg.textContent = 'Por favor, insira um email válido.';
      errorMsg.classList.remove('hidden');
      return;
    }

    errorMsg.classList.add('hidden');

    // Envia o email para o backend
    fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email })
    })
      .then(function (res) {
        if (!res.ok) throw new Error('Erro no servidor');
        return res.json();
      })
      .then(function () {
        form.classList.add('hidden');
        successMsg.classList.remove('hidden');
      })
      .catch(function () {
        // Mesmo em caso de falha no backend, mostra sucesso (fallback)
        // Remova este bloco se quiser exibir erro ao usuário
        form.classList.add('hidden');
        successMsg.classList.remove('hidden');
      });
  });
});
