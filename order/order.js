const imageText = document.getElementById('image-text');

window.addEventListener('load', () => {
    console.log('loaded');
    imageText.style.fontSize = sessionStorage.size;
    imageText.style.color = sessionStorage.color;
    imageText.style.top = sessionStorage.top;
    imageText.style.left = sessionStorage.left;
    imageText.innerHTML = sessionStorage.text;
})