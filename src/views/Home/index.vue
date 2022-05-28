<template>
  <div>
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      :height="153.48"
    >
      <van-swipe-item v-for="(obj, index) in imgURL" :key="index">
        <img :src="obj.imageUrl"
      /></van-swipe-item>
    </van-swipe>
    <p class="title">推荐歌单</p>
    <van-row gutter="10">
      <van-col span="8" v-for="obj in reList" :key="obj.id"
        ><van-image
          width="100%"
          height="3rem"
          fit="cover"
          :src="obj.picUrl"
          radius="10"
        />
        <p class="song_name">{{ obj.name }}</p></van-col
      >
    </van-row>
    <p class="title">最新音乐</p>
    <!-- v-for="obj in songList" -->
    <SongItem
      v-for="obj in newList"
      :key="obj.id"
      :author="obj.song.artists[0].name"
      :id="obj.id"
      :name="obj.name"
    ></SongItem>
  </div>
</template>

<script>
//目标：铺设推荐歌单
//1.van-row和van-col来搭建外框布局
//2.van-col里面内容（van-image和p）
//3.调整间距和属性值
//4.调用封装的api/index.js-推荐歌单api方法
import { recommendMusicAPI, newMusicAPI, newBannerAPI } from "@/api";
//5.拿到数据保存到data里变量-去上面循环标签

//目标：铺设最新音乐
//1.van-cell铺设一套标签结构
//2.自定义右侧插槽里小图标，调整垂直居中
//3.api/Home.js和api/index.js - 封装导出获取最新音乐接口方法
//4.获取数据循环铺设页面即可

import SongItem from "@/components/SongItem.vue";
export default {
  data() {
    return {
      reList: [], //推荐歌单数据
      newList: [], //推荐新音乐数据
      imgURL: [], //轮播图数据
    };
  },
  //网页打开的时候 | 当前组件创建完成的时候
  async created() {
    const res = await recommendMusicAPI({
      limit: 3,
    });
    this.reList = res.data.result;

    const res2 = await newMusicAPI({
      limit: 10,
    });
    this.newList = res2.data.result;

    const res3 = await newBannerAPI({});
    this.imgURL = res3.data.banners;
  },
  components: {
    SongItem,
  },
};
</script>

<style scoped>
/* 标题 */
.title {
  padding: 0.266667rem 0.24rem;
  color: #333;
  font-size: 15px;
}
/* 推荐歌单 - 歌名 */
.song_name {
  font-size: 0.346667rem;
  padding: 0 0.08rem;
  margin-bottom: 0.266667rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.my-swipe .van-swipe-item img {
  width: 100%;
  height: 100%;
}
</style>