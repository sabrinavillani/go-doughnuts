// Menu Functionality
function openMenu() {
  const menu = document.querySelector(".dropdown");
  menu.classList.remove("dropdown--hidden");
  document.querySelector(".burger-menu-button").style.opacity = 0;
}

function hideMenu() {
  const menu = document.querySelector(".dropdown");
  menu.classList.add("dropdown--hidden");
  document.querySelector(".burger-menu-button").style.opacity = 1;
}

document
  .querySelector(".burger-menu-button")
  .addEventListener("click", openMenu);

document.querySelector(".dropdown-close").addEventListener("click", hideMenu);

