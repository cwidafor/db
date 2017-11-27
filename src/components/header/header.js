module.exports = {

  mixins: [

	],

  data: function () {
    return{
      data: null,
      linkList: null
    }
  },

  props: [

  ],

  computed: {
    headerTheme: function(){
      return store.state.headerTheme;
    },
    cartTotal: function(){
      return store.state.cartTotal;
    }
  },

  methods: {
    openCart: function(){
      store.commit('cart', true);
    }
  },

  created: function(){
    this.data = headerData;
    this.linkList = link_list;
  },

  mounted: function() {
    

  }
}
