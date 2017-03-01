+(function() {
    ///////
//路由 //
///////
var routers = angular.module('routers', ['ui.router']);
routers.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
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
            controller: 'recommendCtrl',
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
            controller: 'detailCtrl',
            templateUrl: 'template/detail.html'
        })
        //登录
        .state('login', {
            url: '/login',
            controller: 'loginCtrl',
            templateUrl: 'template/login.html'
        })
        //登录
        .state('register', {
            url: '/register',
            controller: 'registerCtrl',
            templateUrl: 'template/login.html'
        })
        //添加新闻
        .state('insert', {
            url: '/insert',
            controller: 'insertCtrl',
            templateUrl: 'template/insert.html'
        });
    $urlRouterProvider.when('', '/index/1');
}]).run([`$http`, `cookie`, `$window`, function($http, cookie, $window) {
    $http.post(`http://10.16.155.28:81/news/php/index.php/login_api/auto_login`, {
        params: {
            username: cookie.getCookie(`username`),
            token: cookie.getCookie(`token`)
        }
    }).success((data) => {
        console.log(data);
        if (data.status == "success") {
            // console.log(data.info)
        } else {
            $window.location.href = `#/login`
        }
    })
}]);
})();
