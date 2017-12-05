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
    'backgroundProperties',
    'animationOn',
    'addToCart',
    'cartItems'
  ],

  computed: {
    mainVariant: function(){
      if(this.candidate.variants != undefined){
        return this.candidate.variants[0];
      }else{
        return 'loading';
      }
    },
    productAttributes: function(){
      if(this.candidate.variants != undefined){
        var mainVariant = this.mainVariant,
            attrArray = [];

        this.candidate.options.forEach(function(option, index){
          attrArray.push({ name: option, value: mainVariant.options[index] });
        });
        return attrArray;

      } else {
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
