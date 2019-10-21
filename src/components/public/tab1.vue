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
                    <div :class="{cWidth: item.img ? true : false}">
                        <p>{{item.title}}</p>
                        <span>{{item.c_at | timeTransform}}</span>
                    </div>
                    <div v-if="item.img">

                    </div>
                </li>
            </ul>
            <div class="changeState">
                <span><a href="javascript:;">换一换</a></span>
                <span><a href="javascript:;">进入今日要闻</a></span>
            </div>
        </div>
        <!-- 体育专栏 -->
        <div class="sports">
            <div class="sport_head">
                <span><a href="javascript:;">体育</a></span>
                <span><a href="javascript:;">中超</a></span>
            </div>
            <ul>
                <li v-for="(item,i) in sportsList" :key="i">
                    <div :class="{cWidth: item.img ? true : false}">
                        <p>{{item.title}}</p>
                        <span>{{item.t_from}}</span>
                    </div>
                    <div v-if="item.img">

                    </div>
                </li>
            </ul>
            <div class="sport_foot">
                <a href="javascript:;">进入体育频道 ></a>
            </div>
        </div>
        <!-- 娱乐专栏 -->
        <div class="entertainment">
            <div class="entertainment_head">
                <div><a href="javascript:;">娱乐</a></div>
                <div>
                    <span><a href="javascript:;">明星</a></span>
                    <span><a href="javascript:;">电视</a></span>
                    <span><a href="javascript:;">电影</a></span>
                </div>
            </div>
            <ul>
                <li v-for="(item,i) in entertainmentList" :key="i">
                    <div :class="{cWidth: item.img ? true : false}">
                        <p>{{item.title}}</p>
                        <span>{{item.t_from}}</span>
                    </div>
                    <div v-if="item.img">

                    </div>
                </li>
            </ul>
            <div class="entertainment_foot">
                <a href="javascript:;">进入娱乐频道 ></a>
            </div>
        </div>
        <!-- NBA -->
        <div class="sports">
            <div class="sport_head">
                <span><a href="javascript:;">NBA</a></span>
                <span><a href="javascript:;">湖人</a></span>
            </div>
            <ul>
                <li v-for="(item,i) in sportsList" :key="i">
                    <div :class="{cWidth: item.img ? true : false}">
                        <p>{{item.title}}</p>
                        <span>{{item.t_from}}</span>
                    </div>
                    <div v-if="item.img">

                    </div>
                </li>
            </ul>
            <div class="sport_foot">
                <a href="javascript:;">进入NBA频道 ></a>
            </div>
        </div>
        <!-- 财经专栏 -->
        <div class="entertainment">
            <div class="entertainment_head">
                <div><a href="javascript:;">财经</a></div>
                <div>
                    <span><a href="javascript:;">股票</a></span>
                    <span><a href="javascript:;">理财</a></span>
                    <span><a href="javascript:;">自选股</a></span>
                </div>
            </div>
            <ul>
                <li v-for="(item,i) in entertainmentList" :key="i">
                    <div :class="{cWidth: item.img ? true : false}">
                        <p>{{item.title}}</p>
                        <span>{{item.t_from}}</span>
                    </div>
                    <div v-if="item.img">

                    </div>
                </li>
            </ul>
            <div class="entertainment_foot">
                <a href="javascript:;">进入财经频道 ></a>
            </div>
        </div>
        <!-- 科技频道 -->
        <div class="entertainment">
            <div class="entertainment_head">
                <div><a href="javascript:;">科技</a></div>
                <div>
                    <span><a href="javascript:;">手机</a></span>
                    <span><a href="javascript:;">苹果</a></span>
                    <span><a href="javascript:;">探索</a></span>
                </div>
            </div>
            <ul>
                <li v-for="(item,i) in entertainmentList" :key="i">
                    <div :class="{cWidth: item.img ? true : false}">
                        <p>{{item.title}}</p>
                        <span>{{item.t_from}}</span>
                    </div>
                    <div v-if="item.img">

                    </div>
                </li>
            </ul>
            <div class="entertainment_foot">
                <a href="javascript:;">进入科技频道 ></a>
            </div>
        </div>
        <!-- 汽车频道 -->
        <div class="entertainment">
            <div class="entertainment_head">
                <div><a href="javascript:;">汽车</a></div>
                <div>
                    <span><a href="javascript:;">车型库</a></span>
                    <span><a href="javascript:;">新车</a></span>
                    <span><a href="javascript:;">SUV</a></span>
                </div>
            </div>
            <ul>
                <li v-for="(item,i) in entertainmentList" :key="i">
                    <div :class="{cWidth: item.img ? true : false}">
                        <p>{{item.title}}</p>
                        <span>{{item.t_from}}</span>
                    </div>
                    <div v-if="item.img">

                    </div>
                </li>
            </ul>
            <div class="entertainment_foot">
                <a href="javascript:;">进入汽车频道 ></a>
            </div>
        </div>
        <!-- 女性频道 -->
        <div class="entertainment">
            <div class="entertainment_head">
                <div><a href="javascript:;">女性</a></div>
                <div>
                    <span><a href="javascript:;">星座</a></span>
                    <span><a href="javascript:;">健康</a></span>
                </div>
            </div>
            <ul>
                <li v-for="(item,i) in entertainmentList" :key="i">
                    <div :class="{cWidth: item.img ? true : false}">
                        <p>{{item.title}}</p>
                        <span>{{item.t_from}}</span>
                    </div>
                    <div v-if="item.img">

                    </div>
                </li>
            </ul>
            <div class="entertainment_foot">
                <a href="javascript:;">进入女性频道 ></a>
            </div>
        </div>
        <!-- 军事频道 -->
        <div class="entertainment">
            <div class="entertainment_head">
                <div><a href="javascript:;">军事</a></div>
                <div>
                    <span><a href="javascript:;">台派</a></span>
                    <span><a href="javascript:;">激进派</a></span>
                </div>
            </div>
            <ul>
                <li v-for="(item,i) in entertainmentList" :key="i">
                    <div :class="{cWidth: item.img ? true : false}">
                        <p>{{item.title}}</p>
                        <span>{{item.t_from}}</span>
                    </div>
                    <div v-if="item.img">

                    </div>
                </li>
            </ul>
            <div class="entertainment_foot">
                <a href="javascript:;">进入军事频道 ></a>
            </div>
        </div>
        <!-- 探索专栏 -->
        <div class="sports">
            <div class="sport_head">
                <span><a href="javascript:;">探索</a></span>
            </div>
            <ul>
                <li v-for="(item,i) in sportsList" :key="i">
                    <div :class="{cWidth: item.img ? true : false}">
                        <p>{{item.title}}</p>
                        <span>{{item.t_from}}</span>
                    </div>
                    <div v-if="item.img">

                    </div>
                </li>
            </ul>
            <div class="sport_foot">
                <a href="javascript:;">进入探索频道 ></a>
            </div>
        </div>
        <!-- 笑话频道 -->
        <div class="entertainment">
            <div class="entertainment_head">
                <div><a href="javascript:;">笑话</a></div>
                <div>
                    <span><a href="javascript:;">萌宠</a></span>
                    <span><a href="javascript:;">游戏</a></span>
                    <span><a href="javascript:;">动漫</a></span>
                </div>
            </div>
            <ul>
                <li v-for="(item,i) in entertainmentList" :key="i">
                    <div :class="{cWidth: item.img ? true : false}">
                        <p>{{item.title}}</p>
                        <span>{{item.t_from}}</span>
                    </div>
                    <div v-if="item.img">

                    </div>
                </li>
            </ul>
            <div class="entertainment_foot">
                <a href="javascript:;">进入笑话频道 ></a>
            </div>
        </div>
        <!-- 生活服务 -->
        <div class="life_service">
            <div class="life_service_head"><a href="javascript:;">生活服务</a></div>
            <ul>
                <li>
                    <span class="mui-icon mui-icon-search"></span>
                    <span>找工作</span>
                </li>
                <li>
                    <span class="mui-icon mui-icon-pengyouquan"></span>
                    <span>二手房</span>
                </li>
                <li>
                    <span class="mui-icon mui-icon-home"></span>
                    <span>租好房</span>
                </li>
                <li>
                    <span class="mui-icon mui-icon-map"></span>
                    <span>二手车</span>
                </li>
                <li>
                    <span class="mui-icon mui-icon-refresh"></span>
                    <span>找投资</span>
                </li>
                <li>
                    <span class="mui-icon mui-icon-micoff"></span>
                    <span>找维修</span>
                </li>
                <li>
                    <span class="mui-icon mui-icon-paperclip"></span>
                    <span>租好车</span>
                </li>
                <li>
                    <span class="mui-icon mui-icon-flag"></span>
                    <span>找搬家</span>
                </li>
                <li>
                    <span class="mui-icon mui-icon-paperplane"></span>
                    <span>找保洁</span>
                </li>
                <li>
                    <span class="mui-icon mui-icon-info"></span>
                    <span>淘手机</span>
                </li>
            </ul>
        </div>
        <!-- 更多推荐 -->
        <div class="more_recommend">
            <div class="more_recommend_head"><a href="javascript:;">更多推荐</a></div>
            <ul>
                <li><a href="javascript:;">京东</a></li>
                <li><a href="javascript:;">购物</a></li>
                <li><a href="javascript:;">机票</a></li>
                <li><a href="javascript:;">房产</a></li>
                <li><a href="javascript:;">游戏</a></li>
                <li><a href="javascript:;">血糖仪</a></li>
                <li><a href="javascript:;">滴滴</a></li>
                <li><a href="javascript:;">会员</a></li>
                <li><a href="javascript:;">邮箱</a></li>
                <li><a href="javascript:;">小说</a></li>
                <li><a href="javascript:;">空间</a></li>
                <li><a href="javascript:;">浏览器</a></li>
            </ul>
        </div>
        <!-- 底部搜索框 -->
        <div class="search_input"  :class="{ focus: inputFocus }">
            <span class="mui-icon mui-icon-search"></span>
            <input type="text" placeholder="搜索" @focus="inputFocus = true;" @blur="inputFocus = false;" readonly onfocus="this.removeAttribute('readonly');"/>
        </div>
        <!-- 底部切换 -->
        <div class="news_foot">
            <div class="news_foot_tab">
                <span>无图版</span>
                <span>反馈</span>
                <span>登录</span>
            </div>
            <div class="news_copyright">
                &copy;2019 Tencent 粤B2-20090028
            </div>
        </div>
    </div>
</template>


<script>
import { Swipe, SwipeItem, Search } from 'mint-ui';
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
            newsList:[
                {
                    title:'对话举报“山东厅级干部淫乱”女子：他们敢做亲自鉴定吗？',
                    c_at:'2019-06-11 09:20:00',
                },
                {
                    title:'对话举报“山东厅级干部淫乱”女子：他们敢做亲自鉴定吗？',
                    c_at:'2019-06-11 09:20:00',
                    img:'1'
                },
                {
                    title:'对话举报“山东厅级干部淫乱”女子：他们敢做亲自鉴定吗？',
                    c_at:'2019-06-11 09:20:00',
                },
                {
                    title:'对话举报“山东厅级干部淫乱”女子：他们敢做亲自鉴定吗？',
                    c_at:'2019-06-11 09:20:00',
                    img:'1'
                },
            ],
            sportsList:[
                {
                    title:'曼巴鸡汤！科比勉励易建联备战世界杯：内心要充满渴望',
                    t_from:'腾讯体育',
                    img:'1'
                },
                {
                    title:'商务部：权健、华林涉嫌传销犯罪未复核登记',
                    t_from:'中国新闻网',
                    img:'1'
                },
                {
                    title:'杜兰特缺阵引发队友困惑和愤怒 为何KD不能带伤出战？',
                    t_from:'腾讯体育',
                    img:'1'
                },
                {
                    title:'汤神是防小卡最好的人！大数据预测：下场开始他将爆发',
                    t_from:'腾讯体育',
                    img:'1'
                },
            ],
            entertainmentList:[
                {
                    title:'王思聪现身好友婚礼再次当伴郎 一袭黑色西装风度翩翩',
                    t_from:'拉机器的条子',
                    img:'1'
                },
                {
                    title:'回忆杀！书桓尔豪18年再重逢，同台飙戏需自备纸巾',
                    t_from:'欧美派',
                    img:'1'
                },
                {
                    title:'12部最颠覆教师印象的电影，致敬！',
                    t_from:'流量君电影院',
                    img:'1'
                },
                {
                    title:'上戏表演系94班毕业20年重聚，马伊利和昔日恩师同框',
                    t_from:'娱乐圈轰炸机',
                    img:'1'
                },
            ],
            value:'',
            inputFocus:false
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
            var now = new Date();

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

