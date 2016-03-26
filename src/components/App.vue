<script>
import store from '../vuex/store'

import { currentTitle } from '../vuex/getters'
import Vue from 'vue'
Vue.mixin({
  vuex: {
    getters: {
      currentTitle: currentTitle
    }
  }
})

export default {
  // injecting Vuex store into the root Vue instance
  store,
  ready: function () {
    this.$vueLocalizeInit(this.$route)
  }
}
</script>
