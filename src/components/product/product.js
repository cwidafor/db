module.exports = {

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
    'animationOn'
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

  methods: {


  },

  created: function(){
    
  },

  mounted: function() {

  }
}
