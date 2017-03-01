"use strict";+function(){
////////
//控制器 //
////////
var e=angular.module("controllers",[]);
//首页主控制器
e.controller("indexCtrl",["$scope","$window","cookie",function(e,t,n){
//tab 2层路由开关
e.tabSelected=1,e.changeTab=function(n){e.tabSelected=n,t.location.href="#/index/"+e.tabSelected},
//搜索栏数据控制
e.searchValue="",e.isSearch=!1,e.search=function(){e.isSearch=!0},e.cancel=function(){e.isSearch=!1,e.searchValue=""}}]).controller("detailCtrl",["$scope","$window","$http","$state",function(e,t,n,i){n.get("http://10.16.155.28:81/news/php/index.php/news_api/show_detail",{params:{id:i.params.id}}).success(function(n){
// console.log(data);
var i=n.news_list[0];e.name=i.channel_name,e.title=i.title,e.text=i.text,e.isShow=!1,e.imgUrl="./img/28.jpg",e.showPic=function(t){e.isShow=!0,e.imgUrlshow=t},e.hidePic=function(){e.isShow=!1,e.imgUrlshow=""},e.goback=function(){t.history.back()}})}]).controller("loginCtrl",["$scope","$http","$window","cookie",function(e,t,n,i){e.submit=function(){console.log(e.username),console.log(e.password),t.post("http://10.16.155.28:81/news/php/index.php/login_api/login",{
//$http.post('http://localhost:81/news/php/index.php/login_api/login', {
params:{username:e.username,password:e.password}}).success(function(e){"failure"==e.status?alert("账号密码错误"):(i.setCookie("username",e.user_name),i.setCookie("token",e.info.token),n.location.href="#/index/1")})}}]).controller("registerCtrl",["$scope","$http","$window","cookie",function(e,t,n,i){e.submit=function(){
// console.log($scope.username);
// console.log($scope.password)
console.log(123),t.post("http://10.16.155.28:81/news/php/index.php/login_api/register",{params:{username:e.username,password:e.password}}).success(function(e){"failure"==e.status?alert("注册失败"):
// cookie.setCookie('username', data.user_name);
// cookie.setCookie('token', data.info.token);
// $window.location.href = '#/index/1';
console.log(e)})}}]).controller("insertCtrl",["$scope","$http","$window","cookie",function(e,t,n,i){e.title="",e.text="",e.submit=function(){t.get("http://10.16.155.28:81/news/php/index.php/news_api/insert_news",{params:{title:e.title,text:e.text}}).success(function(e){
// if (data.status == "failure") {
//     alert('账号密码错误');
// } else {
//     cookie.setCookie('username', data.user_name);
//     cookie.setCookie('token', data.info.token);
//     $window.location.href = '#/index/1';
// }
console.log(e)})}}]).controller("recommendCtrl",["$scope","$http","$window","$filter",function(e,t,n,i){
//详细页跳转逻辑
e.getDetail=function(e){n.location.href="#/detail/"+e},
//带遮罩层的弹窗提醒
e.isShowActionSheet=!1,e.showactionsheet=function(t){e.isShowActionSheet=!0},e.hideactionsheet=function(){e.isShowActionSheet=!1},
//数据请求
e.arrs=[],e.iswtoast=!1,e.add=function(){e.iswtoast=!0,t.get("http://10.16.155.28:81/news/php/index.php/news_api/show_detail_by_channel_id",{params:{channel_id:4}}).success(function(t){e.iswtoast=!1,
// console.log(data);
e.arrs=e.arrs.concat(t.news_list),
// console.log($scope.arrs)
//排序开关
e.sort=!1,e.upSort=function(){e.sort=!0,e.arrs=i("orderBy")(e.arrs,"title",e.sort)},e.downSort=function(){e.sort=!1,e.arrs=i("orderBy")(e.arrs,"title",e.sort)}})},e.add()}])}(),+function(){
//主模块
angular.module("newsApp",["routers","directives","controllers","services","ng.post"])}(),+function(){
///////
//组件 //
///////
var e=angular.module("directives",[]);
//选项卡头部
e.directive("wheader",[function(){return{templateUrl:"directive/wheader.html"}}]).directive("wsearch",[function(){return{templateUrl:"directive/wsearch.html"}}]).directive("wcarousel",[function(){return{templateUrl:"directive/wcarousel.html",link:function(e,t,n){new Swiper(".swiper-container",{loop:!0,autoplay:1e3,pagination:".swiper-pagination",paginationClickable:!0})}}}]).directive("wlogin",[function(){return{templateUrl:"directive/wlogin.html"}}]).directive("wactionsheet",[function(){return{templateUrl:"directive/wactionsheet.html"}}]).directive("wtoast",[function(){return{templateUrl:"directive/wtoast.html"}}]).directive("wgallery",[function(){return{templateUrl:"directive/wgallery.html"}}]).directive("wpanel",[function(){return{templateUrl:"directive/wpanel.html"}}])}(),+function(){
///////
//路由 //
///////
var e=angular.module("routers",["ui.router"]);e.config(["$stateProvider","$urlRouterProvider",function(e,t){
//首页
e.state("index",{url:"/index",controller:"indexCtrl",templateUrl:"template/index.html"}).state("index.1",{url:"/1",controller:"recommendCtrl",templateUrl:"template/recommend.html"}).state("index.2",{url:"/2",
// controller:'indexCtrl',
templateUrl:"template/hot.html"}).state("index.3",{url:"/3",
// controller:'indexCtrl',
templateUrl:"template/entertainment.html"}).state("detail",{url:"/detail/:id",controller:"detailCtrl",templateUrl:"template/detail.html"}).state("login",{url:"/login",controller:"loginCtrl",templateUrl:"template/login.html"}).state("register",{url:"/register",controller:"registerCtrl",templateUrl:"template/login.html"}).state("insert",{url:"/insert",controller:"insertCtrl",templateUrl:"template/insert.html"}),t.when("","/index/1")}]).run(["$http","cookie","$window",function(e,t,n){e.post("http://10.16.155.28:81/news/php/index.php/login_api/auto_login",{params:{username:t.getCookie("username"),token:t.getCookie("token")}}).success(function(e){console.log(e),"success"==e.status||(n.location.href="#/login")})}])}(),+function(){var e=angular.module("services",[]);e.service("cookie",["$document",function(e){return{setCookie:function(t,n){var i=10,o=new Date;o.setTime(o.getTime()+24*i*60*60*1e3),e[0].cookie=t+"="+n+";expires="+o},getCookie:function(t){var n,i=new RegExp("(^|)"+t+"=([^;]*)(;|$)");if(n=e[0].cookie.match(i))return n[2]}}}])}();