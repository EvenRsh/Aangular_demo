;(function($){
	$.fn.cart = function(_opts){
		var _defalut = {
			cloneSize: 10
		};
		_defalut.baseDom = this;
		var opts = $.extend(true, _defalut, _opts);
		var self = this;
		var init = function(){
	  		//[{guid: xxx-xx}]
	  		opts.data = JSON.parse($.cookie('cart') || "[]");
	  		if(opts.data){
	  			new cloneDom(opts);
	  		}	
	  		//总金额初始值
	  		$('tfoot>tr>th').text(0);	  				
		}
		init();
  		this.resetCount = function(_evt){
			var total = 0;
  			$.each(opts.data, function(_index, _obj){
  				var _dom = self.getDom(_obj);
  				if(_dom && _dom[0] == $(_evt.target).closest('tr')[0]){
  					_obj.count = $(_evt.target).index() == 0 ? (_obj.count > 1 ? _obj.count - 1 : 1) : $(_evt.target).index() == 2 ? _obj.count + 1 : _obj.count;
  					$('span', $(_evt.target).closest('td')).eq(1).text(_obj.count);
  					$.cookie('cart', JSON.stringify(opts.data));
  					self.calculation();
  				}
  			})  			
  		}		

  		this.del = function(_evt){
			var total = 0;
  			$.each(opts.data, function(_index, _obj){
  				var _dom = self.getDom(_obj);
  				if(_dom && _dom[0] == $(_evt.target).closest('tr')[0]){
					if($(':checkbox', _dom).prop('checked')){
  						total -= _obj.price * _obj.count;
 					}  	
 					$('tfoot>tr>th').text(total);				
  					_dom.remove();
  					opts.data.splice(_index, 1);
  					$.cookie('cart', JSON.stringify(opts.data));
  				}
  			})
  		}

  		//计算
  		this.calculation = function(){

  			var total = 0;
  			$.each(opts.data, function(_index, _obj){
  				// total += _obj.price * _obj.count;
  				var _dom = self.getDom(_obj);
  				if(_dom){
  					if($(':checkbox', _dom).prop('checked')){
  						total += _obj.price * _obj.count;
  					}
  					$('td', _dom).eq(4).text(_obj.price * _obj.count);
  				}
  			})  
  			$('tfoot>tr>th').text(total);
		
  		}

  		this.getDom = function(_obj){
  			var _self = null;
  			$.each($(opts.baseDom), function(){
  				
  				// console.log(_obj.guid);
  				if($(this).data('guid') == _obj.guid){
  					_self = $(this);
  					return true;
  				}
  			})
  			return _self;
  		}  		  		

  		return this;
	}
})(jQuery)

;(function($){
	$.cart = function(_opts){
		var _defalut = {};
		var opts = $.extend(true, _defalut, _opts);
		var obj = {};
		obj.funA = function(){

			console.log(obj);
			obj.funB();
		}
		obj.funB = function(){

		}
		if(opts.callback && typeof opts.callback == 'function'){
			// opts.callback = function(_data){
			// 	_data.funA();
			// }

			opts.callback(obj)
		}
		return obj;
	}

	$.cart({
		callback: function(_data){
			_data.funB = 123;
			_data.funA();
		}
	})
})(jQuery)