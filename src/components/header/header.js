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
