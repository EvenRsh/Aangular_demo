<template>
	<div>
		<router-link to="/detail">detail</router-link>
		<p>{{name}}</p>

	</div>
</template>
<script type="text/javascript">
	module.exports={
		data:function(){
			return {
				name:'hello'
			}
		},
		mounted:function(){
			// console.log(this);
			this.$http.jsonp('http://localhost/ng/vue/webpack-vue/test.php',{
				params:{
					callback:"JSON_CALLBACK",
					url:'http://qt.qq.com/php_cgi/news/php/varcache_getnews.php?id=12&page=0&plat=ios&version=33'
				}
			}).then(function(data){
				console.log(data);
			},function(err){
				console.log(err);
			})
		}
	}
</script>
<style type="text/css" scoped>
	p{
		color: blue;
	}
</style>