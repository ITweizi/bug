import { createStore } from 'vuex'
import user from './modules/user.js'
import getters from './modules/getters.js'
export default createStore({
  grtters: getters,
  modules: {
    user
  }
})
