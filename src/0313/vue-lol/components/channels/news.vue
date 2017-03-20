<template>
	<div>
		<wswiper></wswiper>
		<wlist></wlist>
	</div>
</template>
<script>
	var wswiper = require("../wswiper.vue")
	var wlist = require("../wlist.vue")
	module.exports = {
		components: {
			wswiper: wswiper,
			wlist: wlist
		}
	}
</script>