<template>
	<div class="have_header">
		<search></search>
	</div>
</template>
<script type="text/javascript">
	import search from "../lserach.vue"
	export default {
		data(){
			return{
				
			}
		},
		components:{
			search:search
		}
	}
</script>
<style type="text/css">
	.have_header{
		margin-top: 56px;
	}
</style>