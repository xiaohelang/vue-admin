import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/manage',
      meta: '首页'
    },
    // {
    //   path: '/home',
    //   component: r => require(['../components/Home'], r)
    // },
    {
      path: '/program/produc',
      component: r => require(['@/components/program/product'], r),
      meta: 'program',
      children: [
        {
          path: '/program/create',
          component: r => require(['@/components/program/create'], r),
          meta: ''
        }
        ]
    },
    {
      path: '/manage',
      component: r => require(['@/components/pages/manage'], r),
      meta: '',
      children: [
        {
          path: '',
          component: r => require(['@/components/pages/home'], r),
          meta: ''
        },
        {
          path: '/test',
          meta: ['导航一', '分组2.1'],
          component: r => require(['@/components/pages/test'], r)
        },
        {
          path: '/addShop',
          meta: ['添加数据', '添加商铺'],
          component: r => require(['@/components/pages/addShop'], r)
        },
        {
          path: '/addGoods',
          meta: ['添加数据', '添加商品'],
          component: r => require(['@/components/pages/addGoods'], r)
        },
        {
          path: '/userList',
          meta: ['数据管理', '用户列表'],
          component: r => require(['@/components/pages/userList'], r)
        },
        {
          path: '/shopList',
          meta: ['数据管理', '商家列表'],
          component: r => require(['@/components/pages/shopList'], r)
        },
        {
          path: '/foodList',
          meta: ['数据管理', '食品列表'],
          component: r => require(['@/components/pages/foodList'], r)
        },
        {
          path: '/orderList',
          meta: ['数据管理', '订单列表'],
          component: r => require(['@/components/pages/orderList'], r)
        },
        {
          path: '/adminList',
          meta: ['数据管理', '管理员列表'],
          component: r => require(['@/components/pages/adminList'], r)
        },
        {
          path: '/visitor',
          meta: ['图表', '用户分布'],
          component: r => require(['@/components/pages/visitor'], r)
        },
        // {
        //   path: '/newMember',
        //   component: newMember,
        //   meta: ['图表', '用户数据'],
        // },
        // {
        //   path: '/uploadImg',
        //   meta: ['文本编辑', 'MarkDown'],
        //   component: r => require(['@/components/pages/uploadImg'], r)
        // }
        {
          path: '/vueEdit',
          meta: ['编辑', '文本编辑'],
          component: r => require(['@/components/pages/vueEdit'], r)
        },
        {
          path: '/adminSet',
          meta: ['设置', '管理员设置'],
          component: r => require(['@/components/pages/adminSet'], r)
        },
        // {
        //   path: '/sendMessage',
        //   component: sendMessage,
        //   meta: ['设置', '发送通知'],
        // },
        {
          path: '/explain',
          meta: ['说明', '说明'],
          component: r => require(['@/components/pages/explain'], r)
        }
      ]
    }
  ]
})
