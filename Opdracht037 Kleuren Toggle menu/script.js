
const hamburger = document.querySelector('#hamburger');
const colorMenu = document.querySelector('#menu');
const home = document.querySelector('#home');
const red = document.querySelector('#red');
const orange = document.querySelector('#orange');
const purple = document.querySelector('#purple');
const green = document.querySelector('#green');

// Hide Menu

function toggleMenu() {
    colorMenu.classList.toggle('hidden');
};

// Color Background

function makeBackgroudColor(color){
    alert (color);
    document.body.style.backgroundColor = color;
    toggleMenu();
};

// Menu toggle

hamburger.addEventListener('click', toggleMenu); 
hamburger.addEventListener("mouseover", toggleMenu);
home.addEventListener('click', makeBackgroudColor(gray));
red.addEventListener('click', makeBackgroudColor(red));
orange.addEventListener('click', makeBackgroudColor(orange)); 
purple.addEventListener('click', makeBackgroudColor(purple)); 
green.addEventListener('click', makeBackgroudColor(green)); 


