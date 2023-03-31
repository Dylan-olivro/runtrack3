// console.log("Hello Javascript !");
// console.log(joursemaines);
let date = new Date("4 january 2020");

jour = date.getDate();
mois = date.getMonth();
annee = date.getFullYear();

// console.log(jour);
// console.log(mois);
// console.log(annee);
// console.log(date);

let arrayMonth = [
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

function jourtravaille(date) {
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
    console.log(`Le ${jour} ${arrayMonth[mois]} ${annee} est un jour férié`);
  } else if (date.getDay() == 6 || date.getDay() == 0) {
    console.log(`Non, ${jour} ${arrayMonth[mois]} ${annee} est un Week-end`);
  } else {
    console.log(`Oui, ${jour} ${arrayMonth[mois]} ${annee} est un jour travaillé`);
  }
}
jourtravaille(date);

// // jourtravaille(date);
// console.log("Le", date, "lol");
