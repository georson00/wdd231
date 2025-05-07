document.addEventListener("DOMContentLoaded", function(){
    let links = document.querySelectorAll('nav a');
    let currentURL = window.location.pathname.split('/').pop();

    links.forEach(l =>l.classList.remove('active'));
    
    
    links.forEach( link => {
        let linkPage = link.getAttribute('href');

        if (linkPage === (currentURL) ||(linkPage === "index.html" && currentURL === "")){

            link.classList.add('active');
           
            
        }

        });

});