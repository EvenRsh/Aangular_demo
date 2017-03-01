/*
    create by RH 2017 2.21

 */
;
(function() {
    var directives = angular.module(`directives`, []);
    directives.directive(`sffheader`, () => {
        return {
            templateUrl: `directive/sfheader.html`,
            scope: {
                color: "@",
                navs: "="
            },
            controller: function($scope) {
                $scope.color = 'purple'
                    // console.log($scope)
            },
            link: (scope, ele, attr) => {
                ele.find('.global-navTags').css({ backgroundColor: `red` });
            }
        }
    }).directive(`sfcontent`, () => {
        return {
            templateUrl: `directive/sfcontent.html`
        }
    }).directive(`sffooter`, () => {
        return {
            templateUrl: `directive/sffooter.html`
        }
    }).directive(`ngColor`, () => {
        return {
            link: (scope, ele, attr) => {
                console.log(attr.ngColor);
                // ele.css("backgroundColor",attr.ngColor);
            }
        }
    }).directive(`lunbotu`, () => {
        return {
            templateUrl: `directive/lunbotu.html`,
            scope: {
                imglists: "="
            },
            link: (scope, ele, attr)=> {
                    console.log(123)
               
                    new Swiper('.swiper-container', {
                        loop: true,
                        autoplay: 1000
                    });
                /*scope.$watch('imglists', function() {
                    var swiper = new Swiper('.swiper-container', {
                        loop: true,
                        pagination: '.swiper-pagination',
                        autoplay: 1000,
                        paginationClickable: true,
                        nextButton: '.swiper-button-next',
                        prevButton: '.swiper-button-prev'
                    });
                });*/
                // console.log(scope.$last);
                /*if(scope.$last) {
                        scope.$eval(function() {
                            //如果引入jquery和zepto时候的写法
                            //$('li').bind('click', function() {
                            //$(this).toggleClass('choosed')
                            //console.log('toggleClass')
                            //})
                           var swiper = new Swiper('.swiper-container', {
                        loop: true,
                        pagination: '.swiper-pagination',
                        autoplay: 1000,
                        paginationClickable: true,
                        nextButton: '.swiper-button-next',
                        prevButton: '.swiper-button-prev'
                    });
                        }())
                    }*/
            }
        }
    })


})();
