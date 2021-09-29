const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;

//console.log(slidesLength);

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`; // to get the last index

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click',() => changeSlide('down'));

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    // console.log(sliderHeight); it dynamically according to height of page
    
    //Moves the slide revere when specific conditons are applied
    
    if(direction === 'up') {
        activeSlideIndex++;
        if(activeSlideIndex > slidesLength-1){
            activeSlideIndex = 0;
        }
    }
    else if(direction === 'down'){
        activeSlideIndex-- ;
        if(activeSlideIndex < 0)
        activeSlideIndex = slidesLength -1;
    }


    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;

}