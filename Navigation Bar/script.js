let bar = document.getElementById("bar");
let closeMenu = document.getElementById("close");
let menu = document.getElementById("menu");
let body = document.querySelector("body");
// click on bar and run function called showMenu
bar.addEventListener("click", showMenu);
// click on closeMenu and run function called hideMenu
closeMenu.addEventListener("click", hideMenu);
function showMenu() {
    menu.classList.add("show-menu");
    body.classList.add("stuck-scroll");
}
function hideMenu() {
    menu.classList.remove("show-menu");
    body.classList.remove("stuck-scroll");
}