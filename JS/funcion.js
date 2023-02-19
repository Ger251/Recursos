const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider-section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];
const btnLeft = document.querySelector("#btn-left");
const btnRigth = document.querySelector("#btn-rigth");


slider.insertAdjacentElement('afterbegin',sliderSectionLast);


function MoverDer(){
    let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend",sliderSectionFirst);
        slider.style.marginLeft = "-100%"
    } , 500) ;
}

btnRigth.addEventListener('click', function(){
    MoverDer();
} );

function MoverIzq(){

    let sliderSection = document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin',sliderSectionLast)
        slider.style.marginLeft = "-100%"
    } , 500) ;
}
btnLeft.addEventListener('click', function(){
    MoverIzq();
} );

setInterval(function(){
    MoverDer;
},5000);


