const slider = document.querySelector('.slider-list');

const leftBtn = document.querySelector('.slide-left');
const rightBtn = document.querySelector('.slide-right');

const sliderItem = Array.from(slider.children);
const sliderWidth = sliderItem[0].getBoundingClientRect().width;
console.log(sliderWidth);

leftBtn.addEventListener('click', () => {
    slider.style.transform = 'translateX(-' + sliderWidth + 'px)';
});



slider.addEventListener('transitionend', () => {
    slider.appendChild(slider.firstElementChild);

    slider.style.transition = 'none';
    slider.style.transform = 'translate(0)';
    setTimeout(function(){
        slider.style.transition = 'transform 0.75s ease-in';
    });
});




























// const cards = document.querySelector('.imgBox');
// const slides = Array.from(cards.children);

// const leftBtn = document.querySelector('#slide-left');
// const rightBtn = document.querySelector('#slide-right');

// const slideWidth = slides[0].getBoundingClientRect().width;
// console.log(slideWidth);

// const moveSlidePostion = (slide, index) => {
//     slide.style.left = slideWidth * index + 'px'
// };

// slides.forEach(moveSlidePostion);

// const moveToSlide = (cards, currentSlide, targetSlide) => {
//     cards.style.transform = 'translateX(-' + targetSlide.style.left + ')';
//     currentSlide.classList.remove('current-slide');
//     targetSlide.classList.add('current-slide');
    
// };

// leftBtn.addEventListener('click', () => {
//     const currentSlide = cards.querySelector('.current-slide');
//     const nextSlide = currentSlide.nextElementSibling;
//     moveToSlide(cards, currentSlide, nextSlide);
//     console.log(leftBtn, currentSlide);
// });

// rightBtn.addEventListener('click', () => {
//     const currentSlide = cards.querySelector('.current-slide');
//     const prevSlide = currentSlide.previousElementSibling;
//     moveToSlide(cards, currentSlide, prevSlide);
//     console.log(rightBtn);
// });
        
