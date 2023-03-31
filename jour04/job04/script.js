function updateUsers() {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var users = JSON.parse(this.responseText);
      var tbody = document.getElementById("users-table-body");
      tbody.innerHTML = "";

      for (var i = 0; i < users.length; i++) {
        var tr = "<tr>";
        tr += "<td>" + users[i].prenom + "</td>";
        tr += "<td>" + users[i].nom + "</td>";
        tr += "<td>" + users[i].email + "</td>";
        tr += "</tr>";
        tbody.innerHTML += tr;
      }
    }
  };

  xmlhttp.open("GET", "users.php", true);
  xmlhttp.send();
}
