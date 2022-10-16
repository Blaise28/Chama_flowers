<?php 
    $query = "SELECT fp.id_flower,name,price,description,image,quantity FROM fixed_price as fp 
    JOIN flower as f ON fp.id_flower=f.id_flower
    JOIN category as c ON f.id_category = c.id_category";
    
    $querystatement = select($query);
    $object_data = $querystatement->fetchAll(PDO::FETCH_OBJ);
?>
<div class="container">
    <h3 class="title"> Les fleurs deja publier </h3>
    <div class="grid">
    <?php 
        for ($i=0; $i < count($object_data); $i++) { 
            $url = substr($object_data[$i]->image,6);
            ?>
            <div class="products-container">
                <form method="POST" action="" class="product">
                    <div>
                        <img src="<?= $url ?>" alt="">
                    </div>
                    <div class="info">
                        <input type="hidden" value="<?= $object_data[$i]->id_flower ?>" name="id_flower">
                        <h3 name="name"><?= $object_data[$i]->name ?></h3>
                        <div class="quant_value_prod">
                            <span class="quant">
                            <h3>Quantite :</h3>
                            <input type="number" name="quantity"  min="1" max="<?= $object_data[$i]->quantity ?>" value="1" />
                            </span>
                            <div class="price"><strong><?= $object_data[$i]->price ?></strong>Fbu</div>
                        </div>
                        <div class="buttons">
                            <input type="submit" name="add_into_cart" class="cart open_modal_buy" value="Ajouter dans mon panier">
                        <!-- Set up a container element for the button
                            <div id="paypal-button-container" class="btns_paypal"></div> -->
                        </div>
                    </div>
                </form>
            </div>
            <?php
        }
    ?>
    </div>
</div>
<style>
    .quant_value_prod .quant{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
<?php
    if(isset($_POST["add_into_cart"])){
        $id_flower  = $_POST["id_flower"];
        $quantity = $_POST["quantity"];
        var_dump($id_flower,$quantity);
    }
?>
<!-- 
<script>

      paypal.Buttons({
        // Sets up the transaction when a payment button is clicked
        createOrder: (data, actions) => {
            let total_price = document.querySelector(".quant_value_prod .price strong").textContent;
            return actions.order.create({
            purchase_units: [{
              amount: {
                value: `${total_price}` // Can also reference a variable or function
              }
            }]
          });
        },
        // Finalize the transaction after payer approval
        onApprove: (data, actions) => {
          return actions.order.capture().then(function(orderData) {
            // Successful capture! For dev/demo purposes:
            console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
            const transaction = orderData.purchase_units[0].payments.captures[0];
            alert(`Transaction \${transaction.status}: \${transaction.id}\n\nSee console for all available details`);
            // When ready to go live, remove the alert and show a success message within this page. For example:
            // const element = document.getElementById('paypal-button-container');
            // element.innerHTML = '<h3>Thank you for your payment!</h3>';
            // Or go to another URL:  actions.redirect('thank_you.html');
          });
        }
      }).render('#paypal-button-container');
</script>
</script> -->