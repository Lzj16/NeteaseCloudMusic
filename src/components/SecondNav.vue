<template>
  <div class="second-nav">
    <div class="nav">
      <li
        v-for="(nav, index) in navs"
        :key="index"
        @click="clickSecondNav(nav.path,nav.text)"
        :class="{ active: secondCurrentText == nav.text }"
      >
        <div>{{ nav.text }}</div>
      </li>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navs: [
        { text: "推荐", path: "/discover/recomend" },
        { text: "排行榜", path: "/discover/toplist" },
        { text: "歌单", path: "/discover/playlist"  },
        { text: "主播电台", path: "/discover/djradio"  },
        { text: "歌手", path: "/discover/artist"  },
        { text: "新碟上架", path: "/discover/album"  },
      ],
      secondCurrentText: null,
    };
  },
  created(){
    this.secondCurrentText = sessionStorage.getItem('secondCurrentText') || '推荐'
    this.$router.push(this.navs[this.secondCurrentText])
  },
  methods:{
    clickSecondNav(activePath,text){
      console.log(text);
      this.$router.push(activePath);
      sessionStorage.setItem('secondCurrentText',text)
      this.secondCurrentText = text
    }
  }
};
</script>
<style lang="less" scoped>
.second-nav {
  width: 100%;
  height: 34px;
  background: #c20c0c;
  display: flex;
  justify-content: center;
  .nav {
    display: flex;
    justify-content: center;
    li {
      list-style: none;
      margin: auto 28px;
      div {
        display: flex;
        align-content: center;
        color: #fff;
        font-size: 12px;
        padding: 2px 10px;
      }
      div:hover {
        background: #9b0909;
        border-radius: 10px;
        cursor: pointer;
      }
    }
    .active{
        background: #9b0909;
        border-radius: 10px;
      }
  }
}
</style>