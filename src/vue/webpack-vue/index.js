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
  //@vuex
  import Vuex from "vuex";
  Vue.use(Vuex);
  //@weui
  import Weui from "weui";


  //@views
  import list from './views/list.vue';
  import detail from './views/detail.vue';
  //@routes
  const routes = [{
  	path:"/",
  	redirect:"/list"
  },{
  	path:"/list",
  	component:list,
  	children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'a',
          // component: UserProfile
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'b',
          // component: UserPosts
        }
      ]
  },{
  	path:'/detail',
  	component:detail
  }]
  const router = new VueRouter({
  	routes:routes
  });



  //逻辑
  new Vue({
    // el:"#demo",
    // data:{
    //   name:"213"
    // },
    // components:{
    // 	list
    // }
    router:router
  }).$mount("#demo")
console.log(Vue);