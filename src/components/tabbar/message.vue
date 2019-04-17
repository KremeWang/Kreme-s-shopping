<template>
    <div class="message-index">
        <header class="header">
            <div class="header_left">
                <span class="mui-icon mui-icon-search"></span>
                <input type="text" placeholder="请输入搜索关键字">
            </div>
            <div class="header_right">
                <el-popover placement="bottom-end" width="50px"  trigger="click">
                    <div style="height:30px;line-height:30px"><span class="mui-icon mui-icon-chat"></span> 创建群聊</div>
                    <div style="height:30px;line-height:30px"><span class="mui-icon mui-icon-bars"></span> 扫一扫</div>
                    <div style="height:30px;line-height:30px"><span class="mui-icon mui-icon-personadd"></span> 添加好友</div>
                    <div style="height:30px;line-height:30px"><span class="mui-icon mui-icon-chatboxes"></span> 面对面快传</div>
                    <span slot="reference"> + </span>
                </el-popover>
            </div>
        </header>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">RNG官方微博 
                <span class="mui-badge mui-badge-primary">11</span>
            </li>
            <li class="mui-table-view-cell">LPL官方微博 
                <span class="mui-badge mui-badge-success">22</span>
            </li>
            <li class="mui-table-view-cell">IG官方微博 
                <span class="mui-badge">33</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{}
    },
    methods:{
        //添加好友
        addFriends(){
            
        }
    }
}
</script>

<style lang="less" scoped>
@import url("./../../assets/css/message/index.less");
</style>

