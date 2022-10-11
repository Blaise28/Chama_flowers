<?php 
    $query ="SELECT id_flower,image,description,name,quantity 
    FROM flower JOIN category 
    ON flower.id_category = category.id_category";

    $data = select($query)->fetchAll(PDO::FETCH_OBJ);

?>
<h2>liste des fleurs</h2>
<?php
if(!empty($data)){
?>
    <div class="table-wrapper">
        <table class="fl-table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Photo</th>
                <th>Description</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Action</th>
                <th>Publication</th>
            </tr>
            </thead>
            <tbody>
            <?php 
                for ($i=0; $i < count($data); $i++) { 
                    ?> <tr> <?php
                    foreach ($data[$i] as $key => $value) {
                        if ($key === "image") {
                            ?> <td>
                                <img width="40px" height="40px" src="<?= $value ?> " alt="">
                                </td> 
                            <?php
                        }else{
                            ?> <td> <?= $value ?> </td> <?php
                        }        
                    }
                    ?> 
                    <td>
                        <button class="edit">Edit</button>
                        <button class="delete">Delete</button>
                    </td>
                    <td>
                        <?php
                            $object = $data[$i];
                            $id_flower = intval($object->id_flower);
                            $query = "SELECT * from fixed_price WHERE id_flower={$id_flower}";
                            $result = select($query);
                        ?>
                        <a href="#modal_choice" data-id_flower= <?= $object->id_flower ?>
                            class="pub open_modal_choice
                            <?php 
                                if($result->rowCount() > 0){
                                    echo "disabled";
                                }
                            ?>
                            ">Publier</a>
                    </td>
                    </tr>
                    
                    <?php
                }         
            ?>
            <tbody>
        </table>
    </div>
<?php
}else{
    ?>
    <div class="message">Pas de resultat</div>
    <?php
}   
?>
<script>
    const pub_btns = document.querySelectorAll(".pub.open_modal_choice");
    pub_btns.forEach((pub) => {
    pub.addEventListener("click", (e) => {
        let id = e.target.getAttribute("data-id_flower");
        sessionStorage.setItem("id_flower",id);
       <?php 

       ?>

       
    });
    });
</script>