<template>
    <div class="shopCar_index">
        <header class="header">购物车</header>
        <div class="commodity">
            <ul>
                <li v-for="(item,i) in dataList" :key="i">
                    <el-checkbox class="checkbox"></el-checkbox>
                    <div class="commodity_img">
                        <img src="./../../assets/images/头像.jpg" alt="">
                    </div>
                    <div class="commodity_desc">
                        布先生 短袖T恤 丝光棉短袖男T恤 青年圆领夏季印花半袖AT656
                    </div>
                    <div class="commodity_model">
                        灰色/175/L
                    </div>
                    <div class="commodity_price">
                        ￥175 <s style="color:#333;">￥299</s>
                    </div>
                    <div class="commodity_num">
                        <span> - </span>
                        <span> 1 </span>
                        <span> + </span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            dataList:[1,2,3,4,5,6,7,8]
        }
    },
    methods:{
        
    }
}
</script>

<style lang="less">
.shopCar_index{
    background-color: #efeff4;
    height: 100%;
    padding-top: 40px;
    z-index: 999;
    .header{
        width: 100%;
        height: 40px;
        background-color: #000;
        text-align: center;
        color: #fff;
        line-height: 40px;
        position: fixed;
        top: 0;
    }
    .commodity{
        ul{
            list-style: none;
            padding: 0;
            margin: 0;
            height: calc(100% - 120px);
            z-index: 1;
            overflow: hidden;
            li{
                display: inline-block;
                width: 100%;
                height: 120px;
                padding: 10px;
                background: #fff;
                border-bottom: 1px solid #ccc;
                position: relative;
                .checkbox{
                    float: left;
                    margin-right: 10px !important;
                }
                .commodity_img{
                    height: 100%;
                    width: 80px;
                    float: left;
                    img{
                        width: 100%;
                    }
                }
                .commodity_desc{
                    float: left;
                    width: calc(100% - 120px);
                    margin-left: 10px;
                    color: #333;
                    font-size: 14px;
                    height: auto;
                }
                .commodity_model{
                    float: left;
                    background-color: gray;
                    width: auto;
                    font-size: 12px;
                    color: #fff;
                    border-radius: 5px;
                    margin-left: 10px;
                    padding: 0 2px;
                }
                .commodity_price{
                    color: red;
                    position: absolute;
                    bottom: 10px;
                    font-size: 14px;
                    left: 120px;
                }
                .commodity_num{
                    position: absolute;
                    right: 10px;
                    bottom: 10px;
                    span{
                        border: 1px solid #000;
                        width: 20px;
                        height: 20px;
                        margin: 0;
                        text-align: center;
                        line-height: 20px;
                        float: left;
                    }
                    span:nth-child(2){
                        width: 30px;
                    }
                }
            }
        }
    }
}
</style>

