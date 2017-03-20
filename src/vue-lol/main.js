  console.log("入口文件");
  //@vue
  // var Vue = require("vue");
  import Vue from 'vue';
  //@vue-router
  import VueRouter from "vue-router";
  Vue.use(VueRouter);
  //@vue-resource
  import VueResource from "vue-resource";
  Vue.use(VueResource);
  //@zepto
  // import $ from "zepto";
  //@vuex
  import Vuex from "vuex";
  Vue.use(Vuex);
  //@muse-ui
  import MuseUI from 'muse-ui'
  import 'muse-ui/dist/muse-ui.css'
  Vue.use(MuseUI)
      //@vue-awesome-swiper
  import VueAwesomeSwiper from 'vue-awesome-swiper'
  Vue.use(VueAwesomeSwiper);

  //@store
  var store = new Vuex.Store({
      state: {
          bannerNews: [],
          newslist:[],
          token:"78710-B0810-777C7-C9A85"
      },
      mutations: {
          setbanner: function(state,value) {
              state.bannerNews=value;
              // console.log(Vue);
        },
        setnewslist:function(state,value){
          state.newslist=value;
        }
      },
      actions: {
         
      }
  })

  //@views
  import index from './views/index.vue';
  import chamaiondetail from './views/lchamaiondetail.vue';
  import news from './views/channels/news.vue';
  import players from './views/channels/players.vue';
  import heros from './views/channels/heros.vue';
  //@routes
  const routes = [{
      path: "/",
      redirect: "/index/new/1"
  },{
      path: "/index",
      component: index,
      children:[{
        path:'new/:id',
        component:news
      },{
        path:'player/:id',
        component:players
      },{
        path:'hero/:id',
        component:heros
      },{
        path:"chamaiondetail/:id",
        component:chamaiondetail
      }]
  }]
  const router = new VueRouter({
      routes: routes
  });



  //逻辑
  new Vue({
      store: store,
      router: router
  }).$mount("#lol")
  // console.log(Vue);
