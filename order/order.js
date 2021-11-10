const imageText = document.getElementById('image-text');
const amount = document.getElementById('amount');
const total = document.getElementById('total');
const confirmButton = document.getElementById('confirm-button');

window.addEventListener('load', () => {
    console.log('loaded');
    imageText.style.fontSize = sessionStorage.size;
    imageText.style.color = sessionStorage.color;
    imageText.style.top = sessionStorage.top;
    imageText.style.left = sessionStorage.left;
    imageText.innerHTML = sessionStorage.text;
    imageText.style.fontFamily = sessionStorage.fontFamily;
})

amount.addEventListener('change', (event) => {
    if (Number(event.target.value) > 0) {
        total.innerHTML = `$${(Number(event.target.value) * 9.95).toFixed(2)} Total Cost`; 
        confirmButton.style.visibility = 'visible';
    } else {
        confirmButton.style.visibility = 'hidden';
    }
})