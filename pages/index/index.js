function scrollToSection(className) {
    var section = document.querySelector(className);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
