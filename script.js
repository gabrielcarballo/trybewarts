const button = document.getElementsByTagName('button')[0];
const formButton = document.getElementsByTagName('button')[1];
const emailInput = document.getElementsByTagName('input')[0];
const passworldInput = document.getElementsByTagName('input')[1];
const urlForm = window.location.search;
const urlParametro = new URLSearchParams(urlForm);
const nomeForm = urlParametro.get('nome');
const sobrenomeForm = urlParametro.get('sobrenome');
const emailForm = urlParametro.get('email');
const escolaForm = urlParametro.get('escola');
const familyForm = urlParametro.get('family');
const conteudoForm = urlParametro.get('conteudo');
const rateForm = urlParametro.get('rate');
const comentarioForm = urlParametro.get('comentario');



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
  } else { sendButton.disabled = true; }
});

areaDeTexto = addEventListener('input', () => {
  const areaDeTexto = document.querySelector('textarea');
  const counter = document.getElementById('counter');
  const contador = 500;
  counter.innerHTML = contador - areaDeTexto.value.length;
})

function vaaaai() {
  formButton.addEventListener('click', () => {
    const page = document.querySelector('#evaluation-form');
    page.innerHTML = `<h1>Formulário de Aplicação</h1>
    <div id=form-data style="display: contents">
    <span>Nome: ${nomeForm} ${sobrenomeForm}</span>
    <span>Email: ${emailForm}</span>
    <span>Casa: ${escolaForm}</span>
    <span>Família: ${familyForm}</span>
    <span>Conteúdo: ${conteudoForm}</span>
    <span>Avaliação: ${rateForm}</span>
    <span>Observações: ${comentarioForm}</span>
    </div>`;
  })
}

vaaaai();


