<template>
	<div></div>
</template>
<script>
	module.exports = {
		methods: {
			getChampionDetail: function() {
				//$routeParams $state
				this.$http.get("http://lolapi.games-cube.com/GetChampionDetail?champion_id=" + this.$route.params.id, {
					headers: {
						"DAIWAN-API-TOKEN": "E0220-BA83B-1E406-E0226"
					}
				}).then(function(data) {
					console.log(data)
				})
			}
		},
		mounted:function(){
			this.getChampionDetail()
		}
	}
</script>