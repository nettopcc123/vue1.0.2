import Vue from 'vue'
import Router from 'vue-router'
//import Index from '@/components/Index'
//import newlists from '@/components/newlists' 
// import newsMore from '@/components/newsMore' 
// import lotts from '@/components/lotts' 
// import lottsmore from '@/components/lottsmore'
// import user from '@/components/user'
// import feedback from '@/components/feedback'
// import disclaimer from '@/components/disclaimer'
// import message from '@/components/message'
// import favorites from '@/components/favorites'

//路由懶加载
const Index = r => require.ensure([],() => r(require('@/components/Index4')), 'Index');
const Index1 = r => require.ensure([],() => r(require('@/components/Index1')), 'Index1');
const news = r => require.ensure([],() => r(require('@/components/news')), 'news');
const newlists = r => require.ensure([],() => r(require('@/components/newlists.vue')), 'newlists');
const newlists1 = r => require.ensure([],() => r(require('@/components/newlists1')), 'newlists1');
const newlists2 = r => require.ensure([],() => r(require('@/components/newlists2')), 'newlists2');
const newlists3 = r => require.ensure([],() => r(require('@/components/newlists3')), 'newlists3');

const newlists4 = r => require.ensure([],() => r(require('@/components/newlists4')), 'newlists4');
const newlists5 = r => require.ensure([],() => r(require('@/components/newlists5')), 'newlists5');
const newlists6 = r => require.ensure([],() => r(require('@/components/newlists6')), 'newlists6');
const newlists7 = r => require.ensure([],() => r(require('@/components/newlists7')), 'newlists7');

const newsMore = r => require.ensure([],() => r(require('@/components/newsMore')), 'newsMore');
const newsMore1 = r => require.ensure([],() => r(require('@/components/newsMore1')), 'newsMore1');
const newsMore2 = r => require.ensure([],() => r(require('@/components/newsMore2')), 'newsMore2');
const lotts = r => require.ensure([],() => r(require('@/components/lotts')), 'lotts');
const lottsmore = r => require.ensure([],() => r(require('@/components/lottsmore')), 'lottsmore');
const user = r => require.ensure([],() => r(require('@/components/user')), 'user');
const feedback = r => require.ensure([],() => r(require('@/components/feedback01')), 'feedback');
const disclaimer = r => require.ensure([],() => r(require('@/components/disclaimer')), 'disclaimer');
const message = r => require.ensure([],() => r(require('@/components/message')), 'message');
const favorites = r => require.ensure([],() => r(require('@/components/favorites')), 'favorites');
const htmlViewSample = r => require.ensure([],() => r(require('@/components/htmlViewSample')), 'htmlViewSample');
const marquee = r => require.ensure([],() => r(require('@/components/marquee')), 'marquee');
const framePict = r => require.ensure([],() => r(require('@/components/framePict')), 'framePict');
const frameNew = r => require.ensure([],() => r(require('@/components/frameNew')), 'frameNew');
const framekj = r => require.ensure([],() => r(require('@/components/framekj')), 'framekj');
const register = r => require.ensure([],() => r(require('@/components/register')), 'register');
const login = r => require.ensure([],() => r(require('@/components/login')), 'login');


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/newlists',
      name: 'newlists',
      component: newlists
    },
    {
      path: '/framePict',
      name: 'framePict',
      component: framePict
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/frameNew',
      name: 'frameNew',
      component: frameNew
    },
    {
      path: '/framekj',
      name: 'framekj',
      component: framekj
    },
    {
      path: '/news',
      name: 'news',
      component: news,
      redirect: '/newlists3',
      children: [
        {
          path: '/newlists1',
          name: 'newlists1',
          component: newlists1
        },
        {
          path: '/newlists2',
          name: 'newlists2',
          component: newlists2
        },
        {
          path: '/newlists3',
          name: 'newlists3',
          component: newlists3
        },
        {
          path: '/newlists4',
          name: 'newlists4',
          component: newlists4
        },
        {
          path: '/newlists5',
          name: 'newlists5',
          component: newlists5
        },
        {
          path: '/newlists6',
          name: 'newlists6',
          component: newlists6
        },
        {
          path: '/newlists7',
          name: 'newlists7',
          component: newlists7
        }
      ]
    },{
      path: '/newlists2',
      name: 'newlists2',
      component: newlists2
    },{
      path: '/newlists3',
      name: 'newlists3',
      component: newlists3
    },
    {
      path: '/newsMore',
      name: 'newsMore',
      component: newsMore
    },
    {
      path: '/newsMore1',
      name: 'newsMore1',
      component: newsMore1
    },
    {
      path: '/newsMore2',
      name: 'newsMore2',
      component: newsMore2
    },
    {
      path: '/lotts',
      name: 'lotts',
      component: lotts
    },{
      path:'/lottsmore',
      name:'lottsmore',
      component:lottsmore
    },{
      path:'/user',
      name:'user',
      component:user
    },{
      path:'/feedback',
      name:'feedback',
      component:feedback
    },{
      path:'/disclaimer',
      name:'disclaimer',
      component:disclaimer
    },{
      path:'/message',
      name:'message',
      component:message
    },{
      path:'/favorites',
      name:'favorites',
      component:favorites
    }
    ,{
      path:'/',
      name:'Index1',
      component:Index1
    }
    ,{
      path:'/htmlViewSample',
      name:'htmlViewSample',
      component:htmlViewSample
    }
    ,{
      path:'/marquee',
      name:'marquee',
      component:marquee
    }
  ]
})
