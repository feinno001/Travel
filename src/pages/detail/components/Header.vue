<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  methods: {
    handleScroll: function() {
      const top = document.documentElement.scrollTop;
      if (top > 60) {
        //top在60-140之间header增加渐隐渐现效果
        let opacity = top / 140;
        //opacity最大值1
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = { opacity };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    }
  },
  activated: function() {
    window.addEventListener("scroll", this.handleScroll);
  },
  deactivated: function() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
.header-abs
  position absolute
  left 0.2rem
  top 0.2rem
  width 0.8rem
  height 0.8rem
  line-height 0.8rem
  text-align center
  border-radius 0.4rem
  background rgba(0, 0, 0, 0.8)
  .header-abs-back
    color #ffffff
    font-size 0.4rem
.header-fixed
  position fixed
  left 0
  right 0
  top 0
  height $headerHeight
  line-height $headerHeight
  text-align center
  color #ffffff
  background $bgColor
  font-size 0.32rem
  .header-fixed-back
    position absolute
    top 0
    left 0
    width 0.64rem
    text-align center
    font-size 0.4rem
    color #ffffff
</style>