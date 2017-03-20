<template>
	<div>
		<p>123</p>
	</div>
</template>
<script type="text/javascript">
	
	// import llist from './llist.vue';
	export default {
		data(){
			return{

			}
		},
		components:{
			
		},
		computed:{
			token() {
				return this.$store.state.token;
			}
		}
		,
		methods:{
			getChampionDetail(){
				this.$http.get('http://lolapi.games-cube.com/GetChampionDetail',{
					headers: {
						"DAIWAN-API-TOKEN": this.token
					},
					params:{
						'champion_id':this.$route.params.id
					}
				}).then(function(data){
					console.log(data.data);
				})
			}
		},
		mounted(){
			console.log(this.$route.params.id);
			this.getChampionDetail()
		}
	}
</script>