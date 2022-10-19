import { createRouter, createWebHistory } from '@ionic/vue-router';
// import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import SplashPage from '../views/SplashPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import ContentTest from '../views/ContentTest.vue'
import LoginPage from '../views/LoginPage.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import AirtimePurchase from '../views/AirtimePurchase.vue'
const routes = [
  {
    path: '/',
    redirect: 'splash'
  },
  {
    path: '/splash',
    name: 'splash',
    component: SplashPage,
  },
  {
    path: '/ap',
    name: 'ap',
    component: AirtimePurchase,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage,
  },
  {
    path: '/c',
    name: 'c',
    component: ContentTest,
  },
  {
    path: '/l',
    name: 'l',
    component: LoginPage,
  },
  {
    path: '/f',
    name: 'f',
    component: ForgotPassword,
  },
  {
    path: '/dashboard',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
