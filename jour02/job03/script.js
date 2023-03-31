const btn = document.getElementById("button");
const count = document.getElementById("count");

function addone() {
  count.textContent++;
  console.log("click");
}

btn.addEventListener("click", addone);
