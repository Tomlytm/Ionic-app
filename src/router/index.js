import { createRouter, createWebHistory } from '@ionic/vue-router';
// import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import SplashPage from '../views/SplashPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import LoginPage from '../views/LoginPage.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import AirtimePurchase from '../views/AirtimePurchase.vue'
// import PayBills from '../views/PayBills.vue'
import ProfilePage from '../views/ProfilePage.vue'
import SendMoney from '../views/SendMoney.vue'
import AddMoney from '../views/AddMoney.vue'
import ChooseBank from '../views/ChooseBank.vue'
import ExchangePage from '../views/ExchangePage.vue'
import ConfirmExchange from '../views/ConfirmExchange.vue'
import VerificationPage from '../views/VerificationPage.vue'
import TransactionPage from '../views/TransactionPage.vue'

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
    path: '/send',
    name: 'send',
    component: SendMoney,
  },
  {
    path: '/add',
    name: 'add',
    component: AddMoney,
  },
  {
    path: '/choose',
    name: 'choose',
    component: ChooseBank,
  },
  {
    path: '/exchange',
    name: 'exchange',
    component: ExchangePage,
  },
  {
    path: '/verification',
    name: 'verification',
    component: VerificationPage,
  },
  {
    path: '/transaction',
    name: 'transaction',
    component: TransactionPage,
  },
  {
    path: '/confirm-exchange',
    name: 'confirm-exchange',
    component: ConfirmExchange,
  },
  {
    path: '/airtime',
    name: 'airtime',
    component: AirtimePurchase,
  },
  // {
  //   path: '/bills',
  //   name: 'bills',
  //   component: PayBills,
  // },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage,
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePage,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: ForgotPassword,
  },
  {
    path: '/',
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
