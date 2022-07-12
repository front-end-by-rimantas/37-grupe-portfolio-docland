const cards = document.querySelector('.imgBox');
const slides = Array.from(cards.children);

const leftBtn = document.querySelector('#slide-left');
const rightBtn = document.querySelector('#slide-right');

const slideWidth = slides[0].getBoundingClientRect().width;
console.log(slideWidth);

const moveSlidePostion = (slide, index) => {
    slide.style.left = slideWidth * index + 'px'
};

slides.forEach(moveSlidePostion);

const moveToSlide = (cards, currentSlide, targetSlide) => {
    cards.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
    
};

leftBtn.addEventListener('click', () => {
    const currentSlide = cards.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;

    moveToSlide(cards, currentSlide, targetSlide);
});

rightBtn.addEventListener('click', () => {
    const currentSlide = cards.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(cards, currentSlide, targetSlide);
});
        
