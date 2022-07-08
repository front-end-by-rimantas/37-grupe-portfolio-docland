const slider_img =document.querySelector('.slider-img');
let images = ['Col1.png', 'Col2.png','Col3.png','Col4.png','Col1.png'];
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
    
        
