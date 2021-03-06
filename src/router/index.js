import Vue from 'vue'
import VueRouter from 'vue-router'

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/discover/recomend',
    name: 'Home',
    component: resolve => require(['../views/home/Home'], resolve),
    children: [
      {
        path: '/discover',
        component: resolve => require(['../views/discover/Discover'], resolve), children: [
          {
            path: '/discover/recomend',
            component: resolve => require(['../views/discover/components/Recomend'], resolve)
          },
          {
            path: '/discover/toplist',
            component: resolve => require(['../views/discover/components/Toplist'], resolve),
            children: [
              {
                path: '/discover/toplist',
                component: resolve => require(['@/components/PlaylistDetail.vue'], resolve)
              }
            ]
          },
          {
            path: '/discover/playlist',
            component: resolve => require(['../views/discover/components/Playlist'], resolve)
          },
          {
            path: '/discover/djradio',
            component: resolve => require(['../views/discover/components/Djradio'], resolve)
          },
          {
            path: '/discover/artist',
            component: resolve => require(['../views/discover/components/Artist'], resolve)
          },
          {
            path: '/discover/album',
            component: resolve => require(['../views/discover/components/Album'], resolve)
          }
        ]
      },
      {
        path: '/my',
        component: resolve => require(['../views/my/My'], resolve)
      },
      {
        path: '/friend',
        component: resolve => require(['../views/friend/Friend'], resolve)
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
