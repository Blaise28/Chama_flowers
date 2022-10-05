<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require "db.php";
require "../lib/php_mailer/PHPMailer.php";
require "../lib/php_mailer/Exception.php";
require "../lib/php_mailer/SMTP.php";

class User
{
    private $user_name;
    private $email;
    private $number;
    private $password;
    private $type;

    public function __construct($user_name, $email, $number, $password,$type)
    {
        $this->user_name = $user_name;
        $this->email = $email;
        $this->number = $number;
        $this->type = $type;
        $this->password = password_hash($password, PASSWORD_BCRYPT);
    }

    public function select()
    {
        $query = "select * from user";
        $rep = select($query);
        return $rep;
    }
    public function get_user_name(){
        return $this->user_name;
    }
    public function get_mail(){
        return $this->email;
    }
    public function get_number(){
        return $this->number;
    }
    public function insert()
    {
        $query = "insert into user(user_name,email,number,password,type) 
            values('{$this->user_name}','{$this->email}','{$this->number}','{$this->password}','{$this->type}')";
        $rep = insert($query);
        return $rep;
    }


    public function send_mail($subject, $message)
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
            $mail->addAddress($this->email,$this->user_name);     //Add a recipient            
        
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
            
            // echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
            
        }
        return $rep;
    }
}
