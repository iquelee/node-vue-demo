import Vue from 'vue'
import VueRouter from 'vue-router'
import myMain from '../views/myMain'
import CategoryEdit from '../views/CategoryEdit'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'mymain',
    component: myMain,
    children: [
      { path: '/categories/create', component: CategoryEdit }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
