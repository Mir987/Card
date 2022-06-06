import './style.css'

let cardglare = document.querySelector('#card_glare');
let shadow = document.querySelector('#shadow');
let glare = document.querySelector('#glare');
let box = document.querySelector('#box');
let cardSpeed = 4;      // speed of the card rotation on scroll (low value = hi speed)

window.onload = resetScroll;

window.addEventListener("resize", event => {
    resetScroll();
});

window.addEventListener("scroll", event => {
    let i;
    let scrollVal = parseInt(window.scrollY);
    i = scrollVal / cardSpeed;

    if(i <= 29){
        cardglare.style = "transform: rotateX(" + (i * 2.5) + "deg)";
        // shadow.style = "transform: translateX(-50%) rotateX(" + (i * 2.5) + "deg); width:" + (50 + (i * 0.833)) + "%; bottom: " + (15 + (i * 0.233)) + "%; opacity:" + (0.8 - (i * 0.02));
        shadow.style = "transform: translateX(-50%) rotateX(" + (i * 2.5) + "deg); width:" + (50 + (i * 0.833)) + "%; bottom: " + (15 + (Math.pow(i/5, 2))) + "%; opacity:" + (0.8 - (i * 0.02));
        console.log((Math.pow(i/2, 2)));
        glare.style = "transform: translate(-50%," + (-100 + (i * 5)) + "%); width:" + (30 + i) + "%; height:" + 300 + "px";
        // box.style = "transform: translateY(" + (i * -7) + "px)";
        if(window.innerWidth < 576){
            box.style = "transform: translateY(" + (-(Math.pow(i/3, 2))) + "px)";
        }else{
            box.style = "transform: translateY(" + (-(Math.pow(i/2, 2))) + "px)";
        }
    }
});

function resetScroll(){
    setTimeout(function(){
        if (window.scrollY !== 0) {
            window.scroll(0, 0);
        }
    })
}