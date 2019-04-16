// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//导入vue
import Vue from 'vue'
//导入app.vue
import App from './App'
import router from './router'

//引入全部mint-ui组件
import Mint from 'mint-ui';
Vue.use(Mint);
// 导入mint-ui样式
import 'mint-ui/lib/style.css'
// 导入mui样式
import './lib/mui/css/mui.min.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
//创建vue实例并渲染App组件
new Vue({
  el: '#app',
  router:router,
  components: { App },
  template: '<App/>'
})
