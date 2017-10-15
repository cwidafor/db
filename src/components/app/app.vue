<template><div class="app-container">
	<router-view v-if="storeData != null"></router-view>
	<collectionDisplay :select="selectFunction" :collection="storeData.collections.featured"></collectionDisplay>
</div>
</template><script>module.exports = {

  mixins: [

	],

  data: function () {
    return{
      storeData: null
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
    }
  },

  created: function(){ 
    this.getData();
  },

  mounted: function() {
    
  }
}
</script>