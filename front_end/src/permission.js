import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // 页面加载进度条插件

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done()
    } else {
      const hasGetUserInfoRoles = store.getters.roles && store.getters.roles.length > 0      
      if (hasGetUserInfoRoles) {
        next()
      } else {
        try {
          // get user info
          // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
           const { user_role }  = await store.dispatch('user/getInfo')
          const roles = [];
          roles.push(user_role)
          
          // generate accessible routes map based on roles
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles) 

          // dynamically add accessible routes
          router.addRoutes(accessRoutes)

          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          next()
          // await store.dispatch('user/getInfo').then(response => {            
          //   const roles = response.user_role
          //   console.log({roles});
            
          //   // store.dispatch('GenerateRoutes', { roles }).then(() => { // 生成可访问的路由
              
          //   //   router.addRoutes(store.getters.addRouters) // 动态添加可访问路由
          //   //   next({ ...to, replace: true }) // 清除hash记录，验证权限之后不让用户点击返回上一个路由
          //   // }) // 详情查看：https://juejin.im/post/591aa14f570c35006961acac 
          // }).catch(err => {
          //   console.log(err)
          // })
          // next()
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)  // token 被reset时 导航到登陆页面
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
