// JavaScript to toggle the menu and change the hamburger to an "X"
function toggleMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.getElementById('nav-menu');
    
    // Toggle the 'open' class on both the menu and the hamburger icon
    menuIcon.classList.toggle('open');
    navMenu.classList.toggle('open');
}
