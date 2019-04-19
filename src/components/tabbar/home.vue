<template>
    <div class="home-index">
        <!-- 首页搜索 -->
        <!-- <div class="mui-input-row mui-search">
            <input type="search" class="mui-input-clear" placeholder="请输入搜索内容">
        </div> -->
        <!-- <mt-header fixed title="kreme's shopping space"></mt-header> -->
        <header class="header">
            <div class="header_left">
                <span class="mui-icon mui-icon-location"></span>{{LocationCity}}
            </div>
            <div class="header_middle">
                <span class="mui-icon mui-icon-search"></span>
                <input type="text" placeholder="请输入搜索关键字">
            </div>
            <div class="header_right">
                <span class="mui-icon mui-icon-bars" @click="openFile"></span>
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
        <!-- 推荐内容瀑布流 (两列) -->
        <div class="water_cascade_flow">
            <div class="water">
                <div class="cascade_flow" ref="cascade_flow_1"></div>
                <div class="cascade_flow" ref="cascade_flow_2"></div>
            </div>
        </div>

        <!-- 弹出层部分 -->
        <mt-actionsheet :actions="data" v-model="sheetVisible" cancelText='取消'></mt-actionsheet>

    </div>
</template>

<script>
import { Header, Swipe, SwipeItem, InfiniteScroll, Actionsheet, Toast } from 'mint-ui';
import BMap from 'BMap';
export default {
    data(){
        return{
            value:'',
            loading:false,
            list:[],
            imageList:[
                '45b20ec9b4d49be8f9ccd172fd098d74',
                'ac3f824dff4560493dbae43a0d36d62c',
                '52747066b0947fa40bd5dd2d3a135e0b',
                'ac3f824dff4560493dbae43a0d36d62c',
                'e6b2ab428d2b6413508177db14bb27e3',
                'f4396b1de74bdcf492f77d3e591d84bd'
            ],
            sheetVisible:false,
            data:[
                {name:'拍照',method:this.getCamera},
                {name:'从相册选择',method:this.getLibrary}
            ],
            LocationCity:"正在定位",
            //瀑布流数据定义
            cascade:{
                moments: [],
                available: 1,
                height1: 0,
                height2: 0,
                height3: 0,
                page: 3    //如果连接数据库，page的初始值改为1
            }
        }
    },
    created(){
        //获取第一页数据
        this.fetchMoments();
        this.city();
    },
    mounted(){
        //监听全局滚轮变化
        window.addEventListener("scroll", this.handleScroll);
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
        },
        //弹窗
        openFile(){
            this.sheetVisible = true;
        },
        //打开相机
        getCamera(){
            Toast('已打开手机摄像头');
        },
        //打开本机相册
        getLibrary(){
            Toast('已打开手机相册');
        },
        //百度定位
        city(){    //定义获取城市方法
            const geolocation = new BMap.Geolocation();
            var _this = this
            geolocation.getCurrentPosition(function getinfo(position){
                let city = position.address.city;             //获取城市信息
                let province = position.address.province;    //获取省份信息
                _this.LocationCity = city
            }, function(e) {
                _this.LocationCity = "定位失败"
            }, {provider: 'baidu'});		
        },
        //推荐内容瀑布流
        fetchMoments(){    //向数据库请求数据接口
            //我使用的是本地的假数据，所以分页设置用改变数组长度来代替，实际应用中改为分页设置即可
            this.imageList.length = this.cascade.page;
            this.cascade.moments = this.imageList;
            this.$nextTick(() => {    //在dom节点元素完全加载完毕之后
                this.sort(0);
            })
            
        },
        sort(j){    //这是一个递归函数，需要确保在图片加载完成之后在获取管道的高度，但是原本图片加载是一个异步操作；使用for循环会打乱顺序，所以想使异步函数同步执行，将for循环改为递归
            if(j < this.cascade.moments.length){
                let that = this;
                //创建一个image类
                var newImg = new Image();
                //获取需要加载图片的地址
                //因为我的是假数据，所以在这里定义一个随机地址
                var index_num = Math.floor((Math.random() * this.cascade.moments.length));  //定义一个数组中的随机地址
                var img_src = this.cascade.moments[index_num];
                newImg.src = "static/img/" + img_src + ".jpg";

                // 当图片加载完成之后
                newImg.onload = function(){
                    //获取两个管道的高度
                    var arr = [
                        that.$refs.cascade_flow_1.offsetHeight,
                        that.$refs.cascade_flow_2.offsetHeight
                    ]
                    //获取管道最小高度
                    var min = arr.indexOf(Math.min.apply(Math, arr));
                    //添加模板
                    var html = '<div class="card"><img style="height:300px;width:100%" src='+ newImg.src +'></div>';
                    // 给最小管道添加图片模板
                    if(min == 0){
                        that.$refs.cascade_flow_1.innerHTML += html;
                    }else if(min == 1){
                        that.$refs.cascade_flow_2.innerHTML += html;
                    }
                    that.sort(j + 1);
                }()
            }
        },
        handleScroll(){
            //获取滚轮的位置
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            this.cascade.height1 = scrollTop;
            //获取文档的高度
            this.cascade.height2 = document.body.scrollHeight;
            //可视区域
            //要预先判断当前浏览器的渲染方式：BackCompat标准兼容模式关闭，此时获取方式为document.body / CSS1Compat标准兼容模式开启，此时获取方式为document.documentElement
            this.cascade.height3 = document.compatMode == 'CSS1Compat' ? document.documentElement.clientHeight : document.body.clientHeight;
            //设置上拉加载分页，此时需要判断当前是否滚动到最底(多添加一项判断，防止当滑倒最底部时请求不断触发)
            if(this.cascade.height3 + this.cascade.height1 >= this.cascade.height2 - 100 && this.cascade.available){
                //同样道理，我这里使用的是本地的假数据，所以不使用分页请求，而是改变原本假数据数组的长度来改变值
                this.cascade.page ++;
                this.cascade.available = 0;  //保证只请求一次
                this.fetchMoments();
            }else if(this.cascade.height3 + this.cascade.height1 < this.cascade.height2 - 100){
                this.cascade.available = 1;
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import url("./../../assets/css/home/home.less");
</style>

