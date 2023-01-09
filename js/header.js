let mobile_navbar = document.querySelector(".mobile-navbar-btn");
let header_navbar = document.querySelector(".header");

toggleNavBar = () => {
    header_navbar.classList.toggle("active");
}

mobile_navbar.addEventListener("click",()=> toggleNavBar())