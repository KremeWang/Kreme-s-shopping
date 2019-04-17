<template>
    <div class="personal-index">
        <header class="header">个人中心</header>
        <!-- 用户基本信息： 头像/用户名/账号 -->
        <div class="manInfo">
            <div class="info_img"></div>
            <div class="info_word">
                <h3 class="nickName">Kreme.</h3>
                <p class="accountNum">账号：kremewang</p>
            </div>
        </div>
        <!-- 个人中心功能 -->
        <div class="function">
            <div class="payment">
                <span style="color:orange" class="mui-icon mui-icon-email"></span>
                <span>支付</span>
                <span> > </span>
            </div>
            <div class="lifeContent">
                <ul>
                    <li>
                        <span style="color:red" class="mui-icon mui-icon-flag"></span>
                        <span>收藏</span>
                        <span> > </span>
                    </li>
                    <li>
                        <span style="color:skyblue" class="mui-icon mui-icon-image"></span>
                        <span>相册</span>
                        <span> > </span>
                    </li>
                    <li>
                        <span style="color:deeppink" class="mui-icon mui-icon-email"></span>
                        <span>卡包</span>
                        <span> > </span>
                    </li>
                    <li>
                        <span style="color:green" class="mui-icon mui-icon-paperclip"></span>
                        <span>表情</span>
                        <span> > </span>
                    </li>
                </ul>
            </div>
            <div class="setting">
                <span style="color:#333" class="mui-icon mui-icon-gear"></span>
                <span>设置</span>
                <span> > </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{}
    }
}
</script>

<style lang="less" scoped>
@import url('./../../assets/css/personal/index.less');
</style>
