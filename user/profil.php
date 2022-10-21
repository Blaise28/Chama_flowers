<?php 
    $user = $_SESSION["user_info"];
?>


<div class="cont_profil">
    <?php
    require "panier/panier.php";
    ?>
    <div class="action">
        <div class="profile" onclick="menuToggle();">
            <i class="fa-regular fa-user"></i>
        </div>
        <div class="menu">
            <h3>
                <?= $user[1]?>
            </h3>
            <ul>
                <li>
                <i class="fa-light fa-pen-to-square"></i>
                    <a href="#">Edit profil</a>
                </li>
                <li>
                <i class="fa-light fa-grid-horizontal"></i>
                    <a href="user/dashboard/dashboard.php">Dashboard</a>
                </li>
                <li>
                    <a href="user/logout.php" class="logout">Logout</a>
                </li>
            </ul>
        </div>
    </div>
</div>
<script>
    function menuToggle(){
        const toggleMenu = document.querySelector('.menu');
        toggleMenu.classList.toggle('active')
    }
    
</script>