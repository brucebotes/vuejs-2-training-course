import Home from './components/Home.vue'
import Header from './components/Header.vue'
//import User from './components/user/User.vue'
//import UserStart from './components/user/UserStart.vue'
//import UserDetail from './components/user/UserDetail.vue'
//import UserEdit from './components/user/UserEdit.vue'

// enable lazy loading of components
/* eslint-disable no-undef */
const User = (resolve) => {
  require.ensure(['./components/user/User.vue'], () => {
    resolve(require('./components/user/User.vue'))
  })
}
const UserStart = (resolve) => {
  require.ensure(['./components/user/UserStart.vue'], () => {
    resolve(require('./components/user/UserStart.vue'))
  })
}
const UserDetail = (resolve) => {
  require.ensure(['./components/user/UserDetail.vue'], () => {
    resolve(require('./components/user/UserDetail.vue'))
  })
}
const UserEdit = (resolve) => {
  require.ensure(['./components/user/UserEdit.vue'], () => {
    resolve(require('./components/user/UserEdit.vue'))
  })
}
// Disabled temporary so that we can demo named router-views
//export const routes = [
//  { path: '', component: Home },
//  {
//    path: '/user',
//    component: User,
//    children: [
//      { path: '', component: UserStart },
//      { path: ':id', component: UserDetail },
//      { path: ':id/edit', component: UserEdit, name: 'userEdit' }
//    ]
//  }
//]
export const routes = [
  {
    path: '',
    name: 'home',
    components: {
      default: Home,
      'header-top': Header
    }
  },
  {
    path: '/user',
    components: {
      default: User,
      'header-bottom': Header
    },
    children: [
      { path: '', component: UserStart },
      { path: ':id', component: UserDetail },
      {
        path: ':id/edit',
        component: UserEdit,
        name: 'userEdit',
        beforeEnter: (to, from, next) => {
          console.log('beforeEnter was called - on route definition level')
          next()
        }
      }
    ]
  },
  { path: '/redirect-me', redirect: { name: 'home' } },
  { path: '*', redirect: '/' }
]
