let images = $("#debut").find("img");
// console.log(images);
$("#shuffle").click(() => {
  images.sort(() => Math.random() - 0.5);
  $("#debut").append(images);
});

$("#reset").click(() => {
  location.reload();
});

let compteur = 0;
let erreur = 0;
let x = 7;

for (let i = 1; i <= 6; i++) {
  $(`#${i}`).click(() => {
    console.log(i);
    // let imagesSrc = $("#" + i).attr("src");
    $("#" + i).css("display", "none");
    $("#" + x++).attr("src", $("#" + i).attr("src"));

    compteur++;

    let verif1 = $("#" + (i + 7)).attr("id");
    let verif2 = $("#" + x).attr("id");
    // console.log(verif2);
    // console.log(x);

    if (verif1 != verif2) {
      erreur++;
    }

    if (compteur == 6) {
      if (erreur) {
        $("p").text("Vous avez PERDU");
        $("p").css({ color: "red", textAlign: "center" });
      } else {
        $("p").css({ color: "green", textAlign: "center" });
        $("p").text("Vous avez GAGNE");
      }
    }
  });
}
