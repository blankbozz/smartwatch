var blackColor = document.getElementById("color-1");
var redColor = document.getElementById("color-2");
var purpleColor = document.getElementById("color-3");
var pinkColor = document.getElementById("color-4");
var watchImg = document.querySelector(".watch");

blackColor.addEventListener("click", function () {
    watchImg.src = "black-watch.png";
    watchImg.alt = "black-watch";
});

redColor.addEventListener("click", function () {
    watchImg.src = "red-watch.png";
    watchImg.alt = "red-watch";
});

purpleColor.addEventListener("click", function () {
    watchImg.src = "purple-watch.png";
    watchImg.alt = "purple-watch";
});

pinkColor.addEventListener("click", function () {
    watchImg.src = "pink-watch.png";
    watchImg.alt = "pink-watch";
});