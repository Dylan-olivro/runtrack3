<?php
session_start();
require("bd.php");

if (isset($_SESSION['id']) != null) {
    header('Location: index.php');
}


?>
<!DOCTYPE html>
<html lang="fr" dir="ltr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="script.js" defer></script>
    <title>Inscription</title>
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

    <main>

        <form method="POST" action="" id="signup">
            <h3>Sign Up</h3>

            <!-- <label for="nom">Nom</label> -->
            <input type="text" id="nom" name="nom" placeholder="Nom">
            <!-- <label for="prenom">Prenom</label> -->
            <input type="text" id="prenom" name="prenom" placeholder="Prenom">
            <!-- <label for="login">Login</label> -->
            <input type="text" id="email" name="email" placeholder="Email">
            <!-- <label for="password">Password</label> -->
            <input type="password" id="password" name="password" placeholder="Password">
            <!-- <label for="cpassword">Confirmation</label> -->
            <input type="password" id="cpassword" name="cpassword" placeholder="Confirmation">
            <?php

            if (isset($_POST['envoi'])) {
                $nom = $_POST['nom'];
                $prenom = $_POST['prenom'];
                $email = $_POST['email'];
                $password = $_POST['password'];
                $cpassword = $_POST['cpassword'];

                $insertUser = $bdd->prepare("INSERT INTO utilisateurs (nom, prenom, email, password)VALUES(?,?,?,?)");
                $insertUser->execute([$nom, $prenom, $email, $password]);
                header("Location: inscription.php");
            }
            ?>
            <button type="submit" name="envoi" class="button" value="Sign Up" id="button">envoyer</button>
        </form>
        <p id="message"></p>
    </main>

</body>

</html>