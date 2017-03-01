///////
//路由 //
///////
var routers = angular.module('routers', []);
routers.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    // console.log(131)
    //首页
    $stateProvider.state('index', {
            url: '/index',
            controller: 'indexCtrl',
            templateUrl: 'template/index.html'
        })
        //第二层路由
        //推荐
        .state('index.1', {
            url: '/1',
            controller:'recommendCtrl',
            templateUrl: 'template/recommend.html'
        })
        //热点
        .state('index.2', {
            url: '/2',
            // controller:'indexCtrl',
            templateUrl: 'template/hot.html'
        })
        //娱乐
        .state('index.3', {
            url: '/3',
            // controller:'indexCtrl',
            templateUrl: 'template/entertainment.html'
        })
        //信息详情
        .state('detail', {
            url: '/detail/:id',
            controller:'detailCtrl',
            templateUrl: 'template/detail.html'
        })
        //登录
        .state('login', {
            url: '/login',
            controller:'loginCtrl',
            templateUrl: 'template/login.html'
        });
    $urlRouterProvider.when('', '/index');
}]);