<template><div class="cart" :class="{ 'open': cartStatus === true }">
	<div class="cart-container">
		<div class="cart-header">
			<p>Your Cart</p>
		</div>
		<div class="cart-backpack">
			<div class="cart-item" v-for="item in cartData.items">
				<div class="cart-item__image">
					<img :src="item.image">
				</div>
				<div class="cart-item__info">
					<h5>{{ item.product_title }}</h5>
					<p>{{ item.price | money }}</p>
				</div>
				<div class="cart-item__remove" :class="{ 'activated': removingItem === item.id }" @click="removeItem(item.id)">
					<svg version="1.1" viewBox="0 0 66.1 66.1" width="100%" xml:space="preserve">
					<path d="M52.3,1.2L33.1,20.5L13.8,1.2c-1.7-1.7-4.3-1.7-6,0L1.2,7.8c-1.7,1.7-1.7,4.3,0,6l19.2,19.2L1.2,52.3c-1.7,1.7-1.7,4.3,0,6
						l6.6,6.6c1.7,1.7,4.3,1.7,6,0L33,45.6l19.2,19.2c1.7,1.7,4.3,1.7,6,0l6.6-6.6c1.7-1.7,1.7-4.3,0-6L45.6,33.1l19.2-19.2
						c1.7-1.7,1.7-4.3,0-6l-6.6-6.6C56.6-0.4,53.9-0.4,52.3,1.2z"/>
					</svg>
				</div>
			</div>
		</div>

		<div class="cart-button" v-if="cartData.items.length > 0">
			<form method="post" action="/cart">
				<input type="submit" value="Checkout" name="checkout"/>
			</form>
		</div>
	</div>
</div>
</template><script>module.exports = {

  mixins: [

	],

  data: function () {
    return{
      removingItem: null
    }
  },

  props: [
    'cartData',
    'removeFromCart',
    'cartRefresh',
    'closeCart'
  ],

  computed: {
      cartStatus: function(){
         return store.state.cartStatus;
      }
  },

  methods: {
    removeItem: function(itemID){
      var that = this;
      this.removingItem = itemID;
      this.removeFromCart(itemID, function(){
        that.cartRefresh(function(){
           that.removingItem = null;
        });
        if(that.cartData.items < 1){
          that.closeCart();
        }
      });
    }

  },

  filters:{
      money: function(value){

        if(value !== undefined){
            value = value.toString();
            if(value.length === 1){
                var firstHalf = '0';
                var secondHalf = '0' + value;

            } else if(value.length === 2){
                var firstHalf = '0';
                var secondHalf = value;

            } else {
                var firstHalf = value.slice(0,(value.length - 2));
                var secondHalf = value.substring(value.length, (value.length - 2));
            }

            return '$' + firstHalf + '.' + secondHalf;

          } else {
              return '$' + value;
      }
    }
  },

  created: function(){
    
  },

  mounted: function() {
    this.cartRefresh();
  }
}
</script>