// O código JavaScript lida com o envio do formulário e a leitura em voz alta do texto

const form = document.getElementById('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const text = document.getElementById('text').value;
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  synth.speak(utterance);
});

if (window.speechSynthesis) {
  console.log('A API de síntese de voz está disponível');
} else {
  console.log('A API de síntese de voz não está disponível');
}

const text = document.getElementById('text').value.trim();
if (text) {
  O texto é válido, continuar com a síntese de voz
} else {
  O texto é inválido, exibir uma mensagem de erro para o usuário
}

const synth = window.speechSynthesis;
const utterance = new SpeechSynthesisUtterance(text);
utterance.onerror = e => {
  console.error('Ocorreu um erro');
  }
