//组件的模块
var directives = angular.module('directives', []);
directives.directive('wheader', function() {
	return {
		templateUrl: 'directive/wheader.html'
	}
}).directive('wsearch', function() {
	return {
		templateUrl: 'directive/wsearch.html'
	}
}).directive('wpanel', function() {
	return {
		templateUrl: 'directive/wpanel.html'
	}
}).directive('wactionsheet', function() {
	return {
		templateUrl: 'directive/wactionsheet.html'
	}
	//轮播图组件
	//从swipe html结构放进 demo里面把template里面
	//link是该轮播图的js代码逻辑
}).directive('wcarousel', function() {
	return {
		templateUrl: 'directive/wcarousel.html',
		link: function(scope, ele, attr) {
			var swiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				paginationClickable: true
			});
		}
	}
})