//npm install vue
//var Vue = require('vue');
import Vue from "vue"
//var VueRouter = require('vue-router')
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Vuex from 'vuex'
Vue.use(Vuex);
import VueResource from 'vue-resource'
Vue.use(VueResource)
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

//引入muse-ui
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

//vuex集中式状态管理中心
var store = new Vuex.Store({
	//状态，也就是保存数据的地方
	state: {
		name: 'xie&lan',
		isLeftPopUp: false,
		isBottomPopUp: false
	},
	mutations: {
		//font-end
		set_fe: function(state, data) {
			state.name = data
		},
		set_isLeftPopUp: function(state, data) {
			state.isLeftPopUp = data
		},
		set_isBottomPopUp: function(state, data) {
			state.isBottomPopUp = data
		}
	}
})

//单页面应用所需要的路由管理
import Index from "./components/index.vue"
import News from "./components/channels/news.vue"
import Players from "./components/channels/players.vue"
import Heros from "./components/channels/heros.vue"
import ChampionDetail from "./components/championdetail.vue"
var router = new VueRouter({
	routes: [
		/*{
		path: '/foo',
		component: Foo,
		children: [
		//路由嵌套
        {
          path: 'a/:id',
          component: UserProfile
        },
        {
          path: 'b/:id',
          component: UserPosts
        }
      ]
	}, */
		{
			path: '/index',
			component: Index,
			children: [{
				path: 'news/:id',
				component: News
			}, {
				path: 'players/:id',
				component: Players
			}, {
				path: 'heros/:id',
				component: Heros
			}]
		},{
			path: '/detail/:id',
			component: ChampionDetail,
		}
	]
})

new Vue({
	router: router,
	store: store
}).$mount('#lol')