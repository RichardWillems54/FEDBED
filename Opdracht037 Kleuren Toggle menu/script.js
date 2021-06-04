// Declaration of constants
var idArray = ["hamburger", "menu", "home", "red", "orange", "purple", "green"];

function ConstDeclare(idArray){
    const IdArray = document.getElementById(IdArray);
    alert (idArray);
};

ConstDeclare(idArray);

showOrHideMenu(hidden);

// Menu toggle

hamburger.addEventListener("mouseover", function (){
    showOrHideMenu(visible);
});

hamburger.addEventListener("mouseleave", function () {
    showOrHideMenu(hidden);
});

hamburger.addEventListener("click", function () {
    showOrHideMenu(visible);
});

// Function Show or Hide menu

function showOrHideMenu(showorhide) {
    menu.style.visibility = showorhide;
    return;
};

// Function color the background

function makeBackgroudColor(color){
    document.body.style.backgroundColor = color;
    hideMenu(hidden);
};

// Color toggle events

function addColorEvent(MenuEvent){}
    MenuEvent.addEventListener("click", function () {
    makeBackgroudColor(MenuEvent)
    });
