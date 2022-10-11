
<aside
      class="modal modal_add_flower"
      id="modal_add_flower"
      aria-hidden="true"
      role="dialog"
      aria-labelledby="title_modal"
      style="display: none"
    >
      <div class="modal_wrapper modal_stop_propag" id="title_modal ">
        <button class="close_modal">Fermer</button>
        <h3>Nouvelle fleurs</h3>
        
        <form action="" method="POST" enctype="multipart/form-data">
          <div class="container">

            <div class="cont_input cont_descr">
              <label for="descr">Description:</label>
              <textarea placeholder="Description de cette fleur" class="descr_area" name="descr" id="descr" cols="30" rows="4"></textarea>
              <!-- <input type="text" id="name" name="name" required> -->
            </div>

            <div class="cont_image">
                <div class="file_input">
                    <input type="file" id="upload" style="display:none;" name="image"
                     accept="image/jpeg, image/jpg, image/png, image/svg" required/l>
                    <label for="upload" class="image_label">Selectionner une image</label>
                </div>
                <div class="pr">
                    <strong>
                        <h4 class="ex"></h4>
                        <h5 class="size"></h5>
                    </strong>
                    <progress min="0" max="100" value="0"></progress>
                    <span class="progress_indicator"> </span>
                </div>
            </div>
            
            <div class="cont_input">
              <label for="quantity">quantity:</label>
              <input type="number" name="quantity" id="quantity" placeholder="ex:63" required>
            </div>

            <div class="cont_input">
              <label for="category">category:</label>
              <select name="category" id="category" required>
                <option value="" selected>Sect category</option>
                <?php 
                  $categ_query = "select name from category";
                  $categories = select($categ_query)->fetchAll();
                  for ($i=0; $i < count($categories); $i++) { 
                    $categ = $categories[$i][0];
                    ?>
                      <option value="<?= $categ ?>"><?= $categ ?></option>
                    <?php
                  }
                ?>
                
              </select>
            </div>
          </div>
          <button type="submit" name="btn_save" class="btn_save">Enregistrer</button>
        </form>
      </div>
</aside>

<?php


  $user_info = $_SESSION["user_info"];
 
  if(isset($_POST["btn_save"])){
    $upload_error = array();

    $description = $_POST["descr"];
    $quantity = $_POST["quantity"];
    $category = $_POST["category"];
    $email = $user_info["email"];

    // upload image
    $destination = '../../images/';
    $target_file = $destination.basename($_FILES["image"]["name"]);
    $image_file_type = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

    if (file_exists($target_file)) {
      $upload_error["exist"] = "Image existe deja";
    }
    if($image_file_type != "jpg" && $image_file_type != "png" && $image_file_type != "jpeg"
      && $image_file_type != "gif" && $image_file_type != "svg") {
      $upload_error["format"] = "Format incompatible";
    }


    if(count($upload_error) === 0){
      if(move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)){
        $flower = new Flower($description,$target_file,$quantity,$email,$category);
        $rep = $flower->insert_flower();
      
        if($rep === true){
          ?>
          <script>
            const notyf = new Notyf({
              duration: 3000,
              position: {
                x: 'right',
                y: 'top',
              }
            });
            notyf.success("<?= "Enregistrement reussi" ?>");
          </script>
          <?php
        }else{
          ?>
          <script>
            const notyf = new Notyf({
              duration: 3000,
              position: {
                x: 'right',
                y: 'top',
              }
            });
            notyf.error("<?= "Enregistrement echoue" ?>");
            </script>
          <?php
        }
      }
      
    }else{
      foreach ($upload_error as $key => $value) {
        ?>
        <script>
          const notyf = new Notyf({
            duration: 3000,
            position: {
              x: 'right',
              y: 'top',
            }
          });
          notyf.error("<?= $value ?>");
        </script>
          
        <?php
      }    
    }
  }
  
?>