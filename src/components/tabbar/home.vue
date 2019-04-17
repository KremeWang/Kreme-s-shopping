<template>
    <div class="home-index">
        <!-- 首页搜索 -->
        <!-- <div class="mui-input-row mui-search">
            <input type="search" class="mui-input-clear" placeholder="请输入搜索内容">
        </div> -->
        <!-- <mt-header fixed title="kreme's shopping space"></mt-header> -->
        <header class="header">
            <div class="header_left">
                <span class="mui-icon mui-icon-location"></span>武汉
            </div>
            <div class="header_middle">
                <span class="mui-icon mui-icon-search"></span>
                <input type="text" placeholder="请输入搜索关键字">
            </div>
            <div class="header_right">
                <span class="mui-icon mui-icon-bars"></span>
            </div>
        </header>
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
        <!-- 热点推荐你 -->
        <div class="hotContent">
            <div class="hotContent_top">热点推荐</div>
            <!-- <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
                <li v-for="(item,index) in list" :key="index">{{ item }}</li>
            </ul> -->
            <div class="hotContent_middle">
                <div class="waterfall">
                    <div class="waterfall-left">
                        <div class="box" v-for="(item,index) in itemsA" :key="index">
                            <!-- <img :src="item.img" alt=""> -->
                            <img src="./../../assets/images/45b20ec9b4d49be8f9ccd172fd098d74.jpg" alt="">
                        </div>
                    </div>
                    <div class="waterfall-right">
                        <div class="box" v-for="(item,index) in itemsB" :key="index">
                            <!-- <img :src="item.img" alt=""> -->
                            <img src="./../../assets/images/ac3f824dff4560493dbae43a0d36d62c.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { Header, Swipe, SwipeItem, InfiniteScroll } from 'mint-ui';
export default {
    data(){
        return{
            value:'',
            loading:false,
            list:[],
            itemsA:[
                {img:'./../../assets/images/45b20ec9b4d49be8f9ccd172fd098d74.jpg'},
                {img:'./../../assets/images/45b20ec9b4d49be8f9ccd172fd098d74.jpg'},
                {img:'./../../assets/images/45b20ec9b4d49be8f9ccd172fd098d74.jpg'},
                {img:'./../../assets/images/45b20ec9b4d49be8f9ccd172fd098d74.jpg'},
                {img:'./../../assets/images/45b20ec9b4d49be8f9ccd172fd098d74.jpg'},
            ],
            itemsB:[
                {img:'./../../assets/images/ac3f824dff4560493dbae43a0d36d62c.jpg'},
                {img:'./../../assets/images/ac3f824dff4560493dbae43a0d36d62c.jpg'},
                {img:'./../../assets/images/ac3f824dff4560493dbae43a0d36d62c.jpg'},
                {img:'./../../assets/images/ac3f824dff4560493dbae43a0d36d62c.jpg'},
            ]
        }
    },
    mounted(){
    },
    methods:{
        //上拉刷新
        loadMore() {
            this.loading = true;
            setTimeout(() => {
                let last = this.list[this.list.length - 1];
                for (let i = 1; i <= 10; i++) {
                this.list.push(last + i);
                }
                this.loading = false;
            }, 2500);
        }
    }
}
</script>

<style lang="less" scoped>
@import url("./../../assets/css/home/home.less");
</style>

