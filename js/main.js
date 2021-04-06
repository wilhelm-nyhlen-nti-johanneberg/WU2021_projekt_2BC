
let layer = document.querySelector(".fade-layer").addEventListener("click",showMenu)

let button = document.querySelector(".menu-button").addEventListener("click",showMenu)

let sideLinks = document.querySelectorAll('.sidenav_links li');


function showMenu(){
    let sidemenu = document.querySelector(".side-nav")
    sidemenu.classList.toggle("show");

    let layer = document.querySelector(".fade-layer")
    layer.classList.toggle("visible")


    sideLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ''
        } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
        // console.log(index / 7);
        }
    
    });
    

}

