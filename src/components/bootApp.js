////////////////////////////////////////////////
//
//Bootsrap File----------
//Sets up the JS for the app.
//Only file needed to be called by Browserfy(gulpfile) to compile all needed javascript.
//
///////////////////////////////////////////////

//Basic Libraries
window.$ = require('jquery');

//Loads main vue lib and other vue libraries
window.Vue = require('vue');
window.VueRouter = require('vue-router');
window.Vuex = require('vuex');
// Create Vue Store
window.store = new Vuex.Store( require('./store.js') );
// Create Vue Router
window.router = new VueRouter({
	routes: [
    { path: '/', component: require('./homepage/homepage.vue'), name:'homepage' }
  ]
});

Vue.component('product', require('./product/product.vue'));
Vue.component('collectionDisplay', require('./collectionDisplay/collectionDisplay.vue'));

 const app = new Vue({
     el: '#app',
     name: 'mainApp',
     store: store,
     router: router,
     extends: require('./app/app.vue'),
     template: '<router-view></router-view>'
 });

//Create Header
 const header = new Vue({
     el: '#header',
     name: 'header',
     store: store,
     extends: require('./header/header.vue')
 });
