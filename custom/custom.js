const textInput = document.getElementById('text-input');
const imageText = document.getElementById('image-text');
const sizeInput = document.getElementById('size-input');
const colorInput = document.getElementById('color-input')
const up = document.getElementById('up');
const right = document.getElementById('right');
const left = document.getElementById('left');
const down = document.getElementById('down');
const saveButton = document.getElementById('save-button');

let xAxis = 150;
let yAxis = 250;
let size = 16;
let color = '#000000';
let text = ''

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

colorInput.addEventListener('change', (event) => {
    imageText.style.color = event.target.value;
    color = event.target.value;
    sessionStorage.color = color;
})

up.addEventListener('click', () => {
    yAxis -= 5;
    imageText.style.top = `${yAxis}px`;
    sessionStorage.top = `${yAxis}px`;
});

down.addEventListener('click', () => {
    yAxis += 5;
    imageText.style.top = `${yAxis}px`;
    sessionStorage.top= `${yAxis}px`;
})

left.addEventListener('click', () => {
        xAxis -= 5;
        imageText.style.left = `${xAxis}px`;
        sessionStorage.left = `${xAxis}px`;
})

right.addEventListener('click', () => {
    xAxis += 5;
    imageText.style.left = `${xAxis}px`;
    sessionStorage.left = `${xAxis}px`;
})

window.addEventListener('load', () => {
    sessionStorage.clear();
})