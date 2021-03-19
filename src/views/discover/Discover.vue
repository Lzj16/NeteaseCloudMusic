<template>
  <div class="middle">
    <!-- 顶部导航栏 -->
    <div>
      <second-nav></second-nav>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    
  </div>
</template>
<script>
import SecondNav from "@/components/SecondNav";

export default {
  data() {
    return {};
  },
  components: {
    SecondNav,
  },
  methods: {
    download() {
      console.log("download");
    },
  },
};
</script>
<style lang="less" scoped>
</style>