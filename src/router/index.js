import Vue from 'vue'
import Router from 'vue-router'
// 首页
import home from '@/page/home/home.vue'
import header from '@/page/home/header.vue'
import footer from '@/page/home/footer.vue'
import timepush from '@/page/home/timepush.vue'
import hotnews from '@/page/home/hotnews.vue'
// 大陆
import continent from '@/page/continent'
// 港澳
import hkmacao from '@/page/hkmacao'
// 台湾
import taiwan from '@/page/taiwan'
// 国际
import international from '@/page/international'
// 社会
import society from '@/page/society'
// 广深
import guangshen from '@/page/guangshen'
// 解密
import decrypt from '@/page/decrypt'
// 图集
import picture from '@/page/picture'
// 足球
import football from '@/page/football'
// 联系我们
import contact from '@/page/contact'
//内容页
import content from '@/page/content'
// 注册全局全局组件 头部底部是全局喔
Vue.component('headerVue',header)
Vue.component('footerVue',footer)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:{
        name:'home'
      }
    },
    {
      name:'home',
      path:'/home',
      component:home,
    },
    {
      name:'timepush',
      path:'/timepush',
      component:timepush,
    },
    {
      name:'hotnews',
      path:'/hotnews',
      component:hotnews,
    },
    {
      name:'continent',
      path:'/continent',
      component:continent
    },
    {
      name:'hkmacao',
      path:'/hkmacao',
      component:hkmacao
    },
    {
      name:'taiwan',
      path:'/taiwan',
      component:taiwan
    },
    {
      name:'international',
      path:'/international',
      component:international
    },
    {
      name:'society',
      path:'/society',
      component:society
    },
    {
      name:'guangshen',
      path:'/guangshen',
      component:guangshen
    },
    {
      name:'decrypt',
      path:'/decrypt',
      component:decrypt
    },
    {
      name:'picture',
      path:'/picture',
      component:picture
    },
    {
      name:'football',
      path:'/football',
      component:football
    },
    {
      name:'contact',
      path:'/contact',
      component:contact
    },	
    {
      name:'content',
      path:'/content',
      component:content
    },
  ]
})
