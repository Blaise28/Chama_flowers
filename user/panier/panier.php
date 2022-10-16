<div class="panier">
    <ul class="shop">
      <li><a href="#" id="cart">Panier <span class="badge">3</span></a></li>
    </ul> <!--end navbar-right -->
  

  <div class="products">
    <div class="shopping-cart">
      <div class="shopping-cart-header">
        <i class="fa fa-shopping-cart cart-icon"></i><span class="badge">3</span>
        <div class="shopping-cart-total">
          <span class="lighter-text">Total:</span>
          <span class="main-color-text">$2,229.97</span>
        </div>
      </div> <!--end shopping-cart-header -->

      <ul class="shopping-cart-items">
        <li class="clearfix">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg" alt="item1" />
          <span class="item-name">Sony DSC-RX100M III</span>
          <span class="item-price">$849.99</span>
          <span class="item-quantity">Quantity: 01</span>
        </li>


      <a href="#" class="button">Checkout</a>
    </div> <!--end shopping-cart -->
  </div> <!--end container -->
</div>

<script>
    const open_cart = document.querySelector(".panier #cart");
    const cart_menu = document.querySelector(".panier .shopping-cart");
    open_cart.addEventListener("click",(e)=>{
    cart_menu.classList.toggle("active");
    });
   
</script>