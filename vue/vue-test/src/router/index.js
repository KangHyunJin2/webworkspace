import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'

// path , name , component 이 기본이다
const routes = [ //내가 필요한것 만큼 추가 가능 
  {
    path: '/',          //해당 경로 불러오는 곳 / 별도로 이름도 불러오기 가능
    name: 'home',
    component: HomeView
  },
  {
    path : '/dataBinding',
    name : 'dataBinding',
    component : DataBinding
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes // 라우팅
})

export default router
