  const botao = document.getElementById('showMensagem');
  const messageDiv = document.getElementById('mensagem');

  botao.addEventListener('click', () => {
    messageDiv.textContent = 'Olá! Que excelente dia para aprender algo novo!';
  });