<template>
	<mu-list>
    <!-- <mu-sub-header>今天</mu-sub-header> -->
    <mu-list-item :title="arr.title" v-for="arr in arrs">
      <mu-avatar :src="arr.image_url_small" slot="leftAvatar"/>
      <span slot="describe">
        <span style="color: rgba(0, 0, 0, .87)"></span>
        {{arr.summary}} 
      </span>
    <!--   <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
        <mu-menu-item title="回复" />
        <mu-menu-item title="标记" />
        <mu-menu-item title="删除" />
      </mu-icon-menu> -->
    </mu-list-item>
    <!-- <mu-divider inset/>
    <mu-list-item title="Alex Qin">
      <mu-avatar :src="avatar" slot="leftAvatar"/>
      <span slot="describe">
        <span style="color: rgba(0, 0, 0, .87)">看电影啊</span> <br/>
        我们去看电影，最近有部烂片上映，又有吐槽的了
      </span>
      <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
        <mu-menu-item title="回复" />
        <mu-menu-item title="标记" />
        <mu-menu-item title="删除" />
      </mu-icon-menu>
    </mu-list-item>
    <mu-divider inset/>
    <mu-list-item title="LOL">
      <mu-avatar :src="avatar" slot="leftAvatar"/>
      <span slot="describe">
        <span style="color: rgba(0, 0, 0, .87)">去打游戏啊</span><br/>
        周末一起 LOL
      </span>
      <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
        <mu-menu-item title="回复" />
        <mu-menu-item title="标记" />
        <mu-menu-item title="删除" />
      </mu-icon-menu>
    </mu-list-item>
    <mu-divider inset/>
    <mu-list-item title="Myron Liu">
      <mu-avatar :src="avatar" slot="leftAvatar"/>
      <span slot="describe">
        <span style="color: rgba(0, 0, 0, .87)">哇去</span><br/> 实在编不下去，这就是个demo
      </span>
      <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
        <mu-menu-item title="回复" />
        <mu-menu-item title="标记" />
        <mu-menu-item title="删除" />
      </mu-icon-menu>
    </mu-list-item> -->
  </mu-list>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				arrs:''
			}
		},
    computed:{
      // arrs:function(){
      //   return this.$store.state.newslist
      // }
    },
    mounted:function(){
      this.$http.jsonp('http://localhost/ng/vue-lol/test.php', {
                  params: {
                      // header: "78710-B0810-777C7-C9A85",
                      callback: "JSON_CALLBACK",
                      url: 'http://qt.qq.com/php_cgi/news/php/varcache_getnews.php?id=12&page=0&plat=ios&version=33'
                  }
              }).then(function(data) {
                  // console.log(data.data)
                  
                  this.arrs=data.data.list;
              })
      
    }
	}
</script>