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
                            <a href="#modal_choice" class="pub">Publier</a>
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