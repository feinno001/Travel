<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :swiperList='swiperList'></home-swiper>
    <home-icons :iconList='iconList'></home-icons>
    <home-recommend :recommendList='recommendList'></home-recommend>
    <home-weekend :weekendList='weekendList'></home-weekend>
  </div>
</template>
<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
import Axios from "axios";
export default {
  name: "Home",
  data: function() {
    return {
      city: "",
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    };
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  mounted: function() {
    this.getHomeInfo();
  },
  methods: {
    getHomeInfo: function() {
      Axios.get("/api/index.json").then(this.getHomeInfoSuccess);
    },
    getHomeInfoSuccess(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        //所在城市
        this.city = data.city;
        //轮播图
        this.swiperList=data.swiperList;
        //icons
        this.iconList=data.iconList;
        //推荐数据
        this.recommendList=data.recommendList;
        //周末去哪儿
        this.weekendList=data.weekendList;
      }
    }
  }
};
</script>
<style scoped>
</style>