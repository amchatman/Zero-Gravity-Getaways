//Toggles the overlary menu on click
const navToggler = document.querySelector(".navbar-toggler"); // class on button
const overlayMenu = document.querySelector(".overlay-menu");  //div container class for unorderlist

const navClose = document.querySelector(".closebtn");

navToggler.onclick = function () {
  overlayMenu.classList.toggle("active");
};
navClose.onclick = function (){
  overlayMenu.classList.toggle("close");
}

