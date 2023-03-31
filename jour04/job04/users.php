<?php
// Informations de connexion à la base de données MySQL
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "utilisateurs";

try {
    // Connexion à la base de données MySQL avec PDO
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

    // Configuration de PDO pour générer des exceptions en cas d'erreur
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Récupération de l'ensemble des utilisateurs
    $sql = "SELECT * FROM users";
    $stmt = $conn->query($sql);

    // Récupération des résultats dans un tableau associatif
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Conversion du tableau en JSON
    $json_users = json_encode($users);

    // Affichage du JSON
    header('Content-Type: application/json');
    echo $json_users;
} catch (PDOException $e) {
    // Affichage d'une erreur en cas d'échec de la connexion à la base de données
    die("La connexion a échoué: " . $e->getMessage());
}

// Fermeture de la connexion à la base de données
$conn = null;
