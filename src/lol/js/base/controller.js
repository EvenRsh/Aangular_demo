+(function() { 
   ////////
//控制器 //
////////
var controllers = angular.module('controllers', []);
//首页主控制器
controllers.controller('indexCtrl', ['$scope', '$window', 'cookie', function($scope, $window, cookie) {
        $scope.text = "123";
    }])
    ;
})();
