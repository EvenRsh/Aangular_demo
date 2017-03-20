<template>
	<div>
		<lheader></lheader>
		<router-view></router-view>
		<lfooter></lfooter>
	</div>
</template>
<script type="text/javascript">
	import lheader from './lheader.vue';
	import lfooter from './lfooter.vue';
	// import lswiper from './lswiper.vue';
	// import llist from './llist.vue';
	export default {
		data(){
			return{

			}
		},
		components:{
			lheader,
			lfooter
			// lswiper,
			// llist
		}
	}
</script>