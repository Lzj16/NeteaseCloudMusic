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
    component: () => import('../views/home/Home'),
    children: [
      {
        path: '/discover',
        component: () => import('../views/discover/Discover'), children: [
          {
            path: '/discover/recomend',
            component: () => import('../views/discover/components/Recomend')
          },
          {
            path: '/discover/toplist',
            component: () => import('../views/discover/components/Toplist'),
            children: [
              {
                path: '/discover/toplist',
                component: () => import('@/components/PlaylistDetail.vue')
              }
            ]
          },
          {
            path: '/discover/playlist',
            component: () => import('../views/discover/components/Playlist')
          },
          {
            path: '/discover/djradio',
            component: () => import('../views/discover/components/Djradio')
          },
          {
            path: '/discover/artist',
            component: () => import('../views/discover/components/Artist')
          },
          {
            path: '/discover/album',
            component: () => import('../views/discover/components/Album')
          }
        ]
      },
      {
        path: '/my',
        component: () => import('../views/my/My')
      },
      {
        path: '/friend',
        component: () => import('../views/friend/Friend')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
