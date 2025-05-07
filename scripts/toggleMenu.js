const hamburgerMenu = document.querySelector('#menuButton');
const navElement = document.querySelector('#navbar');

hamburgerMenu.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerMenu.classList.toggle('open');
});