<template>
	<wchampion></wchampion>
</template>
<script>
	//import wchampion from "../wchampion.vue"
	var wchampion = require("../wchampion.vue")
	module.exports = {
		data:function(){
			return {
				name:'heros'
			}
		},
		methods:{
			
		},
		components:{
			wchampion:wchampion
		}
	}
</script>