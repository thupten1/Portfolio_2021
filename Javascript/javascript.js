// let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let berg = document.getElementById("berg");
let thup = document.getElementById("thup");
let text = document.getElementById("text");
let textt = document.getElementById("textt");


window.addEventListener('scroll', function(){
    var value = window.scrollY;
    // bg.style.top = value * 0.5 + "px";
    moon.style.left = -value * 0.5 + "px";
    berg.style.top = value * 0.15 + "px";
    text.style.top = value * 1 + "px";
    textt.style.top = value * 1 + "px";

})
function openNav() {
document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
document.getElementById("myNav").style.height = "0%";
}

document.getElementById("artiestbranding").onclick = function () {
    location.href = "../artiestbranding.html";
};
