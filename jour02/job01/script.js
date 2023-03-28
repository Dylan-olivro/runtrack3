document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("button");

  function citation() {
    const article = document.getElementById("citation");
    console.log(article.innerHTML);
  }
  btn.addEventListener("click", citation);
});
