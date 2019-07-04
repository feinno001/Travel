<template>
  <div class="container" @click="handelGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item,index) of imgs" :key="index">
          <img class="gallary-img" :src="item" />
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonGallary",
  props: {
    imgs: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      swiperOption: {
        //图片显示分页符号
        pagination: ".swiper-pagination",
        paginationType: "fraction",
        //监听父元素变化，自身跟着变化
        observeParents: true,
        observer: true
      }
    };
  },
  methods: {
    handelGallaryClick: function() {
      this.$emit("close");
    }
  }
};
</script>
<style lang='stylus' scoped>
.container >>> .swiper-container
  overflow inherit
.container
  display flex
  flex-direction column
  justify-content center
  z-index 99
  position fixed
  left 0
  right 0
  top 0
  bottom 0
  background #000
  .wrapper
    height 0
    width 100%
    padding-bottom 100%
    .gallary-img
      width 100%
    .swiper-pagination
      color #ffffff
      bottom -1rem
</style>