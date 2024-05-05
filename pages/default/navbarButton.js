let newNavbar = document.querySelector('.navbar-phone'), 
btnToggle = document.querySelector('.hamburguer')



// listeners
btnToggle.addEventListener('click', (e) => {
    newNavbar.classList.toggle('none')   
    btnToggle.classList.toggle('open')
})