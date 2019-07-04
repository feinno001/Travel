<template>
  <div>
    <DetailBanner></DetailBanner>
    <DetailHeader></DetailHeader>
    <div class="content">
      <DetailList :list="list"></DetailList>
    </div>
  </div>
</template>

<script>
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";
export default {
  name: "Detail",
  data() {
    return {
      list: [
        {
          title: "成人票",
          children: [{ title: "成人三馆联票" }, { title: "成人五馆联票" }]
        },
        {
          title: "学生票",
          children: [{ title: "学生三馆联票" }, { title: "学生五馆联票" }]
        },
        {
          title: "儿童票",
          children: [{ title: "儿童三馆联票" }, { title: "儿童五馆联票" }]
        },
        {
          title: "特价票",
          children: [{ title: "特价三馆联票" }, { title: "特价五馆联票" }]
        }
      ]
    };
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  }
};
</script>
<style lang='stylus' scoped>
.content
  height 50rem
</style>