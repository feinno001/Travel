<template>
  <div>
    <div class="banner" @click="handelBannerClick">
      <img
        class="banner-img"
        src="//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg"
      />
      <div class="banner-info">
        <div class="banner-tittle">故宫(AAAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe626;</span>
          {{10+10}}
        </div>
      </div>
    </div>
    <CommonGallary :imgs="imgs" v-show="showGallary" @close="handelGallaryClose"></CommonGallary>
  </div>
</template>

<script>
import CommonGallary from "common/gallary/Gallary";
export default {
  name: "DeailBanner",
  data() {
    return {
      showGallary: false,
      imgs: [
        "//imgs.qunarzz.com/p/tts6/1803/43/18bbbac998388902.jpg_r_390x260x90_248d0cfa.jpg",
        "//imgs.qunarzz.com/p/tts4/1804/68/efa3a4393408f002.jpg_r_390x260x90_43bad027.jpg",
        "//imgs.qunarzz.com/p/tts1/1804/fd/5fd7733c3802b602.jpg_r_390x260x90_2b630244.jpg"
      ]
    };
  },
  methods: {
    handelBannerClick: function() {
      this.showGallary = true;
    },
    handelGallaryClose: function() {
      this.showGallary = false;
    }
  },
  components: {
    CommonGallary
  }
};
</script>
<style lang='stylus' scoped>
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
  .banner-img
    width 100%
  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height 0.6rem
    color #ffffff
    background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-tittle
      flex 1
      font-size 0.32rem
      padding 0 0.2rem
    .banner-number
      margin-top 0.14rem
      padding 0 0.4rem
      height 0.32rem
      line-height 0.32rem
      border-radius 0.2rem
      background rgba(0, 0, 0, 0.8)
      font-size 0.24rem
      .banner-icon
        font-size 0.24rem
</style>