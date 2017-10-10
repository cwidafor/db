<template><div class="product" :style="{ backgroundColor: mainVariant.option1 }">
	<div class="product-image"> 
		<img :src="product.images[0]">
	</div>
	<div class="product-title">
		<h2>{{ product.title }}</h2>
		<p v-if="product.tags.indexOf('Limited Run') > -1">Limited Run</p>
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
    'product'
  ],

  computed: {
    mainVariant: function(){
      if(this.product.variants != undefined){
        return this.product.variants[0];
      }else{
        return 'loading';
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