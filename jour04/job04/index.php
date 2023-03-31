<!DOCTYPE html>
<html>

<head>
    <title>Tableau des utilisateurs</title>
</head>

<body>

    <!-- Tableau HTML pour afficher les utilisateurs -->
    <table>
        <thead>
            <tr>
                <th>Prénom</th>
                <th>Nom</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody id="users-table-body">

        </tbody>
    </table>

    <!-- Bouton pour mettre à jour le tableau -->
    <button onclick="updateUsers()">Update</button>

    <!-- Script pour mettre à jour le tableau en utilisant AJAX -->
    <script src="./script.js"></script>

</body>

</html>