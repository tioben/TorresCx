//função para fazer efeito de scroll na página atual
function scrollToSection(className) {
    var section = document.querySelector(className);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// função para navegar até a tela e scrollar em seguida [NÃO ESTÁ FUNCIONANDO]
function navegateAndScroll(locationPage, className) {
    window.location.href = locationPage;
    setTimeout(
        function () {
            var section = document.querySelector(className);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    ,10000);
}

//Lógica para funcionamento do menu expansivo
const elemento = document.getElementById('ulMenu');
const checkbox = document.getElementById('meuCheckbox');

let positionValue = '-160px';
let boxShadowValue = '0px 0px 0px rgba(81, 81, 81, 0.5)';

checkbox.addEventListener('change', function(){
    positionValue = this.checked ? '90px' : '-161px';
    boxShadowValue = this.checked ? '0px 0px 10px rgba(81, 81, 81, 0.5)' : '0px 0px 0px rgba(81, 81, 81, 0.5)'
    elemento.style.top = positionValue;
    elemento.style.boxShadow = boxShadowValue;
});
