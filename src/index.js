'use strict'
import Vue from 'vue'
import bqUI from '~'
import plugin from 'plugins'
// import store from './stores/index'
import router from '@/config/router.config'
import LoadingConfig from '@/config/loading.config'
import component from '@/components'
import '*/scss/index.scss'

Vue.config.productionTip = bq.isDevelopment
window.router = router

Vue.use(plugin)
Vue.use(bqUI)
Vue.use(component)

// router 处理
LoadingConfig(router)
new Vue({ router }).$mount('#app')
