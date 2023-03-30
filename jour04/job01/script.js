const p = document.querySelector("p");

let button = document.getElementById("button");
button.addEventListener("click", () => {
  fetch("expression.txt", {
    method: "GET",
  })
    .then((response) => response.text())
    .then((data) => {
      p.innerHTML = data;
    })
    .catch((error) => alert("Erreur : " + error));
});
