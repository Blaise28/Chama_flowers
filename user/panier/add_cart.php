<?php
    session_start();
    $product = array();
    if(isset($_POST["add_into_cart"])){
        $id_flower  = $_POST["id_flower"];
        $quantity = $_POST["quantity"];

        $values = array($id_flower,$quantity);
        array_push($product,$values);
        $_SESSION["products"] = $product;
    }
    var_dump($_SESSION["products"]);
?>