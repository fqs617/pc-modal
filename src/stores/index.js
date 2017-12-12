import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const plugins = debug ? [createLogger(), localConfig] : [localConfig]

export default new Vuex.Store({
  actions,
  getters,
  modules: {
  },
  strict: debug,
  plugins: plugins
})
