<?php 
namespace cart;
    require "db.php";
    class Cart{
       private $id_flower;
       private $quantity; 

       function __construct($id_flower,$quantity)
       {
        $this->id_flower = $id_flower;
        $this->quantity = $quantity;
       }

       function select_data($id_flower){
        
       }
    }

?>