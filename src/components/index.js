import Base from './base.vue'
const install = (Vue) => {
  if (install.installed) {
    return
  }
  Vue.component(Base.name, Base)
  Vue.$$loadingImgSrc = Vue.prototype.$$loadingImgSrc = 'http://static.js.bqmart.cn/static/img/l.gif'

}
export default {
  install
}
