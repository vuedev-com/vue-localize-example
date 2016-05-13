<script>
import store from '../vuex/store'

export default {
  // injecting Vuex store into the root Vue instance
  store,
  ready: function () {
    this.$vueLocalizeInit(this.$route)
  }
}
</script>
