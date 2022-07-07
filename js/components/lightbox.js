/*Lightbox start*/

const box = document.querySelector('#lightBox');

const play = document.querySelector('#playBtn');

const btnClose = document.querySelector('.close-player');

box.addEventListener('click', function(){
    console.log('clicked');
});

play.addEventListener('click', function(){
    console.log('clicked');
});

const closeLightbox = () => {
    box.style.display = 'none'
};

const showLightbox = () => {
    box.style.display = 'flex'
};

btnClose.addEventListener('click', () => {
    closeLightbox();
});

play.addEventListener('click', () => {
    showLightbox();
});



//  playBtn closeBtn lightBox
/*Lightbox end*/