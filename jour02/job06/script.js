const array = [
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

let count = 0;

document.addEventListener("keydown", (event) => {
  console.log(event.key);
  if (event.key === array[count]) {
    count++;

    if (count === array.length) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "style.css";
      const head = document.querySelector("head");
      head.appendChild(link);
    }
  } else {
    count = 0;
  }
});
