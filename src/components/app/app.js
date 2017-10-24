module.exports = {

  mixins: [

	],

  data: function () {
    return{
      storeData: null,
      product: null,
      productProperties: {
        height: '0',
        width: '0',
        top: '0', 
        left: '0',
        transition: 'none'
      },
      productAnimation: {
        transition: 'none'
      }
    }
  },

  props: [

  ],

  computed: {

  },

  methods: {
    getData: function(){
      if(window.DB != undefined){
        this.storeData = window.DB;
      } else {
        setTimeout(this.getData, 50);
      }
    },
    selectFunction: function(product){
      var that = this,
          selector = '#'+product.id,
          screenDimesions = {
            height: window.screen.availHeight,
            width: window.screen.width
          },
          wrapperDimensions = $('.app-container').position(),
          productOrigin = {
            position: $(selector).position(),
            height: String($(selector).height()) + 'px',
            width: String($(selector).width()) + 'px'
          },
          topCalc = String((wrapperDimensions.top + productOrigin.position.top) - $(window).scrollTop()) + 'px',
          leftCalc = String(wrapperDimensions.left + productOrigin.position.left) + 'px';

      this.productProperties = {
        height: productOrigin.height,
        width: productOrigin.width,
        top: topCalc,
        left: leftCalc
      };
      this.productAnimation = {
        transition: 'all 0.6s'
      }
      //Sumbit product data to component
      this.product = product;
      //190

      //600


      //Transform to new position
      Vue.nextTick(function(){
        that.productProperties = {
          height: '500px',
          width: '350px',
          top: '190px',
          left: '200px'
        };
      });




    },
    closeFunction: function(){
      this.product = null;
    }
  },

  created: function(){ 
    this.getData();
  },

  mounted: function() {
    
  }
}
