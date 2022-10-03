<?php
    session_start();
    require "../classes/user.php";
    $errors = array();
    $errors_login = null;
    // if button s'inscrire clicked
    if(isset($_POST["btn_register"])){
        $user_name = $_POST["user_name"];
        $email = $_POST["email"];
        $number = $_POST["tel"];
        $password = $_POST["pswd"];
        $conf_password = $_POST["conf_pswd"];

        if($password !== $conf_password){
            $errors["password"] = "Confirmation password incorrect";
        }

        $query_statement = select("select email from user");
        if($query_statement->rowCount() >0){
            $errors["email"] = "your email is already exist";
        }

        if(count($errors) === 0){
            $user = new User($user_name,$email,$number,$password);
            $val = $user->insert();

            $otp = random_int(1000,99999);

            $_SESSION["otp"] = $otp;
            $_SESSION["user_name"] = $user->get_user_name();
            $_SESSION["mail"] = $user->get_mail();
            
            $rep_mail = $user->send_mail(
                "Code de verification",
                "code:$otp"
            );
            if($rep_mail){
            ?>
                <script>
                    window.location.replace("otp_form.php");
                </script>
            <?php
            }
        }
    } 

    //if button se connecter clicked
    if(isset($_POST["btn_login"])){
        $email = $_POST["login_email"];
        $password = $_POST["login_password"];

        $query = "select * from user where email='{$email}'";
        $user = select($query);
        if($user->rowCount() === 0){
            $errors_login = "Adresse email ou Mot de passe incorrect";
        }
        else{
            $query = "select password from user where email='{$email}'";
            $hash = select($query)->fetch();
            if(password_verify($password,$hash["password"])){
                $user_info = $user->fetch();

                $_SESSION["user_info"] = $user_info;
                header("Location: ../index.php");  
            }else{
                $errors_login = "Mot de passe incorrect";
            }
        }
    }
?>