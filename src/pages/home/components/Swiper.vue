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
  data() {
    return {
      swiperOption: {
        //图片显示分页符号
        pagination: ".swiper-pagination",
        loop: true,
        autoplay: 3000
      },
      swiperList: [
        {
          id: "001",
          imgUrl: "https://img1.qunarzz.com/qs/1903/ef/f0ec348a8a7c5b02.jpg"
        },
        {
          id: "002",
          imgUrl: "https://img1.qunarzz.com/qs/1903/5d/9976906642666a02.jpg"
        }
      ]
    };
  }
};
</script>
<style lang='stylus' scoped>
#穿透样式scoped限制, 
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 54%;

  .swiper-img {
    width: 100%;
  }
}
</style>