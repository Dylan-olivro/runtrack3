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
    <?php
    session_start();
    $servername = 'localhost';
    $username = 'root';
    $password = '';

    try {
        $bdd = new PDO("mysql:host=$servername;dbname=utilisateurs", $username, $password);

        $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo 'Connexion réussie';
    } catch (PDOException $e) {
        echo "Erreur : " . $e->getMessage();
    }

    $recupUser = $bdd->prepare('SELECT * FROM users');
    $recupUser->execute();
    $result = $recupUser->fetchAll(PDO::FETCH_ASSOC);
    // var_dump($result);
    $json = json_encode($result, JSON_PRETTY_PRINT);

    ?>
</body>

</html>