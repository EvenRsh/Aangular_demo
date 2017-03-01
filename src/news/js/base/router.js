//路由的模块，记得引入ui.router模块
var routers = angular.module('routers', ['ui.router']);
routers.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('index', {
			//state函数第一个参数，是表达路由关系，嵌套关系，如果有多层就用点连接
			//url:锚点后面要加的路由名字
			url: '/index',
			controller: 'indexCtrl',
			templateUrl: 'template/index.html'
		}).state('index.recommend', {
			//完成路由之间，也就是控制器的参数传递，用$state服务来接受参数，$state.params.id
			//格式  /:id/:name
			url: '/recommend/:id',
			controller: 'recommendCtrl',
			templateUrl: 'template/recommend.html'
		}).state('index.hot', {
			url: '/hot/:id',
			//controller:'indexCtrl',
			templateUrl: 'template/hot.html'
		}).state('index.entertainment', {
			url: '/entertainment/:id',
			//controller:'indexCtrl',
			templateUrl: 'template/entertainment.html'
		}).state('search', {
			url: '/search',
			controller: 'homeCtrl',
			templateUrl: 'template/search.html'
		}).state('detail', {
			url: '/detail/:id',
			controller: 'detailCtrl',
			templateUrl: 'template/detail.html'
		}).state('insert', {
			url: '/insert',
			controller: 'insertCtrl',
			templateUrl: 'template/insert.html'
		}).state('login', {
			url: '/login',
			controller: 'loginCtrl',
			templateUrl: 'template/login.html'
		})
		//默认进入的路由页面
	$urlRouterProvider.when('', '/index/recommend/6')
}])