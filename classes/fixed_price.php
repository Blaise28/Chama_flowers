<?php
    require "db.php";
    class Fixed_price{
        private $price;
        private $id_flower;

        function __construct($price,$id_flower)
        {
            $this->price = $price;
            $this->id_flower = $id_flower;
        }

        function insert(){
            $query = "insert into fixed_price(price,id_flower) 
                values('{$this->price}','{$this->id_flower}')";
            $rep = insert($query);
            return $rep;
        }
        
    }
?>