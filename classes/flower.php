<?php 
    
    class Flower{
        private $description;
        private $image;
        private $quantity;
        private $email;
        private $category;

        function __construct($description,$image,$quantity,$email,$category)
        {
            $this->description = $description;
            $this->image = $image;
            $this->quantity = $quantity;
            $this->email = $email;
            $this->category = $category;
        }

        public function insert_flower(){
            $query_statement = select("SELECT id_category FROM category WHERE name LIKE '%{$this->category}%'");
            $id_categ = $query_statement->fetch()[0];
            $insert_query = "insert into flower(description,image,quantity,email,id_category)
                values('{$this->description}','{$this->image}'
                ,'{$this->quantity}','{$this->email}','{$id_categ}')";
            $rep = insert($insert_query);
            return $rep;
        }
    }
?>