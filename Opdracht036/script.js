/*document.addEventListener("click", function () {
    document.getElementsByClassName("btn-alert")
    alert('Button Clicked!');
});*/

/*const Butt = document.getElementById("backgroundbutton");
Butt.addEventListener("click", function () {
    Butt.classList.add("red-background");
});*/

const Butt = document.getElementById("backgroundbutton");
Butt.addEventListener("click", function () {
    Butt.classList.toggle("red-background");
});