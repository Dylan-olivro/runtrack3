let p = document.createElement("p");
document.body.appendChild(p);

$("button").click(() => {
  $("p").text(
    "Les logiciels et les cathédrales, c'est un peu la même chose - d'abord on les construit, ensuite on prie."
  );
  $("p").show();
});
$("#btn").click(() => {
  $("p").hide();
});
