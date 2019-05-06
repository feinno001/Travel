<!-- 推荐组件 -->
<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for='item of recommendList' :key='item.id'>
        <img
          class="item-img"
          :src="item.imgUrl"
        >
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  data() {
    return {
      recommendList:[{
        id:'001',
        imgUrl:"https://imgs.qunarzz.com/sight/p0/1509/e8/e852a1e716eb509.water.jpg_110x110_b3c141ae.jpg",
        title:'宿迁三台山森林公园',
        desc:'这里最近很火哦，好多人都在点评它呢！'
      },{
        id:'002',
        imgUrl:"https://imgs.qunarzz.com/sight/p0/1509/e8/e852a1e716eb509.water.jpg_110x110_b3c141ae.jpg",
        title:'宿迁三台山森林公园',
        desc:'这里最近很火哦，好多人都在点评它呢！'
      },
      {
        id:'003',
        imgUrl:"https://imgs.qunarzz.com/sight/p0/1509/e8/e852a1e716eb509.water.jpg_110x110_b3c141ae.jpg",
        title:'宿迁三台山森林公园',
        desc:'这里最近很火哦，好多人都在点评它呢！'
      }]
    };
  }
};
</script>
<style lang='stylus' scoped>
@import '~styles/mixins.styl';
.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}

.item {
  overflow: hidden;
  display: flex;
  height: 1.9rem;

  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }

  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;

    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      ellipsis();
    }

    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
      ellipsis();
    }

    .item-button {
      line-height: 0.44rem;
      margin-top: 0.16rem;
      background: #ff9300;
      padding: 0 0.2rem;
      border-radius: 0.06rem;
      color: #fff;
    }
  }
}
</style>