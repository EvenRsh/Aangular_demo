"use strict";

var app = angular.module("tulingApp", []);
var func = function func($scope, $http) {
    $scope.name = "haha";
    $scope.submit = function () {
        $http.jsonp("0216/turing.php", {
            params: {
                callback: "JSON_CALLBACK",
                que: $scope.ask
            }
        }).then(function (res) {
            $scope.output = res.data.text;
        });
    };
};

app.controller("indexCtrl", ["$scope", "$http", func]);