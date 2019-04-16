<template>
    <div class="home-index">
        <!-- 轮播图 -->
        <div class="swiperPic">
            <mt-swipe :auto="4000" :show-indicators="false" :speed="1000">
                <mt-swipe-item class="mtSwipeItem"></mt-swipe-item>
                <mt-swipe-item class="mtSwipeItem"></mt-swipe-item>
                <mt-swipe-item class="mtSwipeItem"></mt-swipe-item>
            </mt-swipe>             
        </div>
        <!-- 子菜单栏 -->
        <div class="navBanner">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-sm-3">
                    <router-link to="/home/newslist">
                        <span class="mui-icon mui-icon-qq"></span>
                        <div class="mui-media-body">新闻资讯</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-sm-3">
                    <router-link to="/home/shareImg">
                        <span class="mui-icon mui-icon-image"></span>
                        <div class="mui-media-body">图片分享</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-sm-3">
                    <router-link to="/home/commodityPurchase">
                        <span class="mui-icon mui-icon-weixin"></span>
                        <div class="mui-media-body">商品购买</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-sm-3">
                    <router-link to="/home/feedback">
                        <span class="mui-icon mui-icon-chat"></span>
                        <div class="mui-media-body">留言反馈</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-sm-3">
                    <router-link to="/home/videoArea">
                        <span class="mui-icon mui-icon-videocam"></span>
                        <div class="mui-media-body">视频专区</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-sm-3">
                    <router-link to="/home/musicArea">
                        <span class="mui-icon mui-icon-paperclip"></span>
                        <div class="mui-media-body">音乐天地</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-sm-3">
                    <router-link to="/home/sportArea">
                        <span class="mui-icon mui-icon-spinner mui-spin"></span>
                        <div class="mui-media-body">体育专栏</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-sm-3">
                    <router-link to="/home/contact">
                        <span class="mui-icon mui-icon-phone"></span>
                        <div class="mui-media-body">联系我们</div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
export default {
    data(){
        return{
            
        }
    }
}
</script>

<style lang="less" scoped>
.home-index{
    .swiperPic{
        height: 200px;
        .mtSwipeItem:nth-child(1){
            background: url('./../../assets/images/52747066b0947fa40bd5dd2d3a135e0b.jpg') no-repeat;
            background-size: 100% 100%;
        }:nth-child(2){
            background: url('./../../assets/images/e6b2ab428d2b6413508177db14bb27e3.jpg') no-repeat;
            background-size: 100% 100%;
        }:nth-child(3){
            background: url('./../../assets/images/f4396b1de74bdcf492f77d3e591d84bd.jpg') no-repeat;
            background-size: 100% 100%;
        }
    }
    .navBanner{
        ul{
            li{
                width: 25%;
                padding: 10px;
                .mui-icon{
                    color: #333;
                }
            }
        }
    }
}
</style>

