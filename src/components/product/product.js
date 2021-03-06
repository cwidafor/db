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
