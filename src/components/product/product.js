module.exports = {

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
