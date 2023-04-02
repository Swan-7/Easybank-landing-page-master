const navbar = document.getElementById("menu");
const toggleBtn = document.getElementById("navbar_toggle");


function toggleNavbar() {
    const toggleBtnIcon = document.getElementById("toggle_icon")
    const image = document.getElementById("hero_mockup")
    const isActive = navbar.classList.contains("active")
 

    if (isActive) {
        navbar.classList.remove("active");
        toggleBtnIcon.classList.remove("fa-times");
        toggleBtnIcon.classList.add("fa-bars");     
        image.classList.remove("hide")   
    }
    else {
        navbar.classList.add("active");
        toggleBtnIcon.classList.remove("fa-bars");
        toggleBtnIcon.classList.add("fa-times");
        image.classList.add("hide")
    }
} 

if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleNavbar)  
}

