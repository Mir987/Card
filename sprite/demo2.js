import './style.css'

let cardglare = document.querySelector('#card_glare');
let shadow = document.querySelector('#shadow');
let glare = document.querySelector('#glare');
let Dspeed = 8;      // speed of the animation on scroll (low value = hi speed) Ex: 8 = desktop, 5.5 = mobile
let Mspeed = 5.5;

window.onload = resetScroll;

window.addEventListener("resize", event => {
    resetScroll();
});

window.addEventListener("scroll", event => {
    let i;
    let scrollVal = parseInt(window.scrollY);
    if(window.innerWidth >= 576){
        i = scrollVal / Dspeed;
    }else{
        i = scrollVal / Mspeed;
    }

    if(i <= 29){
        cardglare.style = "transform: rotateX(" + (i * 2.5) + "deg)";
        shadow.style = "transform: translateX(-50%) rotateX(" + (i * 2.5) + "deg); width:" + (50 + (i * 0.833)) + "%; bottom: " + (15 + (i * 0.233)) + "%; opacity:" + (0.8 - (i * 0.02));
        glare.style = "transform: translate(-50%," + (-100 + (i * 5)) + "%); width:" + (30 + i) + "%; height:" + 300 + "px";
    }
});

function resetScroll(){
    setTimeout(function(){
        if (window.scrollY !== 0) {
            window.scroll(0, 0);
        }
    })
}