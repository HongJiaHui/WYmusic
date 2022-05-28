<template>
  <div>
    <van-nav-bar :title="activeTitle" fixed left-arrow>
      <template #left>
        <van-icon name="wap-nav" color="#000" size="21" />
      </template>
    </van-nav-bar>
    <!-- 二级路由挂载点 -->
    <!-- main样式防止标头和标尾遮盖住主体内容，加上下内边距 -->
    <div class="main">
      <router-view></router-view>
    </div>
    <!-- 加入route属性和to集成路由切换功能 -->
    <van-tabbar route active-color="#ee0a24" inactive-color="#888888">
      <van-tabbar-item icon="home-o" replace to="/layout/home"
        >首页</van-tabbar-item
      >
      <van-tabbar-item icon="like-o">我的</van-tabbar-item>
      <van-tabbar-item icon="search" replace to="/layout/search"
        >搜索</van-tabbar-item
      >
      <van-tabbar-item icon="friends-o">关注</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTitle: this.$route.meta.title, //顶部导航要显示的标题（默认获取当前路由对象里的meta中title值）
    };
  },
  //路由切换 - 侦听$route对象改变
  watch: {
    //$route页面路由
    $route() {
      //提取切换后路由信息对象里的title显示
      this.activeTitle = this.$route.meta.title;
    },
  },
  // methods: {
  //   btn() {
  //     this.$router.push({
  //       path: "/layout/home",
  //     });
  //   },
  // },
};
</script>

<style scope>
/* 中间内容区域 - 容器样式(留好上下导航所占位置) */
.main {
  padding-top: 46px;
  padding-bottom: 50px;
}
.van-nav-bar {
  background-color: #c20c0c;
}
</style>