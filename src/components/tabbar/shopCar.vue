<template>
    <div class="shopCar_index">
        <header class="header">购物车</header>
        <div class="commodity">
            <ul>
                <li v-for="(item,i) in dataList" :key="i">
                    <input class="checkbox" type="checkbox" v-model="item.checkstate" @click="chooseOne(item)">
                    <div class="commodity_img">
                        <img src="./../../assets/images/头像.jpg" alt="">
                    </div>
                    <div class="commodity_desc">
                        {{item.content}}
                    </div>
                    <div class="commodity_model">
                        {{item.model}}
                    </div>
                    <div class="commodity_price">
                        ￥{{item.price}} <s style="color:#333;">￥{{item.oldPrice}}</s>
                    </div>
                    <div class="commodity_num">
                        <span @click="downNum(item)"> - </span>
                        <span>{{item.num}}</span>
                        <span @click="upNum(item)"> + </span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="payment">
            <div class="all_check"><input type="checkbox" id="label" style="margin-right:10px" v-model="allcheckstate" @click="selectAll()">全选</div>
            <div class="pay"><button @click="pay()">结算</button></div>
            <div class="all_price">商品总价：{{allMoney.toFixed(2)}}</div>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return{
            dataList:[
                {
                    content: '布先生 短袖T恤 丝光棉短袖男T恤 青年圆领夏季印花半袖AT656',
                    model: '灰色/175/L',
                    price: 100,
                    oldPrice: 299,
                    num: 1,
                    id: 1,
                    checkstate: false 
                },
                {
                    content: '布先生 短袖T恤 丝光棉短袖男T恤 青年圆领夏季印花半袖AT656',
                    model: '灰色/175/L',
                    price: 150,
                    oldPrice: 299,
                    num: 1,
                    id: 2,
                    checkstate: false 
                },
                {
                    content: '布先生 短袖T恤 丝光棉短袖男T恤 青年圆领夏季印花半袖AT656',
                    model: '灰色/175/L',
                    price: 200,
                    oldPrice: 299,
                    num: 1,
                    id: 3,
                    checkstate: false 
                }
            ],
            allMoney:0.00,
            allcheckstate: false
        }
    },
    methods:{
        //减数量
        downNum(item){
            if(item.num > 1){
                item.num --;
                if(item.checkstate && this.allMoney > 0){
                     this.allMoney = this.allMoney - Number(item.price);
                }
            }
        },
        //加数量
        upNum(item){
            item.num ++;
            if(item.checkstate){
                this.allMoney = this.allMoney + Number(item.price);
            }
        },
        // 选择单个商品
        chooseOne(item){
            if(!item.checkstate){
                item.checkstate = true;
                for (let i = 0; i < this.dataList.length; i++) {
                    if(this.dataList[i].checkstate){
                        this.allcheckstate = true;
                    }else{
                        this.allcheckstate = false;
                    }
                }
                this.allMoney = this.allMoney + (Number(item.price) * Number(item.num))
            }else{
                item.checkstate = false;
                for (let i = 0; i < this.dataList.length; i++) {
                    if(this.dataList[i].checkstate){
                        this.allcheckstate = true;
                    }else{
                        this.allcheckstate = false;
                    }
                }
                if(this.allMoney > 0){
                    this.allMoney = this.allMoney - (Number(item.price) * Number(item.num))
                }
            }
        },
        // 选择全部商品
        selectAll(){
            if(!this.allcheckstate){
                for (let i = 0; i < this.dataList.length; i++) {
                    if(!this.dataList[i].checkstate){
                        this.allMoney = this.allMoney + (Number(this.dataList[i].price) * Number(this.dataList[i].num))
                    }
                    this.dataList[i].checkstate = true;
                }
            }else{
                for (let i = 0; i < this.dataList.length; i++) {
                    this.dataList[i].checkstate = false;
                    this.allMoney = 0;
                }
            }
        },
        //结算
        pay(){
            if(this.allMoney > 0){
                Toast('恭喜你，付款成功,商品总价值为' + this.allMoney + '元');
            }else{
                Toast('抱歉，您还未选择任何商品');
            }
        }
    }
}
</script>

<style lang="less">
.shopCar_index{
    background-color: #efeff4;
    height: 100%;
    padding-top: 40px;
    .header{
        width: 100%;
        height: 40px;
        background-color: #000;
        text-align: center;
        color: #fff;
        line-height: 40px;
        position: fixed;
        top: 0;
        z-index: 999;
    }
    .commodity{
        ul{
            list-style: none;
            padding: 0;
            margin: 0;
            height: calc(100% - 140px);
            padding-bottom: 90px;
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
                        border-left: none;
                        border-right: none;
                    }
                }
            }
        }
    }
    .payment{
        position: fixed;
        bottom: 50px;
        height: 40px;
        width: 100%;
        background-color: #fff;
        z-index: 999;
        border-top: 1px solid #ccc;
        padding: 0 10px;
        line-height: 40px;
        .all_check{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            font-size: 14px;
            line-height: 40px;
            input{
                margin-top: 10px;
            }
        }
        .all_price{
            float: right;
            margin-right: 20px;
            font-size: 14px;
        }
        .pay{
            float: right;
            button{
                list-style: none;
                background-color: #FD5858;
                color: #fff;
                border-radius: 10px;
                margin-top: 3px;
            }
        }
    }
}
</style>

