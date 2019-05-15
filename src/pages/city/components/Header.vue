<!--  -->
<template>
  <div class="header">
    城市选择
    <div>
      <router-link to="/">
        <div class="iconfont header-back">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CityHeader",
  data() {
    return {};
  }
};
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl';

.header {
  position: relative;
  overflow: hidden;
  height: $headerHeight;
  line-height: 0.86rem;
  text-align: center;
  color: #ffffff;
  background: $bgColor;
  font-size: 0.32rem;

  .header-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.64rem;
    text-align: center;
    font-size: 0.4rem;
    color: #ffffff;
  }
}
</style>