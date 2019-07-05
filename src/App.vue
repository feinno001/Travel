<template>
  <div id="app">
    <!--缓存数据，利用exclude刨除不需要缓存的组件
    <keep-alive exclude="Detail">-->
    <keep-alive>
      <!--当前路由地址所对应的内容-->
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
<style>
</style>
