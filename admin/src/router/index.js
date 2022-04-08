import Vue from 'vue'
import VueRouter from 'vue-router'
import myMain from '../views/myMain'
import CategoryEdit from '../views/CategoryEdit'
import CategoryList from '../views/CategoryList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'mymain',
    component: myMain,
    children: [
      { path: 'categories/create', component: CategoryEdit },
      { path: 'categories/list', component: CategoryList },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
