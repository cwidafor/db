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
    }
  },

  methods: {


  },

  created: function(){
    this.data = headerData;
    this.linkList = link_list;
  },

  mounted: function() {

  }
}
