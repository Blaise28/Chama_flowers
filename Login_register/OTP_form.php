<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Code de verification</title>
    <link rel="stylesheet" href="otp_style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.css">
    <script src="https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.js"></script>
</head>

<body>
    <form action="OTP_form.php" method="POST">
        <label for="otp">Taper le code:</label>
        <input class="input" name="otp_input" type="text" id="otp" placeholder="ex: 0995" require>
        <input class="btn" name="check_otp" type="submit" value="Verifier">
    </form>
    
    <?php
    session_start();
    require "../classes/db.php";
    if (isset($_POST["check_otp"])) {
        $value_otp = $_POST["otp_input"];
        $otp = $_SESSION["otp"];

        if ($otp == $value_otp) {
            $_SESSION["connect"]= true;
            $email = $_SESSION["mail"];
            $user_name = $_SESSION["user_name"];

            $query ="UPDATE user
            SET code = true where email ='{$email}'" ;
        ?>
    
        <script>
            const notyf = new Notyf({
                duration:3000,
                position: {
                    x: 'right',
                    y: 'top',
                },
            });
            notyf.success("Validation reussi");
            window.location.replace("../index.php");
        </script>
        <?php
        } else {
        ?>
            <script>
            const notyf = new Notyf({
                position: {
                    x: 'right',
                    y: 'top',
                },
                duration:5000,
            });
            notyf.error("code de varidation incorrect");
            </script>
        <?php
        }
    }
    ?>
</body>

</html>