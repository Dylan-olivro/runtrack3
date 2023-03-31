let nom = document.querySelector("#nom");
let prenom = document.querySelector("#prenom");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let cpassword = document.querySelector("#cpassword");
let p = document.querySelector("p");
let formSignUp = document.querySelector("#signup");
let login = document.querySelector("#login");

function isLogin() {
  if (email.value == "") {
    document.getElementById("message").innerText = "Champ email Vide";
    return false;
  } else if (password.value == "") {
    document.getElementById("message").innerText = "Champ password Vide";
    return false;
  } else {
    return true;
  }
}
login.addEventListener("submit", (e) => {
  if (isLogin() == false) {
    e.preventDefault();
  }
});
