const semiCircles = document.querySelectorAll('div.semi-circle')

semiCircles.forEach(event => {
    const height = parseFloat(getComputedStyle(event).height); // Get height in pixels
    const width = height / 2; // Calculate width as half of the height
    event.style.width = `${width}px`; // Set the calculated width
})

const circle = document.querySelector('div.circle')

function perfectCircle(circle) {
    const height = parseFloat(getComputedStyle(circle).height);
    const width = height
    circle.style.width = `${width}px`
}

perfectCircle(circle)

const upperTriangle = document.querySelector('div.upper-triangle');

function perfectUpperTriangle(circle) {
    const height = parseFloat(getComputedStyle(circle.parentNode).height);
    const width = height
    circle.style.width = `${width}px`
}

perfectUpperTriangle(upperTriangle)

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