<template><div class="collection">
	<div class="collection-item" v-for="product in collection.products" @click="selectProduct(product)" :id="product.id">
		<div class="collection-item__container">
			<div class="collection-item__logo">
				<img src="https://cdn.shopify.com/s/files/1/2434/8199/files/deathboys_logo.svg?9698666479076779602">
			</div>
			<div class="collection-item__image">
				<img :src="product.images[0]">
			</div>
			<div class="collection-item__info">
				<p>{{ product.title }}</p>
				<p>{{ 101 - product.variants[0].inventory_quantity }} of 100</p>
			</div>
		</div>
		<div class="collection-item__footer">
			<h4>{{ product.title }} --</h4>
			<p>{{ product.price | money }}</p>
		</div>
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
    'selectProduct'
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


  },

  created: function(){
    
  },

  mounted: function() {

  }
}
</script>