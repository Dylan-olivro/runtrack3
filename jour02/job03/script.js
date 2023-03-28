document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("button");
  const p = document.getElementById("compteur");

  function addone() {
    p.textContent++;
    console.log("click");
  }

  btn.addEventListener("click", addone);
});
