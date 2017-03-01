//服务的模块
var services = angular.module('services', []);
services.service('cookie', ['$document', function($document) {
	return {
		setCookie: function(name, value) {
			var days = 10;
			var ex = new Date();
			ex.setTime(ex.getTime() + days * 24 * 60 * 60 * 1000);
			$document[0].cookie = name + "=" + value + ";expires=" + ex;
		},
		getCookie: function(name) {
			var a;
			var reg = new RegExp("(^|)" + name + "=([^;]*)(;|$)");
			if(a = $document[0].cookie.match(reg)) {
				return a[2];
			}
		}
	}
}])