  const btn = document.getElementById("button");
  const article = document.createElement("article");
  article.textContent = "L'important n'est pas la chute, mais l'atterissage";

  function showhide() {
    const body = document.querySelector("body");
    body.appendChild(article);

    if (article.style.display === "none") {
      article.style.display = "block";
    } else {
      article.style.display = "none";
    }
    // if (typeof article > 0) {
    //   article.remove();
    // }
  }

  btn.addEventListener("click", showhide);
