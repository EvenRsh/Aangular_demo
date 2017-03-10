+(function() {
    ///////
//路由 //
///////
var routers = angular.module('routers', ['ui.router']);
routers.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/index');
    //首页
    $stateProvider.state('index', {
            url: '/index',
            controller: 'indexCtrl',
            templateUrl: 'template/index.html'
        });
       
}]).run([`$http`, `cookie`, `$window`, function($http, cookie, $window) {
    console.log("已调用")
    /*$http.post(`http://10.16.155.28:81/news/php/index.php/login_api/auto_login`, {
        params: {
            username: cookie.getCookie(`username`),
            token: cookie.getCookie(`token`)
        }
    }).success(function(data){
        console.log(data);
        if (data.status == "success") {
            // console.log(data.info)
        } else {
            $window.location.href = `#/login`
        }
    })*/
}]);
})();
