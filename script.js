function scrollToSection(className) {
    var section = document.querySelector(className);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function navegateAndScroll(locationPage, className) {
    window.location.href = locationPage;
    setTimeout(function(){
        var section = document.querySelector(className);
        section.scrollIntoView({ behavior: 'smooth' })
    }, 2000);
}
