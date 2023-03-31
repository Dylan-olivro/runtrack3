const expression = document.querySelector("p");

let button = document.getElementById("button");
button.addEventListener("click", () => {
  fetch("expression.txt", {
    method: "GET",
  })
    .then((response) => response.text())
    .then((data) => {
      expression.innerHTML = data;
    })
    .catch((error) => alert("Erreur : " + error));
});
