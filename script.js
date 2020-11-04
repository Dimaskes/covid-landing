const nav__btn = document.querySelector('.nav--btn');
const nav__links = document.querySelector('.navigation--links');

nav__btn.addEventListener('click', () => {
    nav__links.classList.toggle('active');
})