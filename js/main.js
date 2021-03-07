const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header__nav ul");

hamburger.addEventListener("click", function(item) {
    this.classList.toggle("open");
    nav.classList.toggle("open");
})