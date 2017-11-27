<template><div class="collection" v-if="collection != undefined && collection != null">
	<div class="collection-item" v-if="collection.products != undefined" v-for="product in collection.products" @click="addToCart(product.variants[0])" :id="product.id" :class="itemStatusChecker(product)">
		<div class="collection-item__container">
			<div class="collection-item__logo">
				<img src="https://cdn.shopify.com/s/files/1/2434/8199/files/deathboys_logo.svg?9698666479076779602">
			</div>

			<div class="collection-item__image">
				<img :src="product.images[0]">
			</div>

			<div class="collection-item__info" v-if="itemIsAdded(product) === true">
				<p>Added To Cart</p>
				<div class="collection-item__info__icon">
					<img src="https://cdn.shopify.com/s/files/1/2434/8199/files/image.png?17583971083198994668">
				</div>
			</div>
			<div class="collection-item__info" v-else>
				<p>Add to cart</p>
				<p>{{product.variants[0].inventory_quantity }}/100</p>
			</div>

		</div>
		<div class="collection-item__footer">
			<h4>{{ product.title }} --</h4>
			<p>{{ product.price | money }}</p>
		</div>
<!-- 		<div class="collection-item__button">
			<button class="alt-button">Add To Cart</button>
		</div> -->
	</div>
</div></template><script>module.exports = {

  mixins: [

	],

  data: function () {
    return{
      
    }
  },

  props: [
    'collection',
    'selectProduct',
    'addToCart',
    'cartItems'
  ],

  computed: {

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

  methods: {

    itemStatusChecker: function(product){
      var that = this,
          status = [];

      this.cartItems.forEach(function(item){
        if(item.id == product.variants[0].id){
          status.push('alreadyAdded');
        }
      });
      return status;
    },
    itemIsAdded: function(product){
      var that = this,
          status = false;

      this.cartItems.forEach(function(item){
        if(item.id == product.variants[0].id){
          status = true;
        }
      });
      return status;
    }
  },

  created: function(){
    
  },

  mounted: function() {

  }
}
</script>