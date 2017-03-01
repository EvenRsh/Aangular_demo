"use strict";
console.log(angular);
let app = angular.module(`runoobApp`, [`controllers`,`filters`,`services`,`directives`]);
var controllers = angular.module(`controllers`,[]);
controllers.controller(`headerCtrl`,["$scope",function($scope) {
    $scope.titles = ["第一次用ng", "首页", "HTML", "CSS", "JavaScrip", "jQuerya", "Bootstrap", "SQL", "MySQL", "PHP", "Pythona", "C", "C++", "C#", "Java", "Ruby", "更多……"];
}]);
app.controller(`contentCtrl`,["$scope",function($scope) {
    $scope.navs = ["AngularJS 教程123",
        "AngularJS 简介456 ",
        "AngularJS 表达式789",
        "AngularJS 指令123 ",
        "AngularJS 模型     ",
        "AngularJS Scope    ",
        "AngularJS 控制器   ",
        "AngularJS 过滤器   ",
        "AngularJS Service  ",
        "AngularJS Http     ",
        "AngularJS Select   ",
        "AngularJS 表格     ",
        "AngularJS SQL      ",
        "AngularJS HTML     ",
        "AngularJS 事件     ",
        "AngularJS 模块     ",
        "AngularJS 表单     ",
        "AngularJS 输入验证 ",
        "AngularJS API      ",
        "AngularJS Bootstrap",
        "AngularJS 包含     ",
        "AngularJS 动画     ",
        "AngularJS 依赖注入 ",
        "AngularJS 路由     ",
        "AngularJS 应用     ",
        "AngularJS 实例     ",
        "AngularJS 参考手册 "
    ];
}]);
app.controller(`footerCtrl`,["$scope",function($scope) {
	
}]);

var filters = angular.module(`filters`,[]);
var services = angular.module(`services`,[]);
var directives = angular.module(`directives`,[]);
directives.directive(`xheader`,()=>{
    return{
        templateUrl:`directive/xheader.html`
    }
}).directive(`xcontent`,()=>{
    return{
        templateUrl:`directive/xcontent.html`
    }
}).directive(`xfooter`,()=>{
    return{
        templateUrl:`directive/xfooter.html`
    }
})