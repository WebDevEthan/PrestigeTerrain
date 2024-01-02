let prevScrollPos = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollPos = window.scrollY;
    if (prevScrollPos > currentScrollPos) {
        document.querySelector('nav').classList.add('active');
        document.querySelector('nav').classList.remove('NoDisplay')
    } else {
        document.querySelector('nav').classList.remove('active');
    }
    if (prevScrollPos < currentScrollPos) {
        document.querySelector('nav').classList.add('NoDisplay');
    }
    prevScrollPos = currentScrollPos;
});