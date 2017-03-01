let app = angular.module(`serApp`, []);
let func = ($scope, $http,tool) => {
    $scope.name = `haha`;
	tool.a = "123123"
    $scope.sub = tool.sub;
    tool.b = $scope.sub();
};
let func2 = ($scope, $http,tool) => {
    $scope.name = tool.a;
    $scope.b = tool.b;
    $scope.sub = tool.sub;
    $scope.sub();
};
function Tool($filter){
	this.name = "abc";
	console.log("123");
	let name = $filter("currency")(1111,"$");
	this.sub = ()=>{
		console.log(this.name);
		return name;
	}
}
app.controller(`indexCtrl`, [`$scope`, `$http`,`tool`, func]);
app.controller(`indexCtrl2`, [`$scope`, `$http`,`tool`, func2]);
app.service(`tool`,[`$filter`,Tool]);
