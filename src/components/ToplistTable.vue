<template>
  <div class="container">
    <!-- 榜单分类 -->
    <div class="type-contain">
      <div class="topType" v-for="(item, index) in typeList" :key="index">
        <div class="type">
          <img :src="item.coverImgUrl" alt="" />
          <div class="text">
            <div class="name">{{ item.name }}</div>
            <div class="icon">
              <span class="iconfont icon-bofang"></span>
              <span class="iconfont icon-shoucang"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 榜单列表 -->
    <div class="list-contain">
      <!-- 循环出榜单种类 -->
      <div class="toplist" v-for="(items, index) in topListData" :key="index">
        <!-- 单个榜单列表 -->
        <div
          class="list"
          v-for="(item, index) in items"
          :key="index"
          :class="{ bg: index % 2 == 0 }"
        >
          <!-- 序号 -->
          <div>
            <span :class="{ active: index < 3 }">{{ index + 1 }}</span>
          </div>
          <!-- 歌名及功能图标 -->
          <div>
            <div class="name">{{ item.name }}</div>
            <div class="icon">
              <span class="iconfont icon-bofang"></span>
              <span class="iconfont icon-add"></span>
              <span class="iconfont icon-shoucang"></span>
            </div>
          </div>
        </div>
        <!-- 查看更多 -->
        <div class="more">
          <span>查看更多></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      topListData: [], //榜单数据
      typeList: [], //榜单分类数据
      typeId: [2884035, 3779629, 19723756], //榜单类型ID
    };
  },
  created() {
    this.getTopListType();
    this.getTopListData();
  },
  methods: {
    // 获取榜单分类数据
    async getTopListType() {
      const res = await this.$http({
        url: "/toplist",
      });
      // console.log(res.data.list.slice(0,3));
      this.typeList = res.data.list.slice(0, 3);
      console.log(this.typeList);
    },
    // 获取各类榜单排行榜数据
    async getTopListData() {
      for (var id of this.typeId) {
        const res = await this.$http({
          url: `/top/list?id=${id}`,
        });
        // console.log(res.data.playlist.tracks);
        this.topListData.unshift(res.data.playlist.tracks.slice(0, 10));
      }
      console.log(this.topListData);
    },
  },
};
</script>
<style lang="less" scoped>
.container {
  margin: 20px 0 30px 0;
  border: 1px solid #ccc;
  border-right: 0;
  // 榜单分类
  .type-contain {
    display: flex;
    .topType {
      display: flex;
      background: #f5f5f5;
      width: 100%;
      border-right: 1px solid #ccc;
      .type {
        padding: 20px 0 20px 20px;
        display: flex;
        > img {
          width: 80px;
          height: 80px;
        }
        > img:hover {
          cursor: pointer;
        }
        .text {
          margin-left: 10px;
          .name {
            font-size: 14px;
            font-weight: bolder;
            height: 32px;
            line-height: 32px;
          }
          .name:hover {
            cursor: pointer;
            text-decoration: underline;
          }
          .icon {
            span:first-child {
              padding-right: 10px;
            }
            .iconfont {
              font-size: 22px;
              color: #a5a5a5;
            }
            .iconfont:hover {
              color: #6e6c6c;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  // 榜单列表
  .list-contain {
    display: flex;
    // 循环出榜单种类
    .toplist {
      width: 100%;
      background: #f5f5f5;
      border-right: 1px solid #ccc;
      // 单个榜单列表
      .list {
        border-top: 1px solid #ccc;
        height: 35px;
        line-height: 35px;
        width: 220px;
        padding-left: 14px;
        display: flex;
        // 序号
        > div:first-child {
          text-align: right;
          width: 20px;
          color: #666666;
          .active {
            color: #c80d0c;
          }
        }
        // 歌名及功能图标
        > div:last-child {
          font-size: 12px;
          padding-left: 10px;
          width: 180px;
          display: flex;
          justify-content: space-between;
          .name {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .name:hover {
            text-decoration: underline;
            cursor: pointer;
          }
          .icon {
            display: none;
            .iconfont {
              padding-left: 5px;
              font-size: 18px;
              font-weight: bold;
              color: #a5a5a5;
            }
            .iconfont:hover {
              cursor: pointer;
              color: #6e6c6c;
            }
          }
        }
      }
      // 斑马纹背景
      .bg {
        background: #e8e8e8;
      }
      .list:hover {
        > div:last-child {
          .icon {
            display: block;
          }
        }
      }
      // 查看更多
      .more {
        height: 35px;
        line-height: 35px;
        border-top: 1px solid #ccc;
        font-size: 12px;
        text-align: right;
        padding-right: 30px;
        background: #e8e8e8;
        > span:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>