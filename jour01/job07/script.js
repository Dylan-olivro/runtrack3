// console.log("Hello Javascript !");
// console.log(joursemaines);
let yourDate = new Date("4 january 2020");

jour = yourDate.getDate();
mois = yourDate.getMonth();
annee = yourDate.getFullYear();

// console.log(jour);
// console.log(mois);
// console.log(annee);
// console.log(yourDate);

let month = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "aout",
  "septembre",
  "octobre",
  "novembre",
  "decembre",
];

function jourtravaille(yourDate) {
  if (
    (jour == 1 && mois == 0 && annee == 2020) ||
    (jour == 13 && mois == 3 && annee == 2020) ||
    (jour == 1 && mois == 4 && annee == 2020) ||
    (jour == 8 && mois == 4 && annee == 2020) ||
    (jour == 21 && mois == 4 && annee == 2020) ||
    (jour == 1 && mois == 5 && annee == 2020) ||
    (jour == 14 && mois == 6 && annee == 2020) ||
    (jour == 15 && mois == 7 && annee == 2020) ||
    (jour == 1 && mois == 10 && annee == 2020) ||
    (jour == 11 && mois == 10 && annee == 2020) ||
    (jour == 25 && mois == 11 && annee == 2020)
  ) {
    console.log(`Le ${jour} ${month[mois]} ${annee} est un jour férié`);
  } else if (yourDate.getDay() == 6 || yourDate.getDay() == 0) {
    console.log(`Non, ${jour} ${month[mois]} ${annee} est un Week-end`);
  } else {
    console.log(`Oui, ${jour} ${month[mois]} ${annee} est un jour travaillé`);
  }
}
jourtravaille(yourDate);

// // jourtravaille(date);
// console.log("Le", date, "lol");
