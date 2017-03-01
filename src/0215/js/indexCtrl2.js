app.controller('index2Ctrl', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
	//model
	$scope.name = 'xie';
	$scope.a = $rootScope.title;
	$rootScope.abc = 'abc'
}])