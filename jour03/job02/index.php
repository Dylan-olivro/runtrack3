<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="../jquery-3.6.4.min.js"></script>
    <title>Document</title>
</head>

<body>
    <div class="info">
        <button id="shuffle">Shuffle</button>
        <button id="reset">Reset</button>
        <p></p>
    </div>
    <section>

        <div id="debut" class="jeu">
            <img src="arc1.png" alt="" id="1">
            <img src="arc2.png" alt="" id="2">
            <img src="arc3.png" alt="" id="3">
            <img src="arc4.png" alt="" id="4">
            <img src="arc5.png" alt="" id="5">
            <img src="arc6.png" alt="" id="6">
        </div>
        <div id="fin" class="jeu">
            <img src="" alt="" id="7">
            <img src="" alt="" id="8">
            <img src="" alt="" id="9">
            <img src="" alt="" id="10">
            <img src="" alt="" id="11">
            <img src="" alt="" id="12">

        </div>
    </section>
    <script src="script.js"></script>
    <style>
        img {
            width: 75px;
        }

        section {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .info {
            text-align: center;
        }

        .jeu {
            text-align: center;
            border: 1px solid;
            width: 500px;
            height: 250px;
        }
    </style>
</body>

</html>