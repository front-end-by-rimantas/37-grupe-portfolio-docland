/*Lightbox start*/

const box = document.querySelector('#lightBox');

const play = document.querySelector('#playBtn');

const btnClose = document.querySelector('#closeBtn');

const playStop = document.getElementById('playStop');

const stopIFrames = () => {
    let iFrameStop = playStop.getElementsByTagName('iframe');
        if (iFrameStop !== null){ 
            for(let i = 0;i < iFrameStop.length; i++){
            iFrameStop[i].src = iFrameStop[i].src;
            }
        };
    
};

const closeLightbox = () => {
    box.style.display = 'none'
};

const showLightbox = () => {
    box.style.display = 'flex'
};

btnClose.addEventListener('click', () => {
    closeLightbox();
});

btnClose.addEventListener('click', () => {
    stopIFrames();
});

play.addEventListener('click', () => {
    showLightbox();
});

box.addEventListener('click', () => {
    closeLightbox();
});
addEventListener('keydown', ({code}) => {
    if (code === 'Escape') {
        closeLightbox();
    }
});




/*Lightbox end*/