<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;
    
    require "../../lib/php_mailer/PHPMailer.php";
    require "../../lib/php_mailer/Exception.php";
    require "../../lib/php_mailer/SMTP.php";
    
    
    function send_mail($subject, $message,$email,$username='')
        {
            $rep = null;
            $mail = new PHPMailer(true);
            
            try {
                //Server settings
                // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
                $mail->isSMTP();                                            //Send using SMTP
                $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
                $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
                $mail->Username   = 'jrueholiday22@gmail.com';                  //SMTP username
                $mail->Password   = 'tukdsnwynjkicvar';                               //SMTP password
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
                $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
            
                //Recipients
                $mail->setFrom('jrueholiday22@gmail.com', 'Chama_flowers');
                $mail->addAddress($email,$username);     //Add a recipient            
            
                //Content
                $mail->isHTML(true);                                  //Set email format to HTML
                $mail->Subject = $subject;
                $mail->Body    = $message;
            
                if(! $mail->send()){
                    $rep = false;
                }
                else{
                    $rep = true;
                }
            } catch (Exception $e) {
                // var_dump($mail->ErrorInfo);
                
            }
            return $rep;
        }
    require '../../classes/db.php';
    $host = $_SERVER;
    // var_dump($host);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="email_input.css">
    <?php require "../../essential/notyf.php" ?>
</head>
<body>
    <main class="container">
        <div class="card">
            <div class="header">Recuperation du mot de passe</div>
            <div class="body">
                <form action="" method="POST">
                    <div class="cont_input">
                        <label for="#email">Adresse email</label>
                        <input type="email" id="email" name="email">
                    </div>
                    <button type="submit" name="submit">Valider</button>
                </form>
            </div>
        </div>
        <?php 
        if(isset($_POST["submit"])){
            $email = $_POST["email"];
            $rep = verify_user($email);
            if($rep->rowcount()>0){
                $subject = "Recuperer votre mot de passe";
                echo "http://localhost/chama_flowers/login_register/forget_password/new_password.php?password=$email";
                $message = "<h3>Le lien de recuperation:</h3><br>
                <a href='http://localhost/chama_flowers/login_register/forget_password/new_password.php?password=$email'>
                    Reinititialiser votre mot de passe
                </a>";
                $rep = send_mail($subject,$message,$email);
                if($rep){
                    ?>
                    <script>
                        window.location.replace("success.html");
                    </script>
                    <?php
                    $_SESSION["email"] = $email;
                }
                
            }
            else{
                ?>
                <script>
                    const notyf = new Notyf({
                        duration: 3000,
                        position: {
                        x: 'right',
                        y: 'top',
                        }
                    });
                    notyf.error("<?= "Verifier votre adresse email" ?>");
                </script>
                <?php
            }
        }
        ?>
    </main>
</body>
</html>
