const darkModeBtn = document.getElementById("darkModeToggle");
const body = document.body;

darkModeBtn.addEventListener("click", () =>{
    body.classList.toggle("dark-mode");
});