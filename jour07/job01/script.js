let reboot = document.getElementById("reboot");

reboot.addEventListener("click", () => {
  let citations = [
    "Tous ces moments se perdront dans l'oubli, comme des larmes dans la pluie.",
    "Avez-vous déjà désactivé un humain par erreur ?",
    "C'est dommage qu'elle doive mourir, mais on en est tous là !",
    "T'endors pas, c'est l'heure de mourir.",
    "J'ai vu tant de choses, que vous, humains, ne pourriez pas croire...<br> De grands navires en feu surgissant de l'épaule d'Orion, j'ai vu des rayons fabuleux,<br> des rayons C, briller dans l'ombre de la Porte de Tannhaüser. <br>Tous ces moments se perdront dans l'oubli, comme les larmes dans la pluie. Il est temps de mourir.",
  ];
  let random = Math.floor(Math.random() * citations.length);
  document.getElementById("citation").innerHTML = citations[random];
});

// -----------------------------------------------------------------------------

let jumbotron_contenu = document.getElementById("jumbotron_contenu");

$("#page1").click(() => {
  jumbotron_contenu.innerHTML =
    "Ils existent plusieurs visions du terme : <br />le monde est la matière, l'espace et les phénomènes qui nous sont accessibles par les sens, l'expérience ou la raison.<br /> Le sens le plus courant désigne notre planète, la Terre, avec ses habitants, et son environnement plus ou moins naturel.";
});
$("#page2").click(() => {
  jumbotron_contenu.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend orci ante, et bibendum mi accumsan at. Sed aliquet risus nunc, sed accumsan dolor aliquam eu. Fusce gravida mollis dignissim. Vivamus porttitor nunc tellus, sit amet accumsan lorem egestas a. Fusce velit nibh, pellentesque vitae scelerisque non, vulputate ac magna.";
});
$("#page3").click(() => {
  jumbotron_contenu.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pulvinar ante vitae nulla laoreet maximus. Proin volutpat enim tempor condimentum commodo. Aenean semper non libero ut viverra. Ut consectetur rutrum lorem non malesuada. Nam euismod nisi sollicitudin, commodo ante sit amet, ornare felis. Mauris ipsum nunc, dictum blandit convallis quis.";
});

// ----------------------------------------------------------------------------------------------
let list = document.getElementById("listDiv");
let listLink = list.getElementsByClassName(
  "list-group-item list-group-item-action"
);
for (let i = 0; i < listLink.length; i++) {
  listLink[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
// --------------------------------------------------------------------------------------------------
let bar = document.getElementById("progressBar");
$("#leftBtn").click(() => {
  bar.style.width = parseInt(bar.style.width) - 10 + "%";
});
$("#rightBtn").click(() => {
  bar.style.width = parseInt(bar.style.width) + 10 + "%";
});
// -----------------------------------------------------------------------------------
const array = ["d", "g", "c"];

let count = 0;

document.addEventListener("keydown", (event) => {
  console.log(event.key);
  if (event.key === array[count]) {
    count++;

    if (count === array.length) {
      const modal = document.createElement("div");
      console.log(modal);
      modal.innerHTML = `<div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Confirmation
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">Achat de votre papillon</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="button" class="btn btn-primary">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
      //   link.rel = "stylesheet";
      //   link.href = "style.css";
      alert("ok");
      const head = document.querySelector("head");
      document.append(modal);
    }
  } else {
    count = 0;
  }
});
