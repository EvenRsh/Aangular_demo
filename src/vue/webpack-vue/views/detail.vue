<template>
<div>
	<router-link to="/list">list</router-link>
	<p>{{name}}</p>
</div>		
</template>
<script type="text/javascript">
	module.exports={
		data:function(){
			return {
				name:'detail'
			}
		}
	}
</script>
<style type="text/css" scoped>
	p{
		color: red
	}
</style>