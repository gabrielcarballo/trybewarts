const button = document.getElementsByTagName('button')[0];
const emailInput = document.getElementsByTagName('input')[0];
const passworldInput = document.getElementsByTagName('input')[1];
const listaInputs = document.getElementsByTagName('input');
const submitForm = document.getElementById('submit-btn');
const main = document.getElementsByTagName('main')[0];
const areaDeTexto = document.querySelector('textarea');
let familyForm = '';
let conteudoForm = '';
let rateForm = '';

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

const sendButton = document.querySelector('#submit-btn');
sendButton.disabled = true;
const checkButton = document.getElementById('agreement');
checkButton.addEventListener('click', () => {
  if (checkButton.checked === true) {
    sendButton.disabled = false;
  } else {
    sendButton.disabled = true;
  }
});

areaDeTexto.addEventListener('input', () => {
  const counter = document.getElementById('counter');
  const contador = 500;
  counter.innerHTML = contador - areaDeTexto.value.length;
});

function catchfamily() {
  for (let i = 5; i < 8; i += 1) {
    if (listaInputs[i].checked) {
      familyForm = listaInputs[i].value;
    }
  }
}

function catchConteudo() {
  for (let i = 8; i < 13; i += 1) {
    if (listaInputs[i].checked) {
      conteudoForm += `${listaInputs[i].value}, `;
    }
  }
}

function catchRate() {
  for (let i = 14; i < 24; i += 1) {
    if (listaInputs[i].checked) {
      rateForm = listaInputs[i].value;
    }
  }
}

submitForm.addEventListener('click', () => {
  const nomeForm = document.getElementsByTagName('input')[2].value;
  const sobrenomeForm = document.getElementsByTagName('input')[3].value;
  const emailForm = document.getElementsByTagName('input')[4].value;
  const escolaForm = document.getElementsByTagName('select')[0].value;
  const comentarioForm = document.getElementById('textarea').value;
  catchfamily();
  catchConteudo();
  catchRate();
  document.querySelector('#evaluation-form').style.display = 'none';
  const formReady = document.createElement('div');
  formReady.classList.add('formReady');
  main.appendChild(formReady);
  formReady.innerHTML = `<h1>Formulário de Aplicação</h1><div id=form-data style="display:contents">
  <span>Nome: ${nomeForm} ${sobrenomeForm}</span>
  <span>Email: ${emailForm}</span><span>Casa: ${escolaForm}</span><span>
  Família: ${familyForm}</span><span>Matérias: 
  ${conteudoForm}</span><span>Avaliação: ${rateForm}</span>
  <span>Observações: ${comentarioForm}</span></div>`;
});
