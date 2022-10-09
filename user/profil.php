<?php 
    $user = $_SESSION["user_info"];
?>
<!-- <div class="profil">
    <div class="cont_logos">
        <div class="shop_logo">
            <i class="fa-regular fa-cart-shopping"></i>
        </div>
        <div class="img">
            <i class="fa-regular fa-user"></i>
        </div>
    </div>
    <div class="profil_info">
           <div class="link">
               <i class="fa-light fa-user-pen"></i>
           <a href="#" class="update">
                Edite votre profile
            </a>
           </div>
           <div class="link">
           <i class="fa-light fa-grid-horizontal"></i>
           <a href="user/dashboard/dashboard.php" class="dashboard">
                Tableau de bord
            </a>
           </div>
           <button type="submit" name="logout" class="logout">    
               <i class="fa-solid fa-arrow-right-from-bracket"></i>
                Deconnexion
           </button>
    </div>
</div> -->
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
                    <button type="submit" name="logout" class="logout">Logout</button>
                </li>
            </ul>
        </div>
    </div>
    <script>
        function menuToggle(){
            const toggleMenu = document.querySelector('.menu');
            toggleMenu.classList.toggle('active')
        }
    </script>

</script>