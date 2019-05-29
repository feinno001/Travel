<template>
  <div>
    <ul class="list">
      <li
        class="item"
        v-for="item in letters"
        :key="item"
        :ref="item"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handelLeterClick"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  updated: function() {
    //取字母A到top的距离
    this.startY = this.$refs["A"][0].offsetTop;
  },
  computed: {
    letters: function() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  },
  methods: {
    //点击字母操作
    handelLeterClick: function(e) {
      this.$emit("change", e.target.innerText);
    },
    handleTouchStart: function() {
      this.touchStatus = true;
    },
    handleTouchMove: function(e) {
      if (this.touchStatus) {
        //限制touch操作太频繁，限流
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          //取手指当前位置到顶的的距离减去header区域和搜索区域距离
          const touchY = e.touches[0].clientY - 79;
          //获取当前手指距离到字母A的距离除以每个字母的大小取整，获得当前字母下标
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }, 16);
      }
    },
    handleTouchEnd: function() {
      this.touchStatus = false;
    }
  }
};
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;

  .item {
    line-height: 0.34rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>