const mobMenu = document.querySelector(".mob-menu");
const mobMenuBtnOpen = document.querySelector(".mob-menu-btn-open");
const mobMenuBtnClose = document.querySelector(".mob-menu-btn-close");

const toggleMenu = () => mobMenu.classList.toggle("is-open");

mobMenuBtnOpen.addEventListener("click", toggleMenu);
mobMenuBtnClose.addEventListener("click", toggleMenu);
