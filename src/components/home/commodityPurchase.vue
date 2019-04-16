<template>
    <div class="commodityPurchase-index">
        <header id="header" class="mui-bar mui-bar-nav">
			<h1 class="mui-title">商品列表</h1>
		    <a class="mui-icon mui-icon-bars mui-pull-right"></a>
            <button @click="gohome()" class="mui-action-back mui-btn mui-btn-blue mui-btn-link mui-btn-nav mui-pull-left">
                <span class="mui-icon mui-icon-left-nav"></span>首页
            </button>
        </header>
        <!-- 左侧商品tab栏切换 -->
        <div class="tabContent">

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        //跳转回首页
        gohome() {
            this.$router.push('/home')
        }
    }
}
</script>

<style lang="less" scoped>
@import url("./../../assets/css/home/commodityPurchase.less");
</style>

