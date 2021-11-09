const slides = document.getElementsByClassName('slide');


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

