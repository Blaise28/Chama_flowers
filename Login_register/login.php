<?php
require "signup.php";
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Se connecter</title>
  <link rel="stylesheet" href="login.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.css">
    <script src="https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.js"></script>
  <!-- <script src="firebase.js" async type="module"></script> -->
</head>

<body>
  <main class="cont_forms">
    <div class="change_btns">
      <button class="title_login active">Se connecter</button>
      <button class="title_register">S'inscrirer</button>
    </div>
    <form action="login.php" class="login" method="POST">
      <input name="login_email" type="text" placeholder="Adresse electronique" required />
      <input name="login_password" type="password" placeholder="Mot de passe" required />
      <input name="btn_login" type="submit" class="btn_login" value="Se connecter" />
      <?php
        if($errors_login!== null){
          ?>
          <script>
            const notyf = new Notyf({
            duration: 3000,
            position: {
              x: 'right',
              y: 'top',
            }
          });
          notyf.error("<?php echo $errors_login ?>");
          </script>
          <?php
        }
      ?>
      <a href="#" class="find_new_pswd">Mot de passe oublie</a>
    </form>
    <form action="login.php" class="register hide" method="POST">
      <?php
      $leng_errors = count($errors);
      if ($leng_errors > 0) {
        foreach ($errors as $key => $value) {
        ?>
        <script>
          const notyf = new Notyf({
            duration: 0,
            position: {
              x: 'right',
              y: 'top',
            }
          });
          notyf.error("<?php echo $value ?>");
        </script>
          
        <?php
        }
      }

      ?>
      <input name="user_name" type="text" placeholder="Nom d'utilisateur" required />
      <input name="email" type="email" placeholder="Votre e-mail" required />
      <input name="tel" type="tel" placeholder="Numero de telephone" required />
      <input name="pswd" type="password" placeholder="Mot de passe" required />
      <input name="conf_pswd" type="password" placeholder="Retaper le mot de passe" required />
      <button class="btn_register" name="btn_register"> s'inscrirer</button>
    </form>
  </main>
</body>
<script>
  const title_login = document.querySelector(".title_login");
  const title_register = document.querySelector(".title_register");
  const login = document.querySelector(".login");
  const register = document.querySelector(".register");
  title_login.addEventListener("click", (e) => {
    if (!e.target.classList.contains("active")) {
      e.target.classList.add("active");
      title_register.classList.remove("active");

      login.classList.remove("hide");
      register.classList.add("hide");
    }
  })
  title_register.addEventListener("click", (e) => {
    if (!e.target.classList.contains("active")) {
      e.target.classList.add("active");
      title_login.classList.remove("active");

      register.classList.remove("hide");
      login.classList.add("hide");
    }
  })
</script>

</html>