<?php
require "../../classes/db.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="email_input.css">
   
</head>
<body>
<main class="container">
    <div class="card">
        <div class="header">Recuperation du mot de passe</div>
        <div class="body">
            <form action="" method="POST">
                <div class="cont_input">
                    <label for="#pswrd">New password</label>
                    <input type="password" id="pswrd" name="password">
                </div>
                <button type="submit" name="submit">Reinitialiser</button>
            </form>
        </div>
    </div>
    <?php
    if(isset($_POST["submit"])){
        $password = $_POST["password"];
        $hash = password_hash($password,PASSWORD_BCRYPT);
        $email = $_GET["password"];
        var_dump($email);
        $query = "update user set password = '$hash' where email = '$email'";
        $rep = update($query);
        var_dump($email,$rep);
        if($rep){
            ?>
            <script>
                window.location.replace("../login.php");
            </script>
            <?php
        }
    }
    ?>
</main>
</body>
</html>