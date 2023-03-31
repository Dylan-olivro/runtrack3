let nom = document.querySelector("#nom");
let prenom = document.querySelector("#prenom");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let cpassword = document.querySelector("#cpassword");
let p = document.querySelector("p");
let formSignUp = document.querySelector("#signup");
let login = document.querySelector("#login");

function isSignUp() {
  if (nom.value == "") {
    document.getElementById("message").innerText = "Champ Nom Vide";
    return false;
  } else if (nom.value.length > 15) {
    document.getElementById("message").innerText = "nom trop long";
    return false;
  } else if (prenom.value == "") {
    document.getElementById("message").innerText = "Champ Prenom Vide";
    return false;
  } else if (email.value == "") {
    document.getElementById("message").innerText = "Champ Email Vide";
    return false;
  } else if (password.value == "") {
    document.getElementById("message").innerText = "Champ Password Vide";
    return false;
  } else if (cpassword.value == "") {
    document.getElementById("message").innerText =
      "Champ Confirme Password Vide";
    return false;
  } else if (password.value !== cpassword.value) {
    document.getElementById("message").innerText = "Mot de passe different";
    return false;
  } else {
    return true;
  }
}

formSignUp.addEventListener("submit", (e) => {
  if (isSignUp() == false) {
    e.preventDefault();
  }
});
