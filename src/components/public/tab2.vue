<template>
    <div class="recommend_index">
        <!-- 顶部新闻 -->
        <div class="recommend_top">
            <p>G5裁判报告显示考神干扰球与进攻犯规无误，2次漏判勇士又受益</p>
        </div>
        <!-- 推荐新闻列表 -->
        <div class="recommend_list">
            <ul>
                <li v-for="(item,i) in recommendList" :key="i">
                    <div class="list1" v-if="item.img.length > 2">{{item.title}}</div>
                    <div class="list2" v-if="item.img.length > 2">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="list3" v-if="item.img.length > 2">{{item.c_from}}</div>
                    <div class="list4" v-if="item.img.length < 3">{{item.title}}</div>
                    <div class="list5" v-if="item.img.length < 3"></div>
                    <div class="list6" v-if="item.img.length < 3">{{item.c_from}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            recommendList:[
                {
                    title:'rita直播“判若两人”被质疑颜值，素颜照曝光实力打脸！素颜照曝光实力打脸！素颜照曝光实力打脸！',
                    c_from:'小猪游戏解说',
                    img:[1,2,3]
                },
                {
                    title:'看到王大锤严肃起来，竟然还有点不适应，有点跳戏',
                    c_from:'蚕纱科技',
                    img:[1]
                },{
                    title:'rita直播“判若两人”被质疑颜值，素颜照曝光实力打脸！',
                    c_from:'小猪游戏解说',
                    img:[1,2,3]
                },
                {
                    title:'看到王大锤严肃起来，竟然还有点不适应，有点跳戏',
                    c_from:'蚕纱科技',
                    img:[1]
                },{
                    title:'rita直播“判若两人”被质疑颜值，素颜照曝光实力打脸！',
                    c_from:'小猪游戏解说',
                    img:[1,2,3]
                },
                {
                    title:'看到王大锤严肃起来，竟然还有点不适应，有点跳戏',
                    c_from:'蚕纱科技',
                    img:[1]
                },
            ]
        }
    }
}
</script>

<style lang="less" scoped>
@import url("./../../assets/css/home/tab2.less");
</style>

