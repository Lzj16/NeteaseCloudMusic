<template>
  <div>
    <!-- 新碟上架走马灯 -->
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item in 2" :key="item">
        <div class="albums">
          <div
            class="album"
            v-for="(album, index) in item == 1 ? firstAlbums : secondAlbums"
            :key="index"
          >
            <img :src="album.picUrl" />
            <div class="name">{{ album.name }}</div>
            <div class="artistName">{{ album.artist.name }}</div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      albums: [],
      firstAlbums: [],
      secondAlbums: [],
    };
  },
  created() {
    this.getNewAlbum();
  },
  methods: {
    // 新碟上架
    async getNewAlbum() {
      const res = await this.$http({
        url: "/album/newest",
      });
      // console.log(res);
      this.albums = res.data.albums;
      this.albums.splice(10);
      this.firstAlbums = this.albums.splice(5);
      this.secondAlbums = this.albums.splice(0, 5);
    },
  },
};
</script>
<style lang="less">
.el-carousel__item {
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
.albums {
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 30px;
  width: 100%;
  .album {
    img {
      width: 110px;
      height: 110px;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }
    .name {
      font-size: 14px;
      width: 110px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .artistName {
      font-size: 12px;
      color: #999;
    }
  }
}
</style>