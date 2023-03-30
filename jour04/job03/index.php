<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="../../jquery-3.6.4.min.js"></script>
    <script src="script.js" defer></script>
    <title>Document</title>
</head>

<body>
    <form>
        <input type="text" id="id" placeholder="ID">
        <input type="text" id="nom" placeholder="Nom">
        <select id="type">
            <option>Choisir un type</option>
            <option>Fire</option>
            <option>Flying</option>
            <option>Grass</option>
            <option>Ground</option>
            <option>Bug</option>
            <option>Dragon</option>
            <option>Electric</option>
            <option>Fairy</option>
            <option>Fighting</option>
            <option>Ghost</option>
            <option>Ice</option>
            <option>Normal</option>
            <option>Poison</option>
            <option>Psychic</option>
            <option>Rock</option>
            <option>Steel</option>
            <option>Water</option>
        </select>
        <input type="button" id="filtrer" value="filtrer">
    </form>

    <table>
        <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>HP</th>
            <th>Attack</th>
            <th>Defense</th>
            <th>Sp. Attack</th>
            <th>Sp. Defense</th>
            <th>Speed</th>
        </thead>
        <tbody id="resultat">
        </tbody>
    </table>

</body>

</html>