<template>
  <div class="toplistComments">
    <!-- 标题 -->
    <div class="title">
      <div>评论</div>
      <div>共198337条评论</div>
    </div>

    <!-- 评论发表 -->
    <div class="writeComment">
      <!-- 左侧用户头像 -->
      <div class="userPic">
        <img src="../static/images/comment-user.jpg" alt="" />
      </div>
      <!-- 右侧评论文本框 -->
      <div class="inputComment">
        <input type="text" placeholder="评论" />
        <!-- 评论框下方表情选择和评论按钮 -->
        <div class="bottom">
          <!-- 表情 -->
          <div class="face">
            <span>@</span>
            <span>@</span>
          </div>
          <!-- 评论按钮 -->
          <div class="commentBtn">
            <span>140</span>
            <button>评论</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 精彩评论 -->
    <div class="commentByHot">
      <!-- 标题 -->
      <div class="title">精彩评论</div>
      <!-- 评论详情 -->
      <comment-detail></comment-detail>
    </div>

    <!-- 最新评论 -->
    <div class="commentByTime">
      <!-- 标题 -->
      <div class="title">最新评论(198364)</div>
      <!-- 评论详情 -->
      <comment-detail></comment-detail>
    </div>
  </div>
</template>
<script>
import CommentDetail from "../components/CommentDetail";
export default {
  data() {
    return {};
  },
  components: {
    CommentDetail,
  },
};
</script>
<style lang="less" scoped>
@import '../static/css/style';
.toplistComments {
  margin-top: 40px;
  > .title {
    display: flex;
    // justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #c20c0c;
    margin-bottom: 25px;
    > div:first-child {
      font-size: 20px;
      line-height: 40px;
      margin-right: 20px;
    }
    > div:last-child {
      font-size: 13px;
      color: #666;
      padding-top: 6px;
    }
  }
}
</style>