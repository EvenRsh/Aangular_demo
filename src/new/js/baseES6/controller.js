+(function() { 
   ////////
//控制器 //
////////
var controllers = angular.module('controllers', []);
//首页主控制器
controllers.controller('indexCtrl', ['$scope', '$window', 'cookie', function($scope, $window, cookie) {


        //tab 2层路由开关
        $scope.tabSelected = 1;
        $scope.changeTab = (a) => {
                $scope.tabSelected = a;
                $window.location.href = `#/index/` + $scope.tabSelected;
            }
            //搜索栏数据控制
        $scope.searchValue = "";
        $scope.isSearch = false;
        $scope.search = () => {
            $scope.isSearch = true;
        }
        $scope.cancel = () => {
            $scope.isSearch = false;
            $scope.searchValue = "";
        }


    }])
    //详情页detail
    .controller('detailCtrl', ['$scope', '$window', '$http', '$state', function($scope, $window, $http, $state) {
        $http.get('http://10.16.155.28:81/news/php/index.php/news_api/show_detail', {
            params: {
                id: $state.params.id
            }
        }).success((data) => {
            // console.log(data);
            var obj = data.news_list[0]
            $scope.name = obj.channel_name;
            $scope.title = obj.title;
            $scope.text = obj.text;
            $scope.isShow = false;
            $scope.imgUrl = `./img/28.jpg`;
            $scope.showPic = (url) => {
                $scope.isShow = true;
                $scope.imgUrlshow = url;
            }
            $scope.hidePic = () => {
                $scope.isShow = false;
                $scope.imgUrlshow = '';
            }
            $scope.goback = () => {
                $window.history.back();
            }
        })
    }])
    //loginCtrl 
    .controller('loginCtrl', ['$scope', '$http', '$window', 'cookie', function($scope, $http, $window, cookie) {
        $scope.submit = () => {
            console.log($scope.username);
            console.log($scope.password)
            $http.post('http://10.16.155.28:81/news/php/index.php/login_api/login', {
                //$http.post('http://localhost:81/news/php/index.php/login_api/login', {
                params: {
                    username: $scope.username,
                    password: $scope.password
                }
            }).success((data) => {
                if (data.status == "failure") {
                    alert('账号密码错误');
                } else {
                    cookie.setCookie('username', data.user_name);
                    cookie.setCookie('token', data.info.token);
                    $window.location.href = '#/index/1';
                }

            })
        }
    }])
    //registerCtrl 
    .controller('registerCtrl', ['$scope', '$http', '$window', 'cookie', function($scope, $http, $window, cookie) {
        $scope.submit = () => {
            // console.log($scope.username);
            // console.log($scope.password)
            console.log(123); 
            $http.post('http://10.16.155.28:81/news/php/index.php/login_api/register', {
                params: {
                    username: $scope.username,
                    password: $scope.password
                }
            }).success((data) => {
                if (data.status == "failure") {
                    alert('注册失败');
                } else {
                    // cookie.setCookie('username', data.user_name);
                    // cookie.setCookie('token', data.info.token);
                    // $window.location.href = '#/index/1';
                console.log(data);
                }
            })
        }
    }])
    //insertCtrl 
    .controller('insertCtrl', ['$scope', '$http', '$window', 'cookie', function($scope, $http, $window, cookie) {
        $scope.title = '';
        $scope.text = '';
        $scope.submit = () => {
            $http.get('http://10.16.155.28:81/news/php/index.php/news_api/insert_news', {
                params: {
                    title: $scope.title,
                    text: $scope.text
                }
            }).success((data) => {
                // if (data.status == "failure") {
                //     alert('账号密码错误');
                // } else {
                //     cookie.setCookie('username', data.user_name);
                //     cookie.setCookie('token', data.info.token);
                //     $window.location.href = '#/index/1';
                // }
                console.log(data)
            })
        }
    }])
    //recommendCtrl 推荐
    .controller('recommendCtrl', ['$scope', '$http', '$window', '$filter', function($scope, $http, $window, $filter) {
        //详细页跳转逻辑
        $scope.getDetail = (a) => {
                $window.location.href = `#/detail/` + a;
            }
            //带遮罩层的弹窗提醒
        $scope.isShowActionSheet = false;
        $scope.showactionsheet = (a) => {
            $scope.isShowActionSheet = true;
        }
        $scope.hideactionsheet = () => {
            $scope.isShowActionSheet = false;
        }

        //数据请求
        $scope.arrs = [];
        $scope.iswtoast = false;
        $scope.add = () => {
            $scope.iswtoast = true;
            $http.get('http://10.16.155.28:81/news/php/index.php/news_api/show_detail_by_channel_id', {
                params: {
                    channel_id: 4
                }
            }).success((data) => {
                $scope.iswtoast = false;
                // console.log(data);
                $scope.arrs = $scope.arrs.concat(data.news_list);
                // console.log($scope.arrs)
                //排序开关
                $scope.sort = false;
                $scope.upSort = () => {
                    $scope.sort = true;
                    $scope.arrs=$filter('orderBy')($scope.arrs, 'title', $scope.sort);
                }
                $scope.downSort = () => {
                    $scope.sort = false;
                    $scope.arrs=$filter('orderBy')($scope.arrs, 'title', $scope.sort);
                }
                // $scope.arr2 = 
                // console.log($scope.arr2)
                // $scope.arrs = $scope.arr2;
            })
        }
        $scope.add();
    }]);
})();
