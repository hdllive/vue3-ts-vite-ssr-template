import home from '../views/home/index.vue'
import mine from '../views/mine/index.vue'
import { createRouter, createMemoryHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: home,
    meta: {
      title: '首页',
      keepAlive: false
    }
  },
  {
    path: '/mine',
    name: 'mine',
    component: mine,
    meta: {
      title: '个人中心',
      keepAlive: false
    }
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router