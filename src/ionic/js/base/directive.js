///////
//组件 //
///////
var directives = angular.module('directives', []);
//选项卡头部
directives.directive('wheader', [function() {   
        return {
            templateUrl: 'directive/wheader.html'
        }
    }])
    //搜索栏
    .directive('wsearch', [function() {
        return {
            templateUrl: 'directive/wsearch.html',
        }
    }])
    //轮播图
    .directive('wcarousel', [function() {
        return {
            templateUrl: 'directive/wcarousel.html',
            link: function(scope, ele, attr) {
                var swiper = new Swiper('.swiper-container', {
                    loop: true,
                    autoplay: 1000,
                    pagination: '.swiper-pagination',
                    paginationClickable: true
                });
            }
        }
    }])
    //新闻列表
    .directive('wlogin', [function() {
        return {
            templateUrl: 'directive/wlogin.html',
        }
    }])
    //遮罩层弹窗
    .directive('wactionsheet', [function() {
        return {
            templateUrl: 'directive/wactionsheet.html',
        }
    }])
    //遮罩层loading
    .directive('wtoast', [function() {
        return {
            templateUrl: 'directive/wtoast.html',
        }
    }])
    //新闻列表
    .directive('wpanel', [function() {
        return {
            templateUrl: 'directive/wpanel.html',
        }
    }]);