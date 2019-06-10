<template>
    <div class="newsList_index">
        <div class="testNav">
            <div :class="{'selected':tab === 1,'testTitle':true}" @click="toTab(1)">要闻</div>
            <div :class="{'selected':tab === 2,'testTitle':true}"  @click="toTab(2)">推荐</div>
        </div>
        <div class="container">
            <keep-alive>
                <tab1 v-if="tab === 1">

                </tab1>
                <tab2 v-else>

                </tab2>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import tab1 from './../public/tab1.vue';
import tab2 from './../public/tab2.vue';
export default {
    data(){
        return{
            tab:1
        }
    },
    components: {
        tab1,
        tab2,
    },
    methods: {
        toTab(index) {
            this.tab = index;
        },
    },
}
</script>

<style lang="less" scoped>
.newsList_index {
    width: 100%;
    .testNav {
        height: 40px;
        line-height: 40px;
        display: flex;
        border-bottom: 1px solid #e5e5e5;
        .testTitle {
            flex: 1;
            text-align: center;
        }
        .selected {
            color: #007aff;
            font-weight: bold;
            border-bottom: 1px solid #007aff;
        }
    }
}
</style>

