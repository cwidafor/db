
module.exports = {

  state: {
  	headerTheme: 'light',
  	cart: [],
    cartTotal: 0,
    cartStatus: false
  },

  mutations: {

  	updateData: function(state, data){
      var options = {
        name: data.name || false, //required
        data: data.data || false, //required
        save: data.save || false
      }

      Vue.set(state, options.name, options.data);

      if(options.save){
        localStorage.setItem(window.shopContents.name + options.name, JSON.stringify(options.data));
      }
    },

    changeTheme: function(state, data){
    	Vue.set(state, 'headerTheme', data);
    },

    updateCartTotal: function(state, data){
      Vue.set(state, 'cartTotal', data);
    },

    cart: function(state, data){
      Vue.set(state, 'cartStatus', data);
    }

  },
};
