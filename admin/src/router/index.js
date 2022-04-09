import Vue from 'vue'
import VueRouter from 'vue-router'
import myMain from '../views/myMain'
import CategoryEdit from '../views/CategoryEdit'
import CategoryList from '../views/CategoryList'
import AdminUserEdit from '../views/AdminUserEdit'
import AdminUserList from '../views/AdminUserList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'mymain',
    component: myMain,
    children: [
      { path: 'categories/create', component: CategoryEdit },
      { path: 'categories/edit/:id', component: CategoryEdit, props: true },
      { path: 'categories/list', component: CategoryList },

      { path: 'admin_users/create', component: AdminUserEdit },
      { path: 'admin_users/edit/:id', component: AdminUserEdit, props: true },
      { path: 'admin_users/list', component: AdminUserList },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
