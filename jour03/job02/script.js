let images = $("#game").find("img");
let result = $("p");

$("#shuffle").click(() => {
  images.sort(() => Math.random() - 0.5);
  $("#game").append(images);
});

$("#reset").click(() => {
  location.reload();
});

let hitCount = 0;
let countError = 0;
let x = 7;

for (let i = 1; i <= 6; i++) {
  $(`#${i}`).click(() => {
    $("#" + i).css("display", "none");
    $("#" + x++).attr("src", $("#" + i).attr("src"));

    hitCount++;

    let check_1 = $("#" + (i + 7)).attr("id");
    let check_2 = $("#" + x).attr("id");

    if (check_1 != check_2) {
      countError++;
    }
    if (hitCount == 6) {
      if (countError) {
        result.text("Vous avez PERDU");
        result.css({ color: "red", textAlign: "center" });
      } else {
        result.css({ color: "green", textAlign: "center" });
        result.text("Vous avez GAGNE");
      }
    }
  });
}
