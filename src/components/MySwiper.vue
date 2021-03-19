<template>
  <div class="my-swiper">
    <swiper
      ref="mySwiper"
      :options="swiperOptions"
      v-if="banners.length"
      @click="preventClicks"
    >
      <swiper-slide v-for="(banner, index) in banners" :key="index">
        <img :src="banner.imageUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div
        class="swiper-button-prev swiper-button-white"
        slot="button-prev"
      ></div>
      <div
        class="swiper-button-next swiper-button-white"
        slot="button-next"
      ></div>
    </swiper>
  </div>
</template>
<script>
export default {
  data() {
    return {
      banners: [], //轮播图数据
      swiperOptions: {
        // 分页器
        pagination: {
          el: ".swiper-pagination",
          type: "bullets", //显示为圆点
          clickable: true, //点击分页器切换图片
        },
        // 前进后退按钮
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        },
        speed: 300, //slider自动滑动开始到结束的时间（单位ms）
        // 是否自动播放
        autoplay: {
          delay: 5000, //1秒切换一次
          disableOnInteraction: false, //触碰后不会停止自动切换
        },
        // 切换效果
        effect: "fade",
        // 点击触发事件
        preventClicks: false, //默认true
        // 轮播
        loop: true, //vue中使用轮播效果，须在swiper标签中设置v-if='banners.length'
      },
    };
  },
  created() {
    // 获取轮播图片
    this.getBanners();
  },
  methods: {
    // 获取轮播图片
    async getBanners() {
      const res = await this.$http({
        url: "/banner",
      });
      if (res.status !== 200) {
        return this.$message.error("数据获取失败!");
      }
      this.banners = res.data.banners;
      // console.log(this.banners);
    },
    // 点击轮播图跳转到song路由
    preventClicks() {
      console.log(111);
    },
  },
};
</script>
<style lang="less">
.my-swiper {
  width: 100%;
  background: #2d2e2f;
  .swiper-container {
    width: 1147px;
    .swiper-wrapper {
      .swiper-slide {
        // text-align: center;
        height: 300px;
        img {
          cursor: pointer; //鼠标指针放在一个元素边界范围内时所用的光标为手型
          padding-left: 70px;
          width: 742px;
          height: 300px;
        }
      }
    }
    .swiper-pagination-bullet {
      background: #ccc;
      opacity: 1;
    }
    .swiper-pagination-bullet-active {
      background: red;
      opacity: 1;
    }
  }
}
</style>