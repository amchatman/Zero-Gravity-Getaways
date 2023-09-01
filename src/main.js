//Toggles the overlary menu on click
const navToggler = document.querySelector(".navbar-toggler"); // class on button
const overlayMenu = document.querySelector(".overlay-menu");  //div container class for unorderlist

navToggler.onclick = function () {
  overlayMenu.classList.toggle("active");
};


