<template><div class="app-container"  v-if="storeData != null">
	<router-view v-if="storeData != null"></router-view>
	<collectionDisplay :selectProduct="selectFunction" :collection="storeData.collections.featured" :addToCart="addToCart" :cartItems="storeData.cart.items"></collectionDisplay>
	<product :candidate="product" :close="closeFunction" :productProperties="productProperties" :animationOn="productAnimation" :addToCart="addToCart"></product>
	<cart :cartData="storeData.cart" :removeFromCart="removeFromCart" :cartRefresh="refreshCart"></cart>
	<div class="cart-overlay" :class="{ 'active': cartStatus === true }" @click="closeCart()"></div>
</div>
</template><script>module.exports = {

  mixins: [

	],

  data: function () {
    return{
      overlayStatus: false,
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
      cartStatus: function(){
         return store.state.cartStatus;
      }
  },

  methods: {

    // master GET method
    get: function(endpoint, doneCallback, failCallback) {
      $.ajax({
        type: 'GET',
        url: endpoint,
        contentType: 'application/json; charset=UTF-8',
        dataType: 'json'
      }).done(function(res) {
        if( typeof doneCallback === 'function' ) {
          doneCallback(res);
        } else {
          //console.log('callback provided not a function.');
        }
      }).fail(function(jqXHR, status) {
        if( typeof failCallback === 'function' ) {
          failCallback(status);
        } else {
          //console.log('fail callback provided not a function.');
        }
      });
    },

    // master POST method
    post: function(endpoint, payload, doneCallback, failCallback) {
      $.ajax({
        type: 'POST',
        url: endpoint,
        contentType: 'application/json; charset=UTF-8',
        dataType: 'json',
        data: JSON.stringify(payload)
      }).done(function(res) {
        if( typeof doneCallback === 'function' ) {
          doneCallback(res);
        } else {
          //console.log('done callback provided not a function.');
        }
      }).fail(function(jqXHR, status) {
        if( typeof failCallback === 'function' ) {
          failCallback(status);
        } else {
          //console.log('fail callback provided not a function.');
        }
      });
    },

    closeCart: function(){
      store.commit('cart', false);
    },

    refreshCart: function(callback){
      var that = this;
      this.get('/cart.js', function(response){
        Vue.set(that.storeData, 'cart', response);
        store.commit('updateCartTotal', response.item_count);
        if(callback != undefined){
          callback();
        }
      });
    },

    removeFromCart: function(itemID, callback){
      var that = this,
          payload = {
            quantity: 0,
            id: itemID
          };
      $.post('/cart/change.js', payload, function(response){
        callback();
      });
    },

    addToCart: function(item){

      var that = this,
          double = false,
          payload = {
            quantity: 1,
            id: item.id
          };


      this.storeData.cart.items.forEach(function(cartItem){
        if(item.id === cartItem.id){
          double = true;
        }
      });

      if(double){
        return false;
      }
      

      this.post('/cart/add.js', payload, function(response){
        that.refreshCart(function(){
         store.commit('cart', true);
        });
      });
    },

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
          leftCalc = String(wrapperDimensions.left + productOrigin.position.left + 16) + 'px';

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

      store.commit('changeTheme', 'dark');

      //Transform to new position
      setTimeout(function(){
        Vue.nextTick(function(){
          that.productProperties = {
            height: '500px',
            width: '350px',
            top: '190px',
            left: '200px'
          };
        });
      }, 50)




    },
    closeFunction: function(){
      this.product = null;
       store.commit('changeTheme', 'light');
    }
  },

  created: function(){ 
    this.getData();
  },

  mounted: function() {
    
  }
}
</script>