<template>
  <div class="swiper-container have_heaer">
    <swiper :options="swiperOption" class="">
      <swiper-slide v-for="slide in swiperSlides" :key="slide.id"><img :src="slide.image_url_big" :style="{width:'100%',height: 'auto'}"/></swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script type="text/javascript">
  export default {
  name: 'carrousel',
  data() {
    return {
      swiperOption: {
        loop:true,
        autoplay: 1000,
        setWrapperSize :true,
        pagination : '.swiper-pagination',
        paginationClickable :true,
        mousewheelControl : true,
        observeParents:true,
      },
      swiperSlides: []
    }
  },
  computed:{
     // swiperSlides: function() {
     //          //state
     //          return this.$store.state.bannerNews
     //          //getters
     //          // return this.$store.getters.getExchange
     //        }
  },
  mounted() {
    // var self = this;
    this.$http.jsonp('http://localhost/ng/vue-lol/test.php', {
                  params: {
                      // header: "78710-B0810-777C7-C9A85",
                      callback: "JSON_CALLBACK",
                      url: 'http://qt.qq.com/static/pages/news/phone/c13_list_1.shtml'
                  }
              }).then(function(data) {
                  // console.log(data)
                  this.swiperSlides=data.data.list;
              })
    
  }
}
</script>
<style type="text/css" scoped="">
  .have_heaer{
    margin-top:56px;
  }
</style>