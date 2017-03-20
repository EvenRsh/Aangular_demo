<template>
<div class="gridlist-demo-container">
  <mu-grid-list class="gridlist-demo">
    <!-- <mu-sub-header>英雄列表</mu-sub-header> -->
    <mu-grid-tile v-for="tile in list">
		<a :href="'#/index/chamaiondetail/'+tile.id" class="mu-grid-tile multiline">
      		<img :src="'http://cdn.tgp.qq.com/pallas/images/champions_id/'+tile.id+'.png'"/>
      	</a>
      <span slot="title">{{tile.title}}</span>
      <span slot="subTitle"> <b>{{tile.ename}}</b></span>
      <mu-icon-button icon="star_border" slot="action"/>
    </mu-grid-tile>
  </mu-grid-list>
</div>
</template>

<script>

export default {
  data () {
    return {
      list: []
    }
  },
  computed: {
	token() {
			return this.$store.state.token;
		}
	},
  methods:{
  	getChampionList(){
		this.$http.get("http://lolapi.games-cube.com/champion",{
			headers: {
				"DAIWAN-API-TOKEN": this.token
			}
		}).then(function(data){
			console.log(data.data.data);
			this.list = data.data.data;
		})
  	}
  },
  mounted(){
  	console.log('123');
  	this.getChampionList();
  }
}
</script>

<style>
.gridlist-demo-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.gridlist-demo{
  width: 500px;
  /*height: 450px;*/
  height: 100%;
  margin-bottom: 56px;
  overflow-y: auto;
}
</style>
