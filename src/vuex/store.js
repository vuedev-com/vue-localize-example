import Vuex from 'vuex'
import Vue from 'vue'
import rootApp from './modules/root-app'
import { vueLocalizeVuexStoreModule } from 'vue-localize'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    rootApp,
    vueLocalizeVuexStoreModule
  }
})
