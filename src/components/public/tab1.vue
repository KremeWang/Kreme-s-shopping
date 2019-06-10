<template>
    <div class="tab1_index">
        <!-- 顶部菜单栏设置 -->
        <div class="top_panel">
            <a href="javascipt:;">新闻</a>
            <a href="javascipt:;">财经</a>
            <a href="javascipt:;">娱乐</a>
            <a href="javascipt:;">体育</a>
            <a href="javascipt:;">科技</a>
            <a href="javascipt:;">星座</a>
            <a href="javascipt:;">汽车</a>
            <a href="javascipt:;">视频</a>
            <a href="javascipt:;">影视</a>
            <a href="javascipt:;">女性</a>
            <a href="javascipt:;">NBA</a>
            <a href="javascipt:;">军事</a>
            <a href="javascipt:;">图片</a>
            <a href="javascipt:;">笑话</a>
            <a href="javascipt:;">生活</a>
            <a href="javascipt:;">购物</a>
            <a href="javascipt:;">手机</a>
            <a href="javascipt:;">房产</a>
            <a href="javascipt:;">游戏</a>
            <a href="javascipt:;">空间</a>
            <a href="javascipt:;">书城</a>
        </div>
        <!-- 置顶新闻 -->
        <div class="top_news">
            <ul>
                <li v-for="(item,i) in topNewsList" :key="i">
                    <p><a href="javascript:;">{{item.title}}</a></p>
                    <span style="color:red">置顶</span>
                    <span style="margin-left:10px;">{{item.time | timeTransform}}</span>
                </li>
            </ul>
        </div>
        <!-- 新闻轮播 -->
        <div class="news_slide">
            <mt-swipe :auto="4000" :show-indicators="false" :speed="1000">
                <mt-swipe-item class="mtSwipeItem"></mt-swipe-item>
                <mt-swipe-item class="mtSwipeItem"></mt-swipe-item>
                <mt-swipe-item class="mtSwipeItem"></mt-swipe-item>
            </mt-swipe>
        </div>
        <!-- 新闻列表 -->
        <div class="newsList">
            <ul>
                <li v-for="(item,i) in newsList" :key="i">
                    <div>
                        <p>{{item.title}}</p>
                        <span>{{item.c_at}}</span>
                    </div>
                    <div style="background-image:url(./../../assets/images/52747066b0947fa40bd5dd2d3a135e0b.jpg)">

                    </div>
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
            topNewsList:[
                {
                    title:'这件事 习近平强调功在当代 利在千秋',
                    time:'2019-06-10 12:00:00'
                },
                {
                    title:'这件事 习近平强调功在当代 利在千秋',
                    time:'2019-06-10 10:00:00'
                }
            ],
            newsList:[1,2,3]
        }
    },
    filters:{
        timeTransform: function (value) {
            var dateTime = new Date(value);
            var year = dateTime.getFullYear();
            var month = dateTime.getMonth() + 1;
            var day = dateTime.getDate();
            var hour = dateTime.getHours();
            var minute = dateTime.getMinutes();
            var second = dateTime.getSeconds();
            var now = new Date().getTime();

            var milliseconds = 0;
            var timeSpanStr;

            milliseconds = now - new Date(value).getTime();

            if (milliseconds <= 1000 * 60 * 1) {
                timeSpanStr = '刚刚';
            }
            else if (1000 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60) {
                timeSpanStr = Math.round((milliseconds / (1000 * 60))) + '分钟前';
            }
            else if (1000 * 60 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24) {
                timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60)) + '小时前';
            }
            else if (1000 * 60 * 60 * 24 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24 * 15) {
                timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60 * 24)) + '天前';
            }
            else if (milliseconds > 1000 * 60 * 60 * 24 * 15 && year == now.getFullYear()) {
                timeSpanStr = month + '-' + day + ' ' + hour + ':' + minute;
            } else {
                timeSpanStr = year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
            }
            return timeSpanStr;
        }
    }
}
</script>

<style lang="less" scoped>
@import url("./../../assets/css/home/tab1.less");
</style>

