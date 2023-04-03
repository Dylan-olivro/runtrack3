/* MENU */
const menu = document.getElementById("nav");
const menuBurger = document.getElementById("burger");

menuBurger.addEventListener("click", function () {
  if (menu.style.display == "none") {
    menu.style.display = "";
  } else {
    menu.style.display = "none";
  }
});
window.onload = function () {
  let ww = window.innerWidth; // en

  if (ww > 768) {
    menu.style.display = "";
  } else {
    menu.style.display = "none";
  }
  if (ww > 768) {
    menuBurger.style.display = "none";
  } else {
    menuBurger.style.display = "";
  }
};

// au redimensionnement de la fenêtre
window.onresize = function () {
  // on teste la largeur de la fenêtre
  let ww = window.innerWidth;
  if (ww > 768) {
    menu.style.display = "";
  } else {
    menu.style.display = "none";
  }
  if (ww > 768) {
    menuBurger.style.display = "none";
  } else {
    menuBurger.style.display = "";
  }
};
