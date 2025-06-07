const gridButton = document.getElementById("gridViewButton");
const listButton = document.getElementById("listViewButton");
const container = document.getElementById("companiesContainer");

gridButton.addEventListener("click", () => {
    container.classList.add("grid-view");
    container.classList.remove("list-view");
    gridButton.classList.add("active");
    listButton.classList.remove("active");
});

listButton.addEventListener("click", () => {
    container.classList.add("list-view");
    container.classList.remove("grid-view");
    listButton.classList.add("active");
    gridButton.classList.remove("active");
});


container.classList.add("grid-view");