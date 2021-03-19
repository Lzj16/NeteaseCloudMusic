<template>
  <div class="content">
    <div class="left">
      <!-- 云音乐特色榜 -->
      <div class="character-music">
        <div class="title">云音乐特色榜</div>
        <div class="lists">
          <div
            class="list"
            v-for="(item, index) in typeList.slice(0, 4)"
            :key="index"
            :class="{ active: toplistId == item.id }"
            @click="clickTypeList(item.id, item.updateFrequency)"
          >
            <img :src="item.coverImgUrl" alt="" />
            <div class="tag">
              <div class="name">{{ item.name }}</div>
              <div class="updateFrequency">{{ item.updateFrequency }}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 全球媒体榜 -->
      <div class="global-music">
        <div class="title">全球媒体榜</div>
        <div class="lists">
          <div
            class="list"
            v-for="(item, index) in typeList.slice(4, 32)"
            :key="index"
            :class="{ active: toplistId == item.id }"
            @click="clickTypeList(item.id, item.updateFrequency)"
          >
            <img :src="item.coverImgUrl" alt="" />
            <div class="tag">
              <div class="name">{{ item.name }}</div>
              <div class="updateFrequency">{{ item.updateFrequency }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <router-view v-if="isRouterAlive"></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      typeList: [],
      toplistId: null,
      isRouterAlive: true,
    };
  },
  created() {
    this.getTopListType();
    this.toplistId = sessionStorage.getItem("toplistId") || 19723756;
    if(sessionStorage.getItem("secondCurrentText")){
      this.$router.push(`/discover/toplist?id=${this.toplistId}`);
    }
  },
  methods: {
    // 局部刷新
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
    },
    // 获取榜单分类数据
    async getTopListType() {
      const res = await this.$http({
        url: "/toplist",
      });
      console.log(res.data.list);
      this.typeList = res.data.list;
      // 如果sessionStorage里没有updateFrequency。将第一个元素的更新时间存进去
      if (!sessionStorage.getItem("updateFrequency")) {
        sessionStorage.setItem(
          "updateFrequency",
          this.typeList[0].updateFrequency
        );
      }
      // console.log(this.typeList[0].updateFrequency);
    },
    // 左侧榜单类型点击事件
    clickTypeList(id, updateFrequency) {
      // console.log(id);
      sessionStorage.setItem("toplistId", id);
      this.toplistId = id;
      this.$router.push({ path: "/discover/toplist", query: { id: id } });
      sessionStorage.setItem("updateFrequency", updateFrequency);
      this.reload();
    },
  },
};
</script>
<style lang="less" scoped>
.content {
  width: 1014px;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  margin: 0 auto;
  display: flex;
  min-height: 100vh;
  .left {
    width: 25%;
    border-right: 1px solid #ccc;
    background-color: #f9f9f9;
    .character-music,
    .global-music {
      margin-top: 30px;
      .title {
        font-size: 15px;
        font-weight: bold;
        line-height: 40px;
        padding-left: 15px;
      }
      .lists {
        .list {
          display: flex;
          padding-left: 20px;
          height: 60px;
          align-items: center;
          > img {
            width: 40px;
            height: 40px;
            // border: 1px solid red;
          }
          .tag {
            padding-left: 10px;
            .name {
              font-size: 13px;
              margin-bottom: 8px;
              // border: 1px solid red;
            }
            .updateFrequency {
              font-size: 12px;
              color: #999;
              // border: 1px solid red;
            }
          }
        }
        .list:hover {
          background-color: #e6e6e6;
          cursor: pointer;
        }
      }
      .active {
        background-color: #e6e6e6;
      }
    }
  }
  .right {
    width: 75%;
    background-color: #fff;
  }
}
</style>