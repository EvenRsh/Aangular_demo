"use strict";
console.log(angular);
let app = angular.module(`sfApp`, [`controllers`,`filters`,`services`,`directives`]);
var controllers = angular.module(`controllers`,[]);
controllers.controller(`indexCtrl`,["$scope",function($scope) {
    // $scope.titles = ["头条","文章","笔记","职位","活动","标签","榜单","子站"];
    $scope.navs = ["头条","问答","专栏","职位","活动","SFDC","App"];
  
}]);
var filters = angular.module(`filters`,[]);
var services = angular.module(`services`,[]);
var directives = angular.module(`directives`,[]);
directives.directive(`sffheader`,()=>{
    return{
        templateUrl:`directive/sfheader.html`,
        scope:{
            color:"@",
            navs:"="
        },
        controller:function ($scope) {
            $scope.color='purple'
            // console.log($scope)
        },
        link:(scope,ele,attr)=>{
            ele.find('.global-navTags').css({backgroundColor:`red`});
        }
    }
}).directive(`sfcontent`,()=>{
    return{
        templateUrl:`directive/sfcontent.html`
    }
}).directive(`sffooter`,()=>{
    return{
        templateUrl:`directive/sffooter.html`
    }
}).directive(`ngColor`,()=>{
    return{
        link:(scope,ele,attr)=>{
            console.log(attr.ngColor);
            // ele.css("backgroundColor",attr.ngColor);
        }
    }
})