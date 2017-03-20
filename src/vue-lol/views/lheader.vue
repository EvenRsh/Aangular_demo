<template>
	<mu-appbar :title="Title" class="header_fixed" >
		<mu-icon-button icon='menu' slot="left"/>
		<mu-icon-button icon='expand_more' slot="right"/>
	</mu-appbar>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				Title:'资讯'
			}
		},
		mounted(){
			console.log(this.Title);
		}
	}
</script>
<style type="text/css" scoped="">
	.header_fixed{
		position: fixed;
		top: 0;
		text-align: center;
	}
</style>