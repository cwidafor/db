module.exports = {

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
