<template>
<mu-paper class="footer_fixed">
  <mu-bottom-nav :value="bottomNav" @change="handleChange">
    <mu-bottom-nav-item value="Recents" title="资讯" href="#/index/new/1" icon="restore"/>
    <mu-bottom-nav-item value="Favorites" title="玩家" href="#/index/player/2" icon="favorite"/>
    <mu-bottom-nav-item value="Nearby" title="英雄" href="#/index/hero/3" icon="location_on"/>
  </mu-bottom-nav>
</mu-paper>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'recents',
      id:''
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  },
  mounted(){
    // console.log(this.$route.params.id);
    this.id = this.$route.params.id;
    switch(this.id){
      case "1":
      this.bottomNav='recents';
      break;
      case "2":
      this.bottomNav='Favorites';
      break;
      case "3":
      this.bottomNav='Nearby';
      break;
    }
  }
}
</script>
<style type="text/css" scoped="">
  .footer_fixed{
    position:fixed;
     bottom:0;
     width:100%
  }
</style>