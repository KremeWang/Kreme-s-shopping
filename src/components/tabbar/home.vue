<template>
    <div class="home-index">
        <div class="swiperPic">
            <mt-swipe :auto="5000" :show-indicators="false" :speed="1000">
                <mt-swipe-item class="mtSwipeItem"></mt-swipe-item>
                <mt-swipe-item class="mtSwipeItem"></mt-swipe-item>
                <mt-swipe-item class="mtSwipeItem"></mt-swipe-item>
            </mt-swipe>             
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
}
</style>

