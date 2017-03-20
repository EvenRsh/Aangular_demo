<template>
	<mu-text-field icon="search" class="appbar-search-field" slot="right" hintText="请输入搜索内容" v-model="searchName" @click="search()" />
</template>
<script>
	export default {
		replace: false,
		data() {
			return {
				searchName: "hello"
			}
		},
		computed: {
			token() {
				return this.$store.state.token;
			}
		},
		methods: {
			search() {
				// var self = this;
				/*$.ajax({
					url: "http://lolapi.games-cube.com/UserArea?keyword=" + this.searchName,
					type: "GET",
					headers: {
						"DAIWAN-API-TOKEN": self.token
					},
					success: function(data) {
						console.log(JSON.stringify(data));
					}
				});*/
				console.log('123')
				this.$http.get('http://lolapi.games-cube.com/UserArea',{
					params:{
						keyword:encodeURI(this.searchName),
					},
					headers: {
						"DAIWAN-API-TOKEN": this.token
					},
				}).then(function(data){
					console.log(data.data);
				})
			}
		},
		mounted() {
			this.search()
		}
	}
</script>
<style scoped>
</style>