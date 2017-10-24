<template><div class="header" :class="headerTheme">
	<div class="header-logo">
		<img :src="data.logo">
	</div>
	<div class="header-link__container">
		<a class="header-link" href="/">
			new pins
		</a>
		<a class="header-link" v-for="link in linkList" v-if="link != null" :href="link.handle">
			{{ link.title }}
		</a>
	</div>
</div>
</template><script>module.exports = {

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
</script>