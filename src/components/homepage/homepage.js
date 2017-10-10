module.exports = {

  mixins: [

	],

  data: function () {
    return{
      meow: true
    }
  },

  props: [

  ],

  computed: {
    allData: function(){
      if(this.$parent.storeData != undefined){
        return this.$parent.storeData.collections;
      }
      return 'loading';
    },
    products: function(){
      if(this.$parent.storeData != undefined){
        return this.$parent.storeData.collections.homepage.products;
      }
      return 'loading';
    }
    
  },

  methods: {


  },

  created: function(){
    
  },

  mounted: function() {

  }
}
