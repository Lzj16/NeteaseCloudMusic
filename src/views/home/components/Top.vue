<template>
  <div class="top-bar">
    <!-- 网易云图标及标题 -->
    <div class="title">
      <a href="#">
        <div class="logo">
          <img
            src="https://s1.music.126.net/style/favicon.ico?v20180823"
            alt=""
          />
        </div>
        <div class="text">网易云音乐</div>
      </a>
    </div>
    <!-- 顶部导航菜单 -->
    <div class="top-nav">
      <li
        v-for="(item, index) in topNavs"
        :key="index"
        @click="clickNav(item.path, index)"
        :class="{ active: currentIndex == index, found: index == 0 }"
      >
        {{ item.text }}
      </li>
    </div>
    <!-- 搜索框 -->
    <div class="srch">
      <div class="icon"><img src="@/assets/search.png" alt="" /></div>
      <input placeholder="音乐/视频/电台/用户" />
    </div>
    <!-- 创作者中心 -->
    <div class="creater">创作者中心</div>
    <!-- 登录 -->
    <div class="login">
      <a>登录</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 主页导航及对用的路由路径
      topNavs: [
        { text: "发现音乐", path: "/discover" },
        { text: "我的音乐", path: "/my" },
        { text: "朋友", path: "/friend" },
        { text: "商城", path: "/my" },
        { text: "音乐人", path: "/my" },
        { text: "下载客户端", path: "/my" },
      ],
      // 当前选中的导航索引
      currentIndex: null,
    };
  },
  created(){
    this.currentIndex = sessionStorage.getItem('currentIndex') || 0
  },
  methods: {
    // 点击顶部导航栏
    clickNav(activePath, index) {
      // console.log(index);
      this.$router.push(activePath);
      sessionStorage.setItem('currentIndex',index)
      this.currentIndex = index
    },
  },
};
</script>
<style lang="less" scoped>
.top-bar {
  display: flex;
  width: 1080px;
  justify-content: center;
  height: 70px;
  line-height: 70px;
  // 标题
  .title {
    width: 200px;
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      .logo {
        img {
          display: flex;
          align-items: center;
          margin-right: 10px;
        }
      }
      .text {
        font-size: 24px;
        font-family: Arial, Helvetica, sans-serif;
        color: #fff;
        letter-spacing: 5px;
      }
    }
  }
  // 导航
  .top-nav {
    display: flex;
    height: 70px;
    li {
      list-style: none;
      padding: 0 20px;
      text-align: center;
      color: #868585;
      font-size: 14px;
    }
    li:hover {
      background: #000;
      cursor: pointer;
      color: #fff;
    }
    .active {
      background: #000;
      border-bottom: 4px solid #c20c0c;
      a {
        color: #fff;
      }
    }
    .found {
      border-bottom: none;
    }
  }
  // 搜索
  .srch {
    display: flex;
    .icon {
      width: 30px;
      height: 32px;
      background: #fff;
      margin: auto 0;
      display: flex;
      border-radius: 18px 0 0 18px;
      margin-left: 30px;
      img {
        width: 30px;
      }
    }
    input {
      width: 130px;
      height: 30px;
      margin: auto 0;
      border-radius: 0 18px 18px 0;
      border: none;
      outline: none;
      margin-right: 10px;
    }
    input::-webkit-input-placeholder {
      color: #ccc;
      font-size: 12px;
    }
  }
  // 创作者中心
  .creater {
    width: 90px;
    height: 30px;
    line-height: 30px;
    margin: auto 0;
    text-align: center;
    color: #cccccc;
    font-size: 12px;
    border: 1px solid#4f4f4f;
    border-radius: 15px;
  }
  .creater:hover {
    color: #fff;
    border-color: #fff;
    cursor: pointer;
  }
  // 登录
  .login {
    margin-left: 20px;
    a {
      color: #787878;
      font-size: 12px;
      text-decoration: none;
    }
    a:hover {
      border-bottom: 1px solid #5e5c5c;
      color: #5e5c5c;
      cursor: pointer;
    }
  }
}
</style>