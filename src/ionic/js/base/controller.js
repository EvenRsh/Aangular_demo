////////
//控制器 //
////////
var controllers = angular.module('controllers', []);
//首页主控制器
controllers.controller('indexCtrl', ['$scope', '$window','cookie','$ionicActionSheet','$ionicLoading',`$timeout`,function($scope, $window,cookie,$ionicActionSheet,$ionicLoading,$timeout) {
    //判断是否已登录
    if(!cookie.getCookie('token')){
        $window.location.href = `#/login`;
    }else{
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
       $scope.show = ()=>{
          $ionicActionSheet.show({
            buttons:[{
                text:`音乐`
            },
            {
                text:`wift`
            },
            {
                text:`数据`
            },
            {
                text:`文件管理`
            }],
            titleText: 'Modify your album',
            cancelText: '取消',
            buttonClicked: (index) => {
                // console.log(index);
                $scope.checked(index);
                // if(index === 0){
                //     console.log('音乐')
                // }
               // return true;
             }
          })  
       }
       $scope.checked = (index)=>{
            let opt = [{num:0,title:'音乐'},{num:1,title:'wift'},{num:2,title:'数据'},{num:3,title:'文件管理'},];
            opt.forEach(function(item,idx){
                // console.log(idx,item);
                if(index == item.num){
                    console.log(item.title)
                }
            })         
       }
       $scope.loading = ()=>{
            $ionicLoading.show(
                {
                    template:`<img src="img/28.jpg" class="rotate"/> <style>
                        .rotate{
                            width:50px;
                            animation:rotateImg .1s infinite;
                        }            
                        @keyframes rotateImg{
                            from{
                                transform:rotate(0deg) ;
                            }
                            to{
                                transform:rotate(360deg) ;
                            }
                        }

                    </style>`
                }
            );
            $timeout(
                ()=>{
                    $ionicLoading.hide()
                },10000
                )
       }
       
    }
}])
//详情页detail
.controller('detailCtrl', ['$scope', '$window','$http','$state', function($scope, $window,$http,$state) {
   $http.get('http://10.16.155.28:81/news/php/index.php/news_api/show_detail',{
    params:{
        id:$state.params.id
    }
   }).success((data)=>{
        console.log(data);
        var obj=data.news_list[0]
        $scope.name = obj.channel_name;
        $scope.title = obj.title;
        $scope.text = obj.text;
   })
}])
//loginCtrl 
.controller('loginCtrl', ['$scope','$http', '$window','cookie', function($scope, $http,$window,cookie) {
        $scope.submit = ()=> {
        console.log($scope.username);
        console.log($scope.password)
        $http.post('http://10.16.155.28:81/news/php/index.php/login_api/login', {
        //$http.post('http://localhost:81/news/php/index.php/login_api/login', {
            params: {
                username: $scope.username,
                password: $scope.password
            }
        }).success((data)=> {
            if(data.status =="failure"){
                alert('账号密码错误');
            }else{
                cookie.setCookie('username', data.user_name);
                cookie.setCookie('token', data.info.token);
                $window.location.href = '#/index/1';
            }

        })
    }
}])
//recommendCtrl 推荐
.controller('recommendCtrl', ['$scope','$http', '$window', function($scope, $http,$window) {
    //详细页跳转逻辑
    $scope.getDetail=(a)=>{
        $window.location.href = `#/detail/`+a;
    }
    //带遮罩层的弹窗提醒
    $scope.isShowActionSheet = false;
    $scope.showactionsheet = (a)=>{
        $scope.isShowActionSheet = true;
    }
    $scope.hideactionsheet = ()=>{
        $scope.isShowActionSheet = false;
    }
    //排序开关
    $scope.sort = false;
    $scope.upSort = ()=>{
        $scope.sort=true;
    }
    $scope.downSort = ()=>{
        $scope.sort=false;
    }
    //数据请求
    $scope.arrs = [];
    $scope.iswtoast = false;
    $scope.add = ()=>{
        $scope.iswtoast = true;
        $http.get('http://10.16.155.28:81/news/php/index.php/news_api/show_detail_by_channel_id',{
            params:{
                channel_id:6
            }
        }).success((data)=>{
            $scope.iswtoast = false;
            console.log(data);
            $scope.arrs = $scope.arrs.concat(data.news_list);
        })
    }
    $scope.add();
}]);
