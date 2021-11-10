const slides = document.getElementsByClassName('slide');
const navbarBrand = document.getElementById('navbar-brand');
const navbarNav = document.getElementById('navbar-nav');
const mainNavbar = document.getElementById('mainNavbar');
const hamburger = document.getElementById('hamburger-box');
const xBox = document.getElementById('x-box');
const home = document.getElementById('home');
const custom = document.getElementById('custom');



const quoteArr = [{
    quote: `"My Fellow Americans... The Coffee Mug is the best! I won't have to worry about
    burns ever again!"`,
    author: '- Former President Barack Obama'
},
{
    quote: `"There's honestly nothing like the Coffee Mug. This product enlightened me..."`,
    author: '- Mahatma Ghandi'
},
{
    quote: `"The Coffee Mug changed my life. I honestly can't imagine living without it!"`,
    author: '- Elon Musk'
},
{
    quote: `"You honestly can't see the benefits of the Coffee Mug until you buy it."`,
    author: '- John Cena'
},
{
    quote: `"CAN YOU SMELL... WHAT THE COFFEE MUG IS COOKIN'???"`,
    author: "- Dwayne 'The Rock' Johnson"
},
{
    quote: `"... You mean the Coffee Mug? It's like family to me..."`,
    author: '- Vin Diesel'
},
{
    quote: `"Don't believe everything you read on the internet... except that the Coffee Mug is great!"`,
    author: '- Former President Abraham Lincoln'
},
{
    quote: `"You get a coffee mug! And <i>YOU</i> get a Coffee Mug!"`,
    author: '- Oprah Winfrey'
}
];

let interval = 5000;
let active_slide = 0;
let numSlides = quoteArr.length;

function nextSlide() {
    const author = document.getElementById('author');
    const quote = document.getElementById('quote');
    active_slide = (active_slide + 1) % numSlides;

    author.innerHTML = quoteArr[active_slide].author;
    quote.innerHTML = quoteArr[active_slide].quote;
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
