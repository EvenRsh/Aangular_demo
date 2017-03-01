var app = angular.module('routeApp', ['ngRoute']);
app.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/index', {
		templateUrl:'template/home.html',
		controller:'indexCtrl'
	}).when('/home/:num', {
		templateUrl:'template/home.html',
		controller:'homeCtrl'
	}).otherwise({
		redirectTo:'/index'
	})
}]);
app.controller('indexCtrl', ['$scope','$window', function($scope,$window){
	$scope.name="yao";
	$scope.num=1;
	$scope.color=`red`;
	$scope.submit = function(){
		$window.location.href = `#/home/${$scope.num}`;
	}

}]).controller('homeCtrl', ['$scope','$routeParams', function($scope,$routeParams){
	$scope.name="xie";
	console.log($routeParams);
	$scope.num=$routeParams.numz	;
	$scope.color=`blue`;
}])
