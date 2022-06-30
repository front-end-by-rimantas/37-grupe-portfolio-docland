const slider_img =document.querySelector('.slider-img');
let images = ['slider1.jpg', 'slider2.jpg','slider3.jpg','slider1.jpg','slider2.jpg'];
let i = 0;



function prev(){
    if(i<= 0) 
        i= images.length;
        i--;      
     return setImg(),timer();
}

function next(){
    if(i >= images.length -1) 
        i= -1;
        i++;
        
    return setImg(),timer();
}

function setImg(){
    return slider_img.setAttribute('src','./img/slider1/'+ images[i])
}

function timer(){
    setTimeout(next, 4000);

}
    
        
