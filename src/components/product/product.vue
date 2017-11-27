<template><div class="product" v-if="candidate != null">
	<div class="product-bg" @click="close"></div>

	<div class="product-container" v-bind:style="[productProperties, animationOn]">
		<div class="product-logo">
			<img src="https://cdn.shopify.com/s/files/1/2434/8199/files/deathboys_logo.svg?9698666479076779602">
		</div>
		<div class="product-image">
			<img :src="candidate.images[0]">
		</div>
		<div class="product-info">
			<p>{{ candidate.title }}</p>
			<p>{{ 101 - candidate.variants[0].inventory_quantity }} of 100</p>
		</div>
	</div>

	<div class="product-description">

		<h1>{{ candidate.title }}</h1>
		<div class="product-description__info">
			<p>{{ candidate.description }}</p>
			<div class="product-description__attributes">
				<div class="">
					
				</div>
				<button @click="addToCart(candidate.variants[0].id)">Add to Cart<span>{{ candidate.price | money }}</span></button>
			</div>
		</div>
	</div>
</div>
</template><script>module.exports = {

  mixins: [

	],

  data: function () {
    return{
      
    }
  },

  props: [
    'candidate',
    'close',
    'productProperties',
    'animationOn',
    'addToCart'
  ],

  computed: {
    mainVariant: function(){
      if(this.candidate.variants != undefined){
        return this.candidate.variants[0];
      }else{
        return 'loading';
      }
    }
  },

  filters: {

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

  methods:{

  },

  created: function(){
    
  },

  mounted: function() {

  }
}
</script>