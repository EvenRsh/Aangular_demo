$(function(){
	var _obj = {
		baseDom:'.products1>ul>li',
		cloneSize: 20,
		url: 'libs/data/products.txt',
		pageContainer: '#pagination-demo1',
		page: true
	};
	var products1 = new cloneDom(_obj);
	

	$('.products1').click(function(evt){
		if($(evt.target).is(':button')){
			//{"id": 1, "proName": "thinkpad t001", "price": "5", "img": "https://img.alicdn.com/bao/uploaded/i8/TB1gL68NpXXXXbhXpXXjzzE.FXX_110027.jpg_b.jpg"},
			var _data = $(evt.target).closest('li').data('model');
			//取到 dom 节点上的 guid
			var _guid = $(evt.target).closest('li').data('guid');
			// 把 guid 给到 dom 节点的数据源
			_data.guid = _guid;
			//定义空数组用于存放 cookie 数据源
			var _array = [];
			//获取 cookie
			var _cookie = $.cookie('cart');
			var _flag = false;
			//cookie 存在的情况
			if(_cookie){
				_array = JSON.parse(_cookie);
				//判断当前要添加到购物车的商品存不存在购物车当中
				$.each(_array, function(_index, _obj){
					if(_obj.guid == _guid){
						_obj.count += 1;
						_flag = true;
						return true;
					}
				})
				//$.inArray
			} 
			if(!_flag){
				_data.count = _data.count || 1;
				_array.push(_data);
			}
			$.cookie('cart', JSON.stringify(_array));
		}
	})
})