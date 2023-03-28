document.addEventListener("DOMContentLoaded", () => {
  const tableau = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];

  let compteur = 0;

  document.addEventListener("keydown", (event) => {
    console.log(event.key);
    if (event.key === tableau[compteur]) {
      compteur++;

      if (compteur === tableau.length) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "style.css";
        const head = document.querySelector("head");
        head.appendChild(link);
      }
    } else {
      compteur = 0;
    }
  });
});
