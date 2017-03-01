"use strict";

var app = angular.module("serApp", []);
var func = function func($scope, $http, tool) {
	$scope.name = "haha";
	tool.a = "123123";
	$scope.sub = tool.sub;
	tool.b = $scope.sub();
};
var func2 = function func2($scope, $http, tool) {
	$scope.name = tool.a;
	$scope.b = tool.b;
	$scope.sub = tool.sub;
	$scope.sub();
};
function Tool($filter) {
	var _this = this;

	this.name = "abc";
	console.log("123");
	var name = $filter("currency")(1111, "$");
	this.sub = function () {
		console.log(_this.name);
		return name;
	};
}
app.controller("indexCtrl", ["$scope", "$http", "tool", func]);
app.controller("indexCtrl2", ["$scope", "$http", "tool", func2]);
app.service("tool", ["$filter", Tool]);