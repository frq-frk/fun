const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const sliderLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlide = 0;

sliderLeft.style.top = `-${(slidesLength-1) * 100}vh`

const changeSlide = (dir) => {

     const slideHeight = sliderContainer.clientHeight
     if(dir === 'up'){
         activeSlide += 1;
         if(activeSlide > slidesLength -1){
             activeSlide = 0;
         }
     }else if(dir === 'down'){
        activeSlide -= 1;
        if(activeSlide < 0){
            activeSlide = slidesLength - 1;
        }
     }

     slideRight.style.transform = `translateY(-${activeSlide * slideHeight}px)`
     sliderLeft.style.transform = `translateY(${activeSlide * slideHeight}px)`

}


upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));