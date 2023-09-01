const navToggler = document.querySelector(".navbar-toggler");
const overlayMenu = document.querySelector(".overlay-menu");

navToggler.onclick = function () {
  overlayMenu.classList.toggle("active");
};


