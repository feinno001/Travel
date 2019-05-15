<!--轮播图插件-->
<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  props: {
    swiperList: Array
  },
  data() {
    return {
      swiperOption: {
        //图片显示分页符号
        pagination: ".swiper-pagination",
        loop: true,
        autoplay: 3000
      }
    };
  }
};
</script>
<style lang='stylus' scoped>
#穿透样式scoped限制, .wrapper >>> .swiper-pagination-bullet-active {
  background: #fff;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31%;

  .swiper-img {
    width: 100%;
  }
}
</style>