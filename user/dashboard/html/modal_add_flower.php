
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
        <h3>Ajouter de(s) Nouvelle(s) fleurs</h3>
        <form action="" method="POST">
          <div class="container">

            <div class="cont_input">
              <label for="name">Name:</label>
              <input type="text" id="name" name="name">
            </div>

            <div class="cont_image">
              <!-- <label for="image">Photo:</label>
              <input type="file" id="image" name="image"
              accept="image/png, image/jpeg, image/jpg, image/svg"> -->
              <div class="image">
                <input type="file" id="upload" style="display:none; ">
                <label for="upload">select image</label>
              </div>
              <div class="pr">
                <strong>
                    <h4 class="ex">PDF</h4>
                    <h5 class="size">2.5KB</h5>
                </strong>
                <progress min="0" max="100" value="0"></progress>
                <span class="progress_indicator"> </span> 
              </div>
            </div>


            <div class="cont_input">
              <label for="category">category:</label>
              <select name="category" id="category">
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
          <button type="submit" class="btn_save">Enregistrer</button>
        </form>
      </div>
</aside>