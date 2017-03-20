<template>
	<div class="have_header">
		<champion></champion>
	</div>
</template>
<script type="text/javascript">
	import champion from "../lchamaion.vue"
	export default {
		data(){
			return{

			}
		},
		components:{
			champion:champion
		}
	}
</script>
<style type="text/css" scoped>
	.have_header{
		margin-top: 56px;
	}
</style>