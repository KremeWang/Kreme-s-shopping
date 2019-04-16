import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/tabbar/home'
import message from '@/components/tabbar/message'
import shopCar from '@/components/tabbar/shopCar'
import personal from '@/components/tabbar/personal'
import commodityPurchase from '@/components/home/commodityPurchase'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'mui-active',   //点击高亮显示
  routes: [
    {
      path: '/home',
      component: home
    },
    {
      path: '/message', 
      component: message
    },
    {
      path: '/personal', 
      component: personal
    },
    {
      path: '/shopCar', 
      component: shopCar
    },
    {
      path: '/home/commodityPurchase', 
      component: commodityPurchase
    },
  ]
})
