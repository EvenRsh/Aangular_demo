//控制器模块
var controllers = angular.module('controllers', []);
//index是第一层路由的控制器
controllers.controller('indexCtrl', ['$scope', '$http', 'cookie', '$window', function($scope, $http, cookie, $window) {
	//频道的接口信息
	//url:http://localhost:81/news/php/index.php/news_api/get_channel
	$http.get('http://localhost:81/news/php/index.php/news_api/get_channel').success(function(data) {
		console.log(data)
		$scope.channels = data
	})

	//判断首页是否登录
	//我们如果已经登录的话，我们在cookie里面就会有登陆的用户信息
	//(1)从cookie里面那用户登录信息
	//(2)用$http发送用户名跟token发送给服务器进行校验
	//(3)如果校验成功，继续执行控制器下面的逻辑代码，如果不成功重定向到登录页面

	//url:http://localhost:81/news/php/index.php/login_api/auto_login
	//请求参数:username和token
	$http.post('http://localhost:81/news/php/index.php/login_api/auto_login', {
		params: {
			username: cookie.getCookie('username'),
			token: cookie.getCookie('token')
		}
	}).success(function(data) {
		console.log(data)
		if(data) {
			//success
		} else {
			$window.location.href = '#/login'
		}
	})

	//默认选择的选项卡
	$scope.tabs = 1;
	//每次点击的选项卡的时候，获取选项卡传进来的值
	$scope.changeTab = function(tabs) {
			$scope.tabs = tabs
		}
		//recommendCtrl控制推荐选项的逻辑
}]).controller('recommendCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
	//搜索框的默认状态
	$scope.isSearch = false
		//$scope.search获得焦点的时候，改变状态
	$scope.search = function() {
			$scope.isSearch = true
		}
		//$scope.cancel点击取消，改变状态
	$scope.cancel = function() {
			$scope.searchName = ''
			$scope.isSearch = false
		}
		//$scope.search和$scope.cancel都是为了改变$scope.isSearch的值，让其变成true和false从而决定weui-search-bar_focusing是否添加，改变搜索框的显示状态

	//遮罩层
	$scope.isShowActionSheet = false
		//$scope.showActionSheet和$scope.hideActionSheet都是改变$scope.isShowActionSheet的值
	$scope.showActionSheet = function() {
		$scope.isShowActionSheet = true
	}
	$scope.hideActionSheet = function() {
		$scope.isShowActionSheet = false
	}

	//搜索框默认为空
	$scope.searchName = '';

	//默认查看更多是隐藏状态
	$scope.isLoadMore = false

	//默认请求第一页
	$scope.page = 1;
	//默认列表数据为空
	$scope.news = [];
	//默认的排序，在遮罩层的选项里面去改变
	$scope.sort = true;
	$scope.loadMore = function() {
			//点击查看更多获取数据的时候，也要隐藏，直到数据完全加载才继续出现
			$scope.isLoadMore = false
				//请求新闻列表数据
				//$http.get('http://localhost:81/news/php/index.php/news_api/show_detail_by_channel_id', {
			$http.get('js/show_list.json', {
				params: {
					//每点击加载更多，就向接口请求下一页的数据
					page: $scope.page++,
					//要请求的频道id
					channel_id: $state.params.id
				}
			}).success(function(data) {
				console.log(data);
				//每请求一次接口，就往$scope.news新闻列表数组添加新的新闻数据
				$scope.news = $scope.news.concat(data.news_list)

				//改变查看更多的状态，如果请求成功则变为true
				$scope.isLoadMore = true
			})
		}
		//第一次进入页面的时候加载数据
	$scope.loadMore();
	//新闻详情页的控制器
}]).controller('detailCtrl', ['$scope', '$http', '$state', '$sce', function($scope, $http, $state, $sce) {
	//$state.params.id，获取recommend页面传过来新闻id，根据这个id向服务器请求对应新闻的详细内容
	console.log($state.params.id);
	//根据id（$state.params.id）从接口获取对应新闻的详细内容
	$http.get('js/show_detail.json', {
			params: {
				id: $state.params.id
			}
		}).success(function(data) {
			console.log(data)
				//也支持渲染html结构
				//$scope.html = $sce.trustAsHtml(data.news_list[0].text)
			$scope.new = data.news_list[0]
		})
		//预览图片的默认状态
	$scope.isGallery = false;
	//预览图片默认为空
	$scope.imgUrl = '';
	//预览图片根据点击图片获取对应的url然后再呈现对应的状态
	$scope.gallery = function(imgUrl) {
		$scope.isGallery = true
		$scope.imgUrl = imgUrl;
	}
}]).controller('insertCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.submit = function() {
		//获取前端用户输入的内容，然后用$http请求把数据提交给后端数据库
		console.log($scope.title)
		console.log($scope.text)
		$http.get('http://localhost:81/news/php/index.php/news_api/insert_news', {
			params: {
				title: $scope.title,
				text: $scope.text
			}
		}).success(function(data) {
			console.log(data)
		})
	}
}]).controller('loginCtrl', ['$scope', '$http', 'cookie', '$window', function($scope, $http, cookie, $window) {
	//一般登录的逻辑
	//(1)写好前端的登录注册页面
	//(2)从用户界面获取用户名和密码 ng-model=>$scope
	//(3)去翻后端文档找相应接口，接口文档一般有url（API）,请求参数和响应数据
	//(4)在控制器里面用$http（ajax的方法提交）提交用户名和密码，用post请求（它比较安全）
	//(5)根据接口返回的数据，渲染登录信息到前端页面，保存cookie登录信息（token,user_id）
	//自动登录的逻辑
	//(1)存我们后端返回的登录信息，一般存token,username,user_id,avatar,birth...
	//存进cookie
	//(2)注入cookie服务，用cookie的方法保存用户信息
	//注意事项：
	//如果是用angular的post请求，那么要区分它跟jq的post请求不同，jq的post请求是字符串，angular是一个对象
	//所以我们在这里面就引入ng.post这个模块去处理格式
	//引入<script src="js/ng-post.js" />
	//引入模块angular.module('newsApp', ['ng.post']

	//url:http://localhost:81/news/php/index.php/login_api/login
	//请求参数:username,password
	//相应参数:{"status":"failure","code":0}

	$scope.submit = function() {
		console.log($scope.username);
		console.log($scope.password)
		$http.post('http://localhost:81/news/php/index.php/login_api/login', {
			params: {
				username: $scope.username,
				password: $scope.password
			}
		}).success(function(data) {
			cookie.setCookie('username', data.user_name);
			cookie.setCookie('token', data.info.token);
			$window.location.href = '#/index/recommend/6'
		})
	}
}])