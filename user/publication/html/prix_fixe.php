<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Finaliser la publication</title>
    <link rel="stylesheet" href="../css/prix_fixe.css">

    <?php
     ?>
</head>
<body>
    <form class="container" method="POST" action="">
        <div class="cont_input">
            <label for="price">Fixez le prix en Fbu</label>
            <input type="number" name="price" min="0" required>
        </div>
        <button type="submit" name="pub_flower">Publier</button>
    </form>
    <?php 
    require '../../../classes/fixed_price.php';
    
    if(isset($_POST["pub_flower"])){
        $price = $_POST["price"];
        $id_flower = $_GET["id_flower"];
        $price = new Fixed_price($price,$id_flower);
        $rep = $price->insert();
        if($rep === true){
            ?>
            <script>
                window.location.replace("../../dashboard/dashboard.php");
            </script>
            <?php
        }else{
            ?>
            <script>
                alert("erreur d'enregistrement");
            </script>
            <?php
        }
    }
    ?>
</body>
</html>