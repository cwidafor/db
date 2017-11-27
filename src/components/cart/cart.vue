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
					<h5>{{ item.title }}</h5>
					<p>{{ item.price | money }}</p>
				</div>
				<button class="alt-button" :class="{ 'activated': removingItem === item.id }" @click="removeItem(item.id)">Remove Item</button>
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
    'cartRefresh'
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