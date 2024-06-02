//função para fazer efeito de scroll na página atual
function scrollToSection(section) {
  const element = document.querySelector(section);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

//Lógica para funcionamento do menu expansivo
const elemento = document.getElementById('ulMenu');
const checkbox = document.getElementById('meuCheckbox');

const spanHamburguer1 = document.getElementById('spanHamburguer1');
const spanHamburguer2 = document.getElementById('spanHamburguer2');
const spanHamburguer3 = document.getElementById('spanHamburguer3');

// expansão do menu
let positionValue = '-160px';
let boxShadowValue = '0px 0px 0px rgba(81, 81, 81, 0.5)';

// hamburguer
let leftSpan1 = '-8px';
let opacitySpan2 = '100';
let leftSpan3 = '4px';
let rotateSpan1 = 'rotate(0deg)';
let rotateSpan3 = 'rotate(0deg)';
let colorHamburguer = '#515151';

checkbox.addEventListener('change', function () {
  positionValue = this.checked ? '90px' : '-161px';
  elemento.style.top = positionValue;
  boxShadowValue = this.checked
    ? '0px 0px 10px rgba(81, 81, 81, 0.5)'
    : '0px 0px 0px rgba(81, 81, 81, 0.5)';
  elemento.style.boxShadow = boxShadowValue;

  leftSpan1 = this.checked ? '-3px' : '-8px';
  spanHamburguer1.style.left = leftSpan1;
  leftSpan3 = this.checked ? '-0px' : '4px';
  spanHamburguer3.style.left = leftSpan3;
  opacitySpan2 = this.checked ? '0' : '100';
  spanHamburguer2.style.opacity = opacitySpan2;

  rotateSpan1 = this.checked ? 'rotate(-45deg)' : 'rotate(0deg)';
  spanHamburguer1.style.transform = rotateSpan1;
  rotateSpan3 = this.checked ? 'rotate(45deg)' : 'rotate(0deg)';
  spanHamburguer3.style.transform = rotateSpan3;

  colorHamburguer = this.checked ? '#ff0000' : '#515151';
  spanHamburguer1.style.color = colorHamburguer;
  spanHamburguer3.style.color = colorHamburguer;
});

class FormSubmit {
  constructor(settings) {
    this.settings = settings;
    this.form = document.querySelector(settings.form);
    this.formButton = document.querySelector(settings.button);
    if (this.form) {
      this.url = this.form.getAttribute('action');
    }
    this.sendForm = this.sendForm.bind(this);
  }

  displaySuccess() {
    this.form.innerHTML = this.settings.success;
  }

  displayError() {
    this.form.innerHTML = this.settings.error;
  }

  getFormObject() {
    const formObject = {};
    const fields = this.form.querySelectorAll('[name]');
    fields.forEach((field) => {
      formObject[field.getAttribute('name')] = field.value;
    });
    formObject;
    return;
  }

  onSubmission(event) {
    event.preventDefault();
    event.target.disable = true;
    event.target.innerText = 'Enviando...';
  }

  async sendForm(event) {
    try {
      this.onSubmission(event);
      await fetch(this.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(this.getFormObject()),
      });
      this.displaySuccess();
    } catch (error) {
      this.displayError();
      throw new Error(error);
    }
  }

  init() {
    if (this.form) this.formButton.addEventListener('click', this.sendForm);
    return this;
  }
}

const formSubmit = new FormSubmit({
  form: '[data-form]',
  button: '[data-button]',
  success: '<h1>Mensagem enviada!</h1>',
  error: "<h1 class='error'>Não foi possível enviar sua mensagem!</h1>",
});
