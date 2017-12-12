import {Pagination, Button, Loading, MessageBox, Notification, Message} from 'element-ui'

const VERSION = '0.0.1'

const install = function(Vue, _opts = {}) {
  if (install.installed) return
  Vue.use(Loading.directive)

  Vue.use(Pagination)
  Vue.use(Button)

  Vue.prototype.$loading = Loading.service
  Vue.prototype.$msgbox = MessageBox
  Vue.prototype.$alert = MessageBox.alert
  Vue.prototype.$confirm = MessageBox.confirm
  Vue.prototype.$prompt = MessageBox.prompt
  Vue.prototype.$notify = Notification
  Vue.prototype.$message = Message

}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: VERSION,
  install
}
