<?php
session_start();
require "bd.php";

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
    <script src="script2.js" defer></script>
    <title>Connexion</title>
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

        <form method="POST" action="" id="login">
            <h3>Login Here</h3>
            <!-- <label for="login">Username</label> -->
            <input type="text" id="email" name="email" placeholder="Email">
            <!-- <label for="password">Password</label> -->
            <input type="password" id="password" name="password" placeholder='Password'>
            <?php

            if (isset($_POST['submit'])) {
                $email = htmlspecialchars($_POST['email']);
                $password = $_POST['password'];

                $recupUser = $bdd->prepare("SELECT * FROM utilisateurs WHERE email = ? AND password = ?");
                $recupUser->execute([$email, $password]);
                $result = $recupUser->fetch(PDO::FETCH_ASSOC);


                if ($recupUser->rowCount() > 0) {

                    $_SESSION['email'] = $email;
                    $_SESSION['password'] = $password;
                    $_SESSION = $result;
                    header("Location: index.php");
                }
            }
            ?>
            <input type="submit" name="submit" value="Log In" class="button">
        </form>
        <p id="message"></p>
    </main>

    <footer>
        <a href="https://github.com/Dylan-olivro"><i class="fa-brands fa-github"></i></a>
        <a href="https://github.com/Charles-Caltagirone"><i class="fa-brands fa-github"></i></a>
    </footer>
</body>

</html>