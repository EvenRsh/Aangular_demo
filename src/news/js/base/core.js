//定义angular程序的主模块，第一个参数是主模块的名字，跟ng-app绑定，第二个参数是引入其他子模块
var app = angular.module('newsApp', ['ng.post', 'routers', 'directives', 'controllers','services']);