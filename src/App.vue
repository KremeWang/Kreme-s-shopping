<template>
  <div>
    <div class="app-container">
      <!-- 头部公共组件 -->
      <mt-header fixed title="kreme's shopping space"></mt-header>
      <!-- 内容组件，占位 -->
      <transition>
        <router-view></router-view>
      </transition>
      <!-- 底部公共组件 -->
      <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item" to="/home">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item" to="/message">
          <span class="mui-icon mui-icon-email">
            <!-- <span class="mui-badge">9</span> -->
          </span>
          <span class="mui-tab-label">消息</span>
        </router-link>
        <router-link class="mui-tab-item" to="/shopCar">
          <span class="mui-icon mui-icon-trash"></span>
          <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link class="mui-tab-item" to="/personal">
          <span class="mui-icon mui-icon-person"></span>
          <span class="mui-tab-label">我的</span>
        </router-link>
      </nav>
    </div>
  </div>
</template>
           
<script>
import { Header, Tabbar, TabItem } from "mint-ui";
export default {
  methods: {}
};
</script>
<style scoped>
@import url("./assets/css/app.css");
</style>
