const slides = document.getElementsByClassName('slide');
const navbarBrand = document.getElementById('navbar-brand');
const navbarNav = document.getElementById('navbar-nav');
const mainNavbar = document.getElementById('mainNavbar');
const hamburger = document.getElementById('hamburger-box');
const xBox = document.getElementById('x-box');
const home = document.getElementById('home');
const custom = document.getElementById('custom');


let interval = 5000;
let active_slide = 0;
let numOfSlides = slides.length;

function nextSlide()
{
    active_slide += 1;
    
    
    for(let i = 0; i < slides.length; i++)
    {
        if(i == active_slide % slides.length)
        {
            slides[i].setAttribute('class' , 'slide active');
        }
        else
        {
            slides[i].setAttribute('class', 'slide inactive');
        }
    }
}

setInterval(nextSlide, interval)


window.addEventListener('resize', () => {
    if (window.innerWidth < 800) {
        navbarBrand.style.visibility = 'hidden';
        navbarNav.style.visibility = 'hidden';
        hamburger.style.visibility = 'visible';
        mainNavbar.style.display = "flex";
        mainNavbar.style.flexDirection = 'column';
        navbarNav.style.flexDirection = 'column';
    } else {
        navbarBrand.removeAttribute('style');
        navbarNav.removeAttribute('style');
        mainNavbar.removeAttribute('style');
        hamburger.style.visibility = 'hidden';
    }
})


window.addEventListener('load', () => {
    if (window.innerWidth < 800) {
        navbarBrand.style.visibility = 'hidden';
        navbarNav.style.visibility = 'hidden';
        hamburger.style.visibility = 'visible';
        mainNavbar.style.display = "flex";
        mainNavbar.style.flexDirection = 'column';
        navbarNav.style.flexDirection = 'column';
    }
})

hamburger.addEventListener('click', () => {
    navbarNav.style.visibility = 'visible';
    navbarBrand.style.visibility = 'visible';
    hamburger.style.visibility = 'hidden';
    xBox.style.visibility = 'visible';
})

xBox.addEventListener('click', () => {
    navbarNav.style.visibility = 'hidden';
    navbarBrand.style.visibility = 'hidden';
    hamburger.style.visibility = 'visible';
    xBox.style.visibility = 'hidden';
})

navbarBrand.addEventListener('click', () => {
    if (window.innerWidth < 800) {
        navbarNav.style.visibility = 'hidden';
        navbarBrand.style.visibility = 'hidden';
        hamburger.style.visibility = 'visible';
        xBox.style.visibility = 'hidden';
    }
})

home.addEventListener('click', () => {
    if (window.innerWidth < 800) {
        navbarNav.style.visibility = 'hidden';
        navbarBrand.style.visibility = 'hidden';
        hamburger.style.visibility = 'visible';
        xBox.style.visibility = 'hidden';
    }
})

custom.addEventListener('click', () => {
    if (window.innerWidth < 800) {
        navbarNav.style.visibility = 'hidden';
        navbarBrand.style.visibility = 'hidden';
        hamburger.style.visibility = 'visible';
        xBox.style.visibility = 'hidden';
    }
})
