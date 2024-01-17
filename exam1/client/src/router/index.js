import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue';
//import BoardMain from '../views/BoardMain.vue'
import BoardList from '../views/BoardList.vue';
import BoardInfo from '../views/BoardInfo.vue';
import BoardForm from '../views/BoardForm.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Main
  }, 
  {
    path: '/list',
    name: 'boardList',
    component: BoardList
  },
  // { //  이거 쓸러면 경로를 잘 설정해야한다
  //   path: '/board',
  //   name: 'boardMain',
  //   component: BoardMain,
  //   children : [
  //    {
  //  path: 'list'
  //  component : MainChild
  //  }
  //]    
  //   
  // },
  {
    path: '/info',
    name: 'boardInfo',
    component: BoardInfo
  },
  {
    path: '/form',
    name: 'boardForm',
    component: BoardForm
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
