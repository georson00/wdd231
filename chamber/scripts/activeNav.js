const hanburgerMenu = document.querySelector('#menu-button');
const navElement = document.querySelector('.menu-links');

hanburgerMenu.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hanburgerMenu.classList.toggle('open');
});