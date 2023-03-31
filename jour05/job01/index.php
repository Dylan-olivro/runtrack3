<?php
session_start();
require("bd.php");

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <header>
        <nav>
            <a href="index.php">index</a>
            <a href="inscription.php">inscription</a>
            <a href="connexion.php">connexion</a>
            <a href="disconnect.php">Deconnexion</a>
        </nav>
    </header>
    <?php
    if (isset($_SESSION['id']) == null) {
        echo '<p>Bonjour Inconnu</p>';
    } else {
        echo '<p>Bonjour ' . $_SESSION['nom'] . '</p>';
    }
    // var_dump($_SESSION);
    ?>
</body>

</html>