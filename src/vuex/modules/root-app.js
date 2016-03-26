// Vuex store submodule
import {
  SET_TITLE
} from '../mutation-types'

const state = {
  currentTitle: 'defaultTitle'
}

const mutations = {
  [SET_TITLE] (state, title) {
    state.currentTitle = title
  }
}

export default {
  state,
  mutations
}
