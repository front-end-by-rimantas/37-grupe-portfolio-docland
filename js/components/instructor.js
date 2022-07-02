function instructor (instructorData) {

console.log(`Bal'a dash, malanore`);

const DOM = document.querySelector('#instructor-box');


let HTML = ``;
for (const item of instructorData) {
    HTML += `<div class="instruktor-box">
     <div class="zainstruktor">
     <img src="${item.picture}" alt="atlepausis">
     <div class="about-instructor">
     <h6>${item.name}</h6>
     <p>${item.occupation}</p>
     <ul>
     <li><i class="fa fa-trophy" aria-hidden="true"></i><p>${item.achievement1}</p></li>
     <li><i class="fa fa-user" aria-hidden="true"></i><p>${item.achievement2}</li>
     <li><i class="fa fa-desktop" aria-hidden="true"></i><p>${item.achievement3}</p></li>
     </ul>
     </div>
 </div>
 <p>${item.about}</p>
    </div>`
}
DOM.innerHTML = HTML;
}
export { instructor }