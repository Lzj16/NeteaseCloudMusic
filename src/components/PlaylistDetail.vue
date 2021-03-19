<template>
  <div class="playlist">
    <!-- 顶部标题 -->
    <div class="header">
      <div class="title">
        <!-- 歌单图片 -->
        <div class="img">
          <img :src="TopListById.coverImgUrl" alt="" />
        </div>
        <!-- 右侧描述文字 -->
        <div class="header-right">
          <!-- 歌单名 -->
          <div class="toplistType">{{ TopListById.name }}</div>
          <!-- 更新时间 -->
          <div class="update">
            <span class="iconfont icon-biao"></span>最近更新：{{
              TopListById.updateTime | dateFormat
            }}<span>( {{ updateFrequency }} ）</span>
          </div>

          <!-- 播放添加收藏分享下载评论标签按钮 -->
          <div class="tag">
            <div>
              <button><span class="iconfont icon-bofang"></span>播放</button>
              <button><span class="iconfont icon-add"></span></button>
            </div>
            <button>
              <span class="iconfont icon-shoucang"></span>(
              {{ TopListById.subscribedCount }} )
            </button>
            <button>
              <span class="iconfont icon-fenxiang"></span>(
              {{ TopListById.shareCount }} )
            </button>
            <button><span class="iconfont icon-xiazai"></span>下载</button>
            <button>
              <span class="iconfont icon-pinglun"></span>(
              {{ TopListById.commentCount }} )
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 歌曲列表 -->
    <div class="list">
      <!-- 头部标题 -->
      <div class="list-title">
        <div>
          <div class="title">歌曲列表</div>
          <div class="number">{{ TopListById.trackCount }}首歌</div>
        </div>
        <div class="playcount">
          播放：<span>{{ TopListById.playCount }}</span
          >次
        </div>
      </div>
      <!-- 榜单列表 -->
      <div class="list-table">
        <!-- 表头 -->
        <div class="table-header">
          <div class="index"></div>
          <div class="title">标题</div>
          <div class="duration">时长</div>
          <div class="singer">歌手</div>
        </div>
        <!-- 表格 -->
        <div
          class="table-row"
          v-for="(item, index) in TopListById.tracks"
          :key="index"
          :class="{ rowIndex: index < 3, rowColor: index % 2 == 0 }"
        >
          <!-- 索引 -->
          <div class="index">{{ index + 1 }}</div>
          <!-- 歌曲 -->
          <div class="title">
            <!-- 歌曲图片 -->
            <img
              :src="item.al.picUrl"
              alt=""
              v-if="index < 3"
              :class="{ isMsg: index < 3 }"
            />
            <!-- 播放按钮 -->
            <div class="iconfont icon-bofang"></div>
            <!-- 歌名 -->
            <div class="song-name">
              <span>{{ item.name }}</span>
              <span class="alia" v-if="item.alia[0] || item.tns">
                - ( {{ item.alia[0] ? item.alia[0] : item.tns[0] }} )</span
              >
            </div>
            <!-- mv图标 -->
            <div class="mv" v-if="item.mv"><span class="iconfont icon-mv"></span></div>
          </div>
          <!-- 时长 -->
          <div class="duration">
            <!-- 分秒 -->
            <span>{{ item.dt | ms }}</span>
            <!-- 添加收藏播放下载图标 -->
            <span class="iconfont icon-add"></span>
            <span class="iconfont icon-shoucang"></span>
            <span class="iconfont icon-fenxiang"></span>
            <span class="iconfont icon-xiazai"></span>
          </div>
          <!-- 歌手 -->
          <div class="singer">{{ item.ar[0].name }}</div>
        </div>
      </div>
    </div>

    <!-- 评论 -->
    <div class="comment">
      <toplist-comments></toplist-comments>
    </div>
  </div>
</template>
<script>
import ToplistComments from '../components/ToplistComments'
export default {
  data() {
    return {
      TopListById: [], //歌单详情列表
      id: null, //歌单id
      updateFrequency: "", //歌单更新时间
    };
  },
  components:{
    ToplistComments
  },
  created() {
    // 获取路由传递的歌单id
    this.id = this.$route.query.id;
    // 加载获取歌单详情函数
    this.getTopListById();
  },
  methods: {
    // 通过歌单id获取歌单详情
    async getTopListById() {
      const res = await this.$http({
        url: `/top/list?id=${this.id}`,
      });
      console.log("res", res.data.playlist);
      this.TopListById = res.data.playlist;
      // 将sessionStorage里的更新时间取出
      this.updateFrequency = sessionStorage.getItem("updateFrequency");
    },
  },
};
</script>
<style lang="less" scoped>
.playlist {
  width: 91%;
  margin: 40px auto;
  // background: red;

  // 顶部标题
  .header {
    .title {
      display: flex;
      // 歌单图片
      > .img {
        width: 156px;
        height: 156px;
        border: 1px solid #ccc;
        > img {
          width: 150px;
          height: 150px;
          padding-left: 3px;
          padding-top: 3px;
        }
      }
      // 右侧描述文字
      .header-right {
        margin-left: 30px;
        // 歌单名
        .toplistType {
          font-size: 20px;
          letter-spacing: 1px;
          line-height: 40px;
          margin-top: 10px;
        }
        // 更新时间
        .update {
          font-size: 12px;
          line-height: 20px;
          color: #666;
          > .iconfont {
            margin-right: 3px;
          }
          > span:last-child {
            margin-left: 7px;
            color: #999;
          }
        }
        // 播放添加收藏分享下载评论标签按钮
        .tag {
          display: flex;
          margin-top: 30px;
          > div {
            height: 30px;
            display: flex;
            > button:first-child {
              border-right: 1px solid #999;
              border-radius: 5px 0 0 5px;
            }
            > button:last-child {
              border-radius: 0 5px 5px 0;
            }
            > button {
              color: #fff;
              // background-color: #3f8ed8;
              background: radial-gradient(at top, #4493dc, #2e7ecb);
            }
            > button:hover {
              background: #5493d3;
            }
          }
          > button {
            margin-left: 6px;
            border-radius: 5px;
            background: radial-gradient(at top, #fefefe, #f7f7f7);
            color: #333;
          }
          button {
            font-size: 12px;
            height: 32px;
            padding: 0 8px;
            border: 1px solid #ccc;
            outline: none;
            display: flex;
            align-items: center;
            .iconfont {
              font-size: 14px;
              font-weight: bold;
              margin-right: 4px;
            }
          }
          button:hover {
            cursor: pointer;
          }
        }
      }
    }
  }

  // 歌曲列表
  .list {
    margin-top: 30px;
    // 头部标题
    .list-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid #c20c0c;
      > div:first-child {
        display: flex;
        align-items: center;
        > .title {
          font-size: 20px;
          line-height: 40px;
          margin-right: 20px;
        }
        > .number {
          font-size: 13px;
          color: #666;
          padding-top: 6px;
        }
      }
      > .playcount {
        font-size: 13px;
        > span {
          color: #c20c0c;
        }
      }
    }
    // 榜单列表
    .list-table {
      border: 1px solid #ccc;
      // 表头
      .table-header {
        display: flex;
        line-height: 35px;
        align-items: center;
        background: radial-gradient(at top, #fdfdfd, #f0f0f0);
        font-size: 14px;
        border-bottom: 2px solid #ccc;
        > .index {
          width: 10%;
          padding-left: 10px;
        }
        > .title {
          width: 50%;
          border-left: 1px solid #ccc;
          border-right: 1px solid #ccc;
          padding-left: 10px;
        }
        > .duration {
          width: 15%;
          padding-left: 10px;
        }
        > .singer {
          width: 25%;
          border-left: 1px solid #ccc;
          padding-left: 10px;
        }
      }
      // 表格
      .table-row {
        display: flex;
        height: 30px;
        align-items: center;
        // 索引
        > .index {
          width: 10%;
          padding-left: 20px;
          font-size: 12px;
          color: #999;
        }
        // 歌曲
        > .title {
          width: 50%;
          padding-left: 2px;
          display: flex;
          align-items: center;
          // background: red;
          // 歌曲图片
          > img {
            width: 50px;
            height: 50px;
          }
          > img:hover {
            cursor: pointer;
          }
          > .iconfont {
            font-size: 16px;
            color: #999;
            padding-right: 10px;
          }
          > .iconfont:hover {
            cursor: pointer;
            color: #666;
          }
          // 歌名
          .song-name {
            font-size: 12px;
            color: #333;
            // background: red;
            max-width: 190px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            > .alia {
              color: #999;
            }
          }
          .song-name:hover {
            cursor: pointer;
            text-decoration: underline;
          }
          // mv图标
          .mv {
            background: #f5f5f5;
            border: 1px solid #ccc;
            width: 22px;
            height: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;
            margin-left: 4px;
            >.iconfont{
              color: #b30b0c;
              font-weight: bold;
            }
            >.iconfont:hover{
              cursor: pointer;
            }
          }
        }
        // 时长
        > .duration {
          width: 15%;
          padding-left: 18px;
          font-size: 12px;
          color: #333;
          // background: red;
          > .iconfont {
            display: none;
            padding-right: 5px;
            font-weight: bold;
            color: #999;
          }
          > .iconfont:hover {
            cursor: pointer;
            color: #666;
          }
        }
        // 歌手
        > .singer {
          width: 25%;
          padding-left: 16px;
          font-size: 12px;
          color: #333;
          // background: red;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        > .singer:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
      // 表格前三行高度
      .rowIndex {
        height: 70px;
        // background: red;
      }
      // 表格斑马纹设置
      .rowColor {
        background: #f5f5f5;
      }
      // 表格前三行歌曲图片右侧空间设置
      .isMsg {
        padding-right: 20px;
      }
      // 鼠标指向表格对应行显示图标按钮
      .table-row:hover {
        > .duration {
          .iconfont {
            display: inline-block;
          }
          > span:first-child {
            display: none;
          }
        }
      }
    }
  }

  // 评论
}
</style>