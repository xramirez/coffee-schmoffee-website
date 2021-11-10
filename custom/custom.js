const textInput = document.getElementById('text-input');
const imageText = document.getElementById('image-text');
const sizeInput = document.getElementById('size-input');
const colorInput = document.getElementById('color-input');
const fontFamilyInput = document.getElementById('font-family-input')
const up = document.getElementById('up');
const right = document.getElementById('right');
const left = document.getElementById('left');
const down = document.getElementById('down');
const saveButton = document.getElementById('save-button');
const navbarBrand = document.getElementById('navbar-brand');
const navbarNav = document.getElementById('navbar-nav');
const mainNavbar = document.getElementById('mainNavbar');
const hamburger = document.getElementById('hamburger-box');
const xBox = document.getElementById('x-box');
const home = document.getElementById('home');
const custom = document.getElementById('custom');

let xAxis = 30;
let yAxis = 30;
let size = 16;
let color = '#000000';
let text = '';



let active = 1;

const fas = document.getElementsByClassName('fas');
for(let i = 0; i < fas.length; i++) {
    fas[i].setAttribute('class', 'fas active');
}

textInput.addEventListener('keyup', (event) => {
    imageText.innerHTML = event.target.value;
    text = event.target.value;
    sessionStorage.text = text;    
})

sizeInput.addEventListener('click', (event) => {
    size = event.target.value;
    imageText.style.fontSize = `${event.target.value}px`;
    sessionStorage.size = `${size}px`;
})

sizeInput.addEventListener('keyup', (event) => {
    size = event.target.value;
    imageText.style.fontSize = `${event.target.value}px`;
    sessionStorage.size = `${size}px`;
})

fontFamilyInput.addEventListener('change', (event) => {
    console.log(event.target.value);
    imageText.style.fontFamily = event.target.value;
    sessionStorage.fontFamily = event.target.value;
})

colorInput.addEventListener('change', (event) => {
    imageText.style.color = event.target.value;
    color = event.target.value;
    sessionStorage.color = color;
})

up.addEventListener('click', () => {
    yAxis -= 1;
    imageText.style.top = `${yAxis}%`;
    sessionStorage.top = `${yAxis}%`;
});

down.addEventListener('click', () => {
    yAxis += 1;
    imageText.style.top = `${yAxis}%`;
    sessionStorage.top = `${yAxis}%`;
})

left.addEventListener('click', () => {
        xAxis -= 1;
        imageText.style.left = `${xAxis}%`;
        sessionStorage.left = `${xAxis}%`;
})

right.addEventListener('click', () => {
    xAxis += 1;
    imageText.style.left = `${xAxis}%`;
    sessionStorage.left = `${xAxis}%`;
})

window.addEventListener('load', () => {
    sessionStorage.xAxis = '30%';
    sessionStorage.yAxis = '30%';
    sessionStorage.size = 16;
    sessionStorage.color = '#000000';
    sessionStorage.text = 'I am a default mug';
    sessionStorage.fontFamily = "'Anton', sans-serif;"
})

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