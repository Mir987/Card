import './style.css'

let fake = document.querySelector('#fake');
let spritebox = document.querySelector('#spritebox');
let spritebox2 = document.querySelector('#spritebox2');
let h;
let Dspeed = 8;      // speed of the animation on scroll (low value = hi speed) Ex: 8 = desktop, 5.5 = mobile
let Mspeed = 5.5;
let adjust = 0.998;  // adjustment factor (if bigger = image tends to go higher)
// let k = 0;

window.onload = resetScroll;

window.addEventListener("resize", event => {
    spritebox.style.height = h + "px";
    resetScroll();
});

window.addEventListener("scroll", event => {
    // k = k + 1;
    let i;
    let scrollVal = parseInt(window.scrollY);
    if(window.innerWidth >= 576){
        i = Math.ceil(scrollVal / Dspeed);
    }else{
        i = Math.ceil(scrollVal / Mspeed);
    }

    // console.log(i * 231.75, " | ", i * h, "|", h, "|", k);
    if(i <= 29){
        spritebox2.style.backgroundPosition = "0px " + i * h * adjust + "px";
    }
});

function resetScroll(){
    h = - fake.clientHeight;
    setTimeout(function(){
        if (window.scrollY !== 0) {
            window.scroll(0, 0);
        }
    })
}
