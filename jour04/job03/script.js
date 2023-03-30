let button = document.querySelector("#filtrer");
let id = document.querySelector("#id");
let nom = document.querySelector("#nom");
let type = document.querySelector("#type");
let filtrer = document.querySelector("#filtrer");
let resultat = document.querySelector("#resultat");

button.addEventListener("click", (event) => {
  event.preventDefault();

  fetch("pokemon.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let idValue = id.value;
      let nomValue = nom.value;
      let typeValue = type.value;
      let result = data.filter((pokemon) => {
        console.log(pokemon.base);
        if (idValue !== "" && pokemon.id !== parseInt(idValue)) {
          return false;
        }
        if (
          nomValue !== "" &&
          pokemon.name.french.toLowerCase() !== nomValue.toLowerCase()
        ) {
          return false;
        }
        if (
          typeValue !== "Choisir un type" &&
          !pokemon.type.includes(typeValue)
        ) {
          return false;
        }
        return true;
      });

      resultat.innerHTML = `<table>
                  ${result
                    .map((pokemon) => {
                      return `<tr>
                          <td>${pokemon.id}</td>
                          <td>${pokemon.name.french}</td>
                          <td>${pokemon.type}</td>
                          <td>${pokemon.base.HP}</td>
                          <td>${pokemon.base.Attack}</td>
                          <td>${pokemon.base.Defense}</td>
                          <td>${pokemon.base["Sp. Attack"]}</td>
                          <td>${pokemon.base["Sp. Defense"]}</td>
                          <td>${pokemon.base.Speed}</td>
                      </tr>`;
                    })
                    .join("")}
                  </table>`;
    })
    .catch((error) => {
      console.log(error);
    });
});
