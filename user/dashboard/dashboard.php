<!DOCTYPE html>
<html lang="en">
<head>
    <?php 
    session_start();
    ?>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tableau de bord</title>
    <link rel="stylesheet" href="dashboard.css">
    <?php
        require "../../classes/db.php";
        require "../../classes/flower.php";

        require '../../essential/favicon.php';
        require '../../essential/font_awesome.php';
        require '../../essential/notyf.php';
    ?>
    <script src="dashboard.js" type="module" defer></script>

    <!-- modal add flowers -->
    <?php require "html/modal_add_flower.php" ?>
    <!-- modal choice -->
    

</head>
<body>
    <main class="dashboard">
        <div class="navbar">
            <div class="logo">
                <img src="../../logos/logo_chama_flowers.svg" alt="">
            </div>

            <nav-dash class="nav_dash">
                <a href="#flowers" aria-selected="true">Fleurs</a>
            </nav-dash>
        </div>
        
        <section class="container">
            <div class="onglet flower">
                <div class="add_flower_nav">
                    <a href="#modal_add_flower" class="btn_add open_modal_add_flower">Ajouter les fleurs</a>
                </div> 
                <div class="container_onglet">
                    <?php require "html/table.php" ?>
                </div>
            </div> 
        </section>
    </main>
    

    <!-- <script src="dashboard.js" type="module" defer></script> -->
</body>
</html>