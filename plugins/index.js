import Bq from './bq/bq'
import Cookie from './cookie/cookie'
import LocalStorage from './local'
import Session from './session/session.storage'
import Utils from './utils'
const install = function(Vue) {
  Vue.use(Bq)
  Vue.use(Cookie)
  Vue.use(LocalStorage)
  Vue.use(Session)
  Vue.use(Utils)
}
export default {
  install
}
