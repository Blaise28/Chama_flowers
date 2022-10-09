<aside
      class="modal modal_choice"
      id="modal_choice"
      aria-hidden="true"
      role="dialog"
      aria-labelledby="title_modal"
      style="display: none"
    >
      <div class="modal_wrapper modal_stop_propag" id="title_modal ">
        <button class="close_modal">Fermer</button>
        <form class="cont_quiz" method="POST">
            <div class="quiz">
                <h2>Comment vous voulez vendre</h2>
                <div class="questions">
                    <div class="choice">
                        <input type="radio" name="choice" id="prix_fixe" value="prix_fixe">
                        <label for="prix_fixe">Vente avec un prix fixe</label>
                    </div>
                    <div class="choice">
                        <input type="radio" name="choice" id="encheres" value="encheres">
                        <label for="encheres">Vente aux encheres</label>
                    </div>
                </div>
            </div>
            <button type="submit" name="submit_choice">valider</button>
        </form>
            
      </div>
</aside>
<?php 
    if(isset($_POST["submit_choice"])){
        $choice = $_POST["choice"];
        if($choice ===  "prix_fixe"){
            ?>
                <script>
                    window.location.replace("../publication/html/prix_fixe.php");
                </script>
            <?php
        }else{
            ?>
                <script>
                    window.location.replace("../publication/html/encheres.php");
                </script>
            <?php
        }
    }
?>