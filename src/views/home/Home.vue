<template>
  <div class="content">
    <!-- 顶部 -->
    <div class="top">
      <!-- 引用顶部组件 -->
      <top></top>
    </div>
    <!-- 中部 -->
    <div class="middle">
      <router-view></router-view>
    </div>
    <!-- 底部 -->
    <div class="bottom">
      <div class="clause">
        <div class="left">
          <div class="first-row">
            <li><span>服务条款</span><span>|</span></li>
            <li><span>隐私政策</span><span>|</span></li>
            <li><span>儿童隐私政策</span><span>|</span></li>
            <li><span>版权投诉指引</span><span>|</span></li>
            <li><span>意见反馈</span><span>|</span></li>
          </div>
          <div class="second-row">
            <span>网易公司版权所有&copy;1997-2020</span>
            <span>杭州乐读科技有限公司运营：</span>
            <a href="">浙网文[2018]3506-263号</a>
          </div>
          <div class="third-row">
            <span>违法和不良信息举报电话：0571-89853516</span>
            <span>举报邮箱：</span>
            <a href="">ncm5990@163.com</a>
          </div>
          <div class="fourth-row">
            <span>粤B-20090191-18</span>
            <a href="">工业和信息化部备案管理系统网站</a>
            <span class="distant"></span>
            <a href="">
              <img
                src="https://s2.music.126.net/style/web2/img/3rd/police.png?170641b406c25750022e413e8de4e8e5"
                alt=""
              />
              <span>浙江网安备 33010902002564号</span>
            </a>
          </div>
        </div>
        <div class="right">
          <div class="img-text">
            <div v-for="(item,index) in imgs" :key="index">
              <img :src="item.picUrl" alt="">
              <div class="text">{{item.text}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 
<script>
import Top from "./components/Top";
export default {
  data() {
    return {
      imgs: [
        { picUrl: require("../../static/images/studio.png"), text: "Amped Studio"},
        { picUrl: require("../../static/images/user.png"), text: "用户认证" },
        { picUrl: require("../../static/images/music.png"), text: "独立音乐人" },
        { picUrl: require("../../static/images/reward.png"), text: "赞赏" },
        { picUrl: require("../../static/images/vedio-reward.png"), text: "视频奖励" },
      ],
    };
  },
  components: {
    Top,
  },
};
</script>
<style lang="less" scoped>
.content {
  width: 100%;
  // 自适应高度 vh 是一个新的单位，表示的是屏幕的高度，还有一个对应的宽度属性 vw 有的老浏览器不支持
  min-height:100vh;
  background: #f5f5f5;
  .top {
    width: 100%;
    display: flex;
    justify-content: center;
    background: #242424;
  }
  .middle {
    width: 100%;
  }
  .bottom {
    width: 100%;
    border-top: 1px solid #ccc;
    padding-bottom: 50px;
    .clause {
      width: 75%;
      margin: 0 auto;
      display: flex;
      margin-top: 20px;
      .left {
        width: 50%;
        // border-right: 1px solid #ccc;
        font-size: 12px;
        color: #666;
        > div {
          margin-bottom: 8px;
        }
        .first-row {
          display: flex;
          justify-content: left;
          li {
            list-style: none;
            color: #999;
            span:first-child:hover {
              text-decoration: underline;
              cursor: pointer;
            }
            span:last-child {
              padding: 0 15px;
            }
          }
        }
        .second-row {
          > span:first-child {
            margin-right: 15px;
          }
          > a {
            text-decoration: none;
            color: #666;
          }
          > a:hover {
            text-decoration: underline;
          }
        }
        .third-row {
          > span:first-child {
            margin-right: 15px;
          }
          > a {
            text-decoration: none;
            color: #333;
          }
          > a:hover {
            text-decoration: underline;
          }
        }
        .fourth-row {
          > span:first-child {
            margin-right: 15px;
          }
          a {
            color: #666;
            text-decoration: none;
          }
          > a:hover {
            text-decoration: underline;
          }
          > .distant {
            margin-right: 10px;
          }
          > a:last-child {
            > img {
              margin: auto 0;
              width: 12px;
              height: 12px;
            }
          }
        }
      }
      .right {
        width: 50%;
        display: flex;
        .img-text {
          display: flex;
          margin-left: 30px;
          margin-top: 10px;
          > div {
            // border: 1px solid red;
            width: 100px;
            text-align: center;
            >img:hover{
              cursor: pointer;
            }
            .text {
              font-size: 12px;
              color: #ccc;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
}
</style>