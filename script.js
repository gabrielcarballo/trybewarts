const button = document.getElementsByTagName('button')[0];
const emailInput = document.getElementsByTagName('input')[0];
const passworldInput = document.getElementsByTagName('input')[1];

function alerta() {
  button.addEventListener('click', () => {
    if (
      emailInput.value === 'tryber@teste.com'
      && passworldInput.value === '123456'
    ) {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
}
alerta();

const sendButton = document.getElementById('submit-btn');
sendButton.disabled = true;
const checkButton = document.getElementById('agreement');
checkButton.addEventListener('click', () => {
  if (checkButton.checked === true) {
    sendButton.disabled = false;
  } else { sendButton.disabled = true; }
});

areaDeTexto = addEventListener('input', () => {
    const areaDeTexto = document.querySelector('textarea');
    const counter = document.getElementById('counter');
    const contador = 500;
    counter.innerHTML = contador - areaDeTexto.value.length;
  })
