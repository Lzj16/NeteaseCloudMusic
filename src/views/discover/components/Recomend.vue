<template>
  <div class="contain">
    <!-- 轮播图 -->
    <my-swiper></my-swiper>
    <!-- 下载客户端按钮 -->
    <div class="download">
      <img class="downloadImg" src="@/assets/download.png" alt="" />
      <button @click="download()">
        <img class="downicon" src="@/assets/downicon.png" alt="" />
        <div>下载客户端</div>
      </button>
      <div class="text">PC 安卓 iPhone WP iPad Mac 六大客户端</div>
    </div>
    <div class="content">
      <!-- 左侧内容 -->
      <div class="left">
        <div class="left-content">
          <!-- 热门推荐 -->
          <div class="recomend">
            <!-- 标题 -->
            <div class="title">
              <div class="icon"></div>
              <div class="big-title">热门推荐</div>
              <div class="list-more">
                <div class="list">
                  <li><span>华语</span>|</li>
                  <li><span>流行</span>|</li>
                  <li><span>摇滚</span>|</li>
                  <li><span>民谣</span>|</li>
                  <li><span>电子</span></li>
                </div>
                <div class="more">
                  <span>更多</span>
                  <span>>></span>
                </div>
              </div>
            </div>
            <!-- 热门推荐列表 -->
            <div class="hotRecomend">
              <li v-for="(item, index) in hotRecomend" :key="index">
                <!-- 歌单图片 -->
                <img class="picUrl" :src="item.picUrl" alt="" />
                <!-- 播放量 -->
                <div class="play-img">
                  <div class="playcount">
                    <img
                      class="playcountImg"
                      src="@/assets/playcount.png"
                      alt=""
                    />
                    <div class="count">{{ item.playCount }}</div>
                  </div>
                  <div class="play iconfont icon-bofang"></div>
                </div>
                <!-- 歌单名字 -->
                <div class="name">
                  <div
                    v-show="index == 3 || index == 5 || index == 7"
                    class="tag"
                  >
                    电台节目
                  </div>
                  <div>{{ item.name }}</div>
                </div>
              </li>
            </div>
          </div>
          <!-- 新碟上架 -->
          <div class="album">
            <!-- 标题 -->
            <div class="title">
              <div class="icon"></div>
              <div class="text">新碟上架</div>
              <div class="more">
                <span>更多</span>
                <span>>></span>
              </div>
            </div>
            <!-- 新碟上架走马灯 -->
            <div class="albumSwiper">
              <album-swiper></album-swiper>
            </div>
          </div>
          <!-- 榜单 -->
          <div class="toplist">
            <!-- 标题 -->
            <div class="title">
              <div class="icon"></div>
              <div class="text">榜单</div>
              <div class="more">
                <span>更多</span>
                <span>>></span>
              </div>
            </div>
            <!-- 榜单列表 -->
            <div class="toplistTable">
              <toplist-table></toplist-table>
            </div>
          </div>
        </div>
      </div>
      <!-- 右侧内容 -->
      <div class="right">
        <!-- 用户登录 -->
        <div class="login">
          <div>
            <div>
              登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
            </div>
          </div>
          <div>
            <button>用户登录</button>
          </div>
        </div>
        <!-- 入住歌手 -->
        <div class="singer">
          <div class="header">
            <div>入驻歌手</div>
            <div>查看全部></div>
          </div>
          <div class="middle">
            <!-- 入驻歌手信息 -->
            <div v-for="(item, index) in singers" :key="index">
              <img :src="item.picUrl" />
              <div>
                <div>{{ item.name }}</div>
                <div>{{ item.instro }}</div>
              </div>
            </div>
          </div>
          <!-- 申请成为网易音乐人 -->
          <div class="apply">
            <button>申请成为网易音乐人</button>
          </div>
        </div>
        <!-- 热门主播 -->
        <div class="anchor">
          <!-- 标题 -->
          <div class="header">热门主播</div>
          <!-- 热门主播列表 -->
          <div class="buttom" v-for="(item, index) in anchors" :key="index">
            <img :src="item.picUrl" alt="" />
            <div>
              <div class="name">
                <span>{{ item.name }}</span>
                <img src="" alt="" />
              </div>
              <div class="instro">{{ item.instro }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MySwiper from "@/components/MySwiper";
import AlbumSwiper from "@/components/AlbumSwiper";
import ToplistTable from "@/components/ToplistTable";
export default {
  data() {
    return {
      hotRecomend: [], //热门推荐
      // 入驻歌手
      singers: [
        {
          picUrl:
            "https://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62",
          name: "张惠妹",
          instro: "台湾歌手张惠妹",
        },
        {
          picUrl:
            "https://p2.music.126.net/1EN_iqQWU_E3DafzEOh3cA==/3302932937408956.jpg?param=62y62",
          name: "Fine乐团",
          instro: "独立音乐人",
        },
        {
          picUrl:
            "https://p2.music.126.net/ZuktZvjcxpYBjcWC3gmbPg==/19027048718765608.jpg?param=62y62",
          name: "萬曉利",
          instro: "民谣歌手，中国现代民谣的代表人物之一",
        },
        {
          picUrl:
            "https://p2.music.126.net/v_zYgE9kmAwVGWV2c8hFxA==/7943971513291094.jpg?param=62y62",
          name: "音乐人赵雷",
          instro: "民谣歌手",
        },
        {
          picUrl:
            "https://p2.music.126.net/6wPGl_ddgAbJTx5kOohcyw==/109951163892302996.jpg?param=62y62",
          name: "王三溥",
          instro: "音乐人",
        },
      ],
      // 热门主播
      anchors: [
        {
          picUrl:
            "https://p2.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40",
          name: "陈立",
          instro: "心理学家,美食家陈立教授",
        },
        {
          picUrl:
            "https://p2.music.126.net/y5-sM7tjnxnu_V9LWKgZlw==/7942872001461517.jpg?param=40y40",
          name: "DJ艳秋",
          instro: "著名音乐节目主持人",
        },
        {
          picUrl:
            "https://p2.music.126.net/6cc6lgOfQTo6ovNnTHPyJg==/3427177769086282.jpg?param=40y40",
          name: "国家大剧院古典音乐频道",
          instro: "国家大剧院古典音乐官方",
        },
        {
          picUrl:
            "https://p2.music.126.net/xa1Uxrrn4J0pm_PJwkGYvw==/3130309604335651.jpg?param=40y40",
          name: "谢谢收听",
          instro: "南京电台主持人王馨",
        },
        {
          picUrl:
            "https://p2.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg?param=40y40",
          name: "DJ晓苏",
          instro: "独立DJ，CRI环球旅游广播特邀DJ",
        },
      ],
    };
  },
  components: {
    MySwiper,
    AlbumSwiper,
    ToplistTable,
  },
  created() {
    this.getHotRecomend();
    this.getDjradio();
  },
  methods: {
    // 获取热门推荐
    async getHotRecomend() {
      const res = await this.$http({
        url: "/personalized?limit=5",
      });
      // console.log("res", res.data.result);
      this.hotRecomend = res.data.result;
    },
    async getDjradio() {
      const res = await this.$http({
        url: "/personalized/djprogram",
      });
      // console.log(res.data.result);
      const djradio = res.data.result;
      // 将推荐电台添加到指定位置，组成要显示的热门推荐
      this.hotRecomend.splice(3, 0, djradio[0]);
      this.hotRecomend.splice(5, 0, djradio[1]);
      this.hotRecomend.splice(7, 0, djradio[2]);
      this.hotRecomend[3].playCount = this.hotRecomend[3].program.adjustedPlayCount;
      this.hotRecomend[5].playCount = this.hotRecomend[5].program.adjustedPlayCount;
      this.hotRecomend[7].playCount = this.hotRecomend[7].program.adjustedPlayCount;
      // console.log(this.hotRecomend);
    },
  },
};
</script>
<style lang="less" scoped>
.contain {
  position: relative;
  width: 1349px;
  margin: 0 auto;
}
// 下载客户端图片定位
.download {
  width: 268px;
  overflow: hidden;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 169px;
  .downloadImg {
    // position: absolute;
    // z-index: 1;
    // width: 268px;
    // top: 104px;
    // right: 170px;
    height: 300px;
  }
  button {
    position: absolute;
    z-index: 99;
    top: 193px;
    right: 15px;
    height: 62px;
    width: 244px;
    background: #3e7ee0;
    border: none;
    border-radius: 3px;
    outline: none;
    .downicon {
      position: absolute;
      top: 18px;
      right: 170px;
      width: 30px;
      height: 30px;
    }
    div {
      font-size: 24px;
      padding-left: 40px;
      color: white;
    }
  }
  button:hover {
    background: #0560e9;
    cursor: pointer;
  }
  .text {
    position: absolute;
    top: 265px;
    right: 12px;
    font-size: 13px;
    color: #767677;
    z-index: 100;
  }
}
// 内容
.content {
  width: 1010px;
  border: 1px solid #ccc;
  border-bottom: 0;
  display: flex;
  box-sizing: border-box;
  margin: 0 auto;
  background: #ffffff;
  // 左侧内容
  .left {
    width: 73.5%;
    border-right: 1px solid #ccc;
    .left-content {
      padding: 0 15px;
      // 热门推荐
      .recomend {
        // 标题
        .title {
          display: flex;
          align-items: center;
          border-bottom: 3px solid #c10d0c;
          padding: 15px 0 5px 0;
          .icon {
            width: 7px;
            height: 7px;
            border: 4px solid#c10d0c;
            border-radius: 50%;
            margin: 0 10px;
          }
          .big-title {
            font-size: 20px;
            color: #333;
            padding-right: 15px;
          }
          .big-title:hover {
            cursor: pointer;
          }
          .list-more {
            width: 80%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .list {
              display: flex;
              li {
                list-style: none;
                padding-right: 15px;
                display: flex;
                font-size: 10px;
                color: #666;
                span {
                  display: block;
                  width: 40px;
                }
                span:hover {
                  text-decoration: underline;
                  cursor: pointer;
                }
              }
            }
            .more {
              font-size: 10px;
              color: #666;
              span:first-child {
                margin-right: 5px;
              }
              span:last-child {
                color: #c10d0c;
              }
              span:first-child:hover {
                text-decoration: underline;
                cursor: pointer;
              }
            }
          }
        }
        // 热门推荐列表
        .hotRecomend {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          padding: 20px 0 30px 0;
          li {
            list-style: none;
            position: relative;
            // 歌单图片
            .picUrl {
              width: 150px;
              height: 150px;
              padding: 10px 0 5px 0;
            }
            .picUrl:hover {
              cursor: pointer;
            }
            // 播放量
            .play-img {
              display: flex;
              width: 150px;
              align-items: center;
              justify-content: space-between;
              background: #191311;
              opacity: 0.8;
              position: absolute;
              top: 131px;
              line-height: 30px;
              .playcount {
                display: flex;
                align-items: center;
                margin-left: 10px;
                .playcountImg {
                  width: 13px;
                  height: 13px;
                  margin-right: 5px;
                }
                .count {
                  color: #ccc;
                  font-size: 12px;
                }
              }
              .play {
                line-height: 20px;
                margin-right: 10px;
                color: #cacaca;
                width: 20px;
                height: 20px;
              }
              .play:hover {
                cursor: pointer;
                color: #fff;
              }
            }
            // 歌单名字
            .name {
              display: flex;
              width: 150px;
              flex-wrap: wrap;
              .tag {
                width: 50px;
                font-size: 12px;
                height: 18px;
                transform: scale(0.8, 0.8);
                border: 1px solid #cd0000;
                color: #cd0000;
              }
              div:last-child {
                font-size: 14px;
              }
              div:last-child:hover {
                text-decoration: underline;
                cursor: pointer;
              }
            }
          }
        }
      }
      // 新碟上榜
      .album {
        // 标题
        .title {
          display: flex;
          align-items: center;
          border-bottom: 3px solid #c10d0c;
          padding: 15px 0 5px 0;
          .icon {
            width: 7px;
            height: 7px;
            border: 4px solid#c10d0c;
            border-radius: 50%;
            margin: 0 10px;
          }
          .text {
            font-size: 20px;
            color: #333;
            padding-right: 15px;
          }
          .text:hover {
            cursor: pointer;
          }
          .more {
            width: 80%;
            text-align: right;
            font-size: 10px;
            color: #666;
            span:first-child {
              margin-right: 5px;
            }
            span:last-child {
              color: #c10d0c;
            }
            span:first-child:hover {
              text-decoration: underline;
              cursor: pointer;
            }
          }
        }
        // 轮播图
        .albumSwiper {
          margin: 20px 0;
        }
      }
      // 榜单
      .toplist {
        // 标题
        .title {
          display: flex;
          align-items: center;
          border-bottom: 3px solid #c10d0c;
          padding: 15px 0 5px 0;
          .icon {
            width: 7px;
            height: 7px;
            border: 4px solid#c10d0c;
            border-radius: 50%;
            margin: 0 10px;
          }
          .text {
            font-size: 20px;
            color: #333;
            padding-right: 15px;
          }
          .text:hover {
            cursor: pointer;
          }
          .more {
            width: 85.5%;
            text-align: right;
            font-size: 10px;
            color: #666;
            span:first-child {
              margin-right: 5px;
            }
            span:last-child {
              color: #c10d0c;
            }
            span:first-child:hover {
              text-decoration: underline;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  // 右侧内容
  .right {
    width: 26.5%;
    // 登录
    .login {
      height: 130px;
      box-sizing: border-box;
      background: #f5f5f5;
      background: radial-gradient(at top, #fdfdfd, #e2e2e2);
      border-bottom: 2px solid #ccc;
      > div:first-child {
        // width: 100%;
        > div {
          width: 80%;
          margin: 0 auto;
          padding: 20px 0;
          font-size: 12px;
          line-height: 20px;
          color: #767677;
        }
      }
      > div:last-child {
        width: 100%;
        text-align: center;
        > button {
          width: 120px;
          height: 30px;
          background: radial-gradient(at 60px 15px, #d11016, #bc070c);
          border-radius: 4px;
          outline: none;
          border: none;
          color: #fdffda;
        }
        button:hover {
          cursor: pointer;
          background: #ee171e;
        }
      }
    }
    // 入驻歌手
    .singer {
      width: 85%;
      // background: red;
      margin: 0 auto;
      // 头部标题
      .header {
        display: flex;
        justify-content: space-between;
        height: 28px;
        line-height: 28px;
        margin-top: 10px;
        border-bottom: 1px solid #ccc;
        > div:first-child {
          font-size: 13px;
          font-weight: bold;
          color: #333;
        }
        > div:last-child {
          font-size: 12px;
          color: #666;
        }
        > div:last-child:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
      // 中间内容
      .middle {
        padding-top: 5px;
        > div {
          display: flex;
          background: #fafafa;
          border: 1px solid #ccc;
          margin: 15px 0;
          box-sizing: border-box;
          > img {
            width: 62px;
            height: 62px;
          }
          > div {
            margin-left: 15px;
            > div:first-child {
              font-size: 15px;
              font-weight: bold;
              line-height: 40px;
            }
            > div:last-child {
              font-size: 12px;
              color: #666;
              line-height: 12px;
              width: 110px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
        > div:hover {
          cursor: pointer;
          background: #f0eeee;
        }
      }
      // 申请成为网易音乐人
      .apply {
        margin: 0 auto;
        > button {
          width: 100%;
          height: 32px;
          border: 1px solid #ccc;
          outline: none;
          border-radius: 4px;
          background: radial-gradient(at top, #fff, #f1f1f1);
          font-size: 12px;
          font-weight: bold;
        }
        > button:hover {
          cursor: pointer;
          background: #f1f1f1;
        }
      }
    }
    // 热门主播
    .anchor {
      width: 85%;
      // background-color: red;
      margin: 0 auto;
      // 标题
      .header {
        height: 28px;
        line-height: 28px;
        margin-top: 10px;
        border-bottom: 1px solid #ccc;
        font-size: 13px;
        font-weight: bold;
        color: #333;
        margin-bottom: 20px;
      }
      // 热门主播列表
      .buttom {
        display: flex;
        margin: 15px 0;
        // border: 1px solid #ccc;
        > img {
          width: 40px;
          height: 40px;
        }
        >img:hover{
          cursor: pointer;
        }
        > div {
          margin-left: 15px;
          .name {
            > span {
              font-size: 13px;
              // font-weight: bold;
              width: 160px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
          .name:hover{
            cursor: pointer;
            text-decoration: underline;
          }
          .instro {
            font-size: 12px;
            color: #666;
            width: 160px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
}
</style>