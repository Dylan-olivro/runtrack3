const json =
  '{ "name": "La Plateforme_", "address": "8 rue d\'hozier", "city": "Marseille", "nb_staff": "11","creation": "2019"}';
function JsonValueKey(json, key) {
  const jsonObj = JSON.parse(json);
  return jsonObj[key];
}

console.log(JsonValueKey(json, "address"));
