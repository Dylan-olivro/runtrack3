const x =
  '{ "name": "La Plateforme_", "address": "8 rue d\'hozier", "city": "Marseille", "nb_staff": "11","creation": "2019"}';
function JsonValueKey(x, key) {
  const jsonObj = JSON.parse(x);
  return jsonObj[key];
}

console.log(JsonValueKey(x, "address"));
