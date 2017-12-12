/**
 * @export
 * @param {any} router 路由
 * @param {any} store vuex store
 */
export default function LoadingConfig(router) {
  router.beforeEach(async(to, from, next) => {
    let { matched, fullPath, path } = to

    if (matched.some(record => record.meta.requiresAuth)) {
      // 用户登录处理 判断当前登录状态 如果未登录 直接去登录页面
      let isLoggedIn = false
      if (isLoggedIn) {
        next({
          path: '/login',
          query: { redirect: fullPath }
        })
        return
      }
    }
    if (/^http/.test(path)) {
      let url = path.split('http')[1]
      window.location.href = `http${url}`
    } else {
      next()
    }
  })

  router.afterEach((to) => {
    let { name } = to
    console.log(name)
  })
}
