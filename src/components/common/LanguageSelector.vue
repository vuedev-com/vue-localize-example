<template>
  <li class="dropdown" :class="{'open': opened}">
    <a href="javascript:;" @click="toggle">{{ currentLanguage.toUpperCase() }} <span class="caret"></span></a>
    <ul class="dropdown-menu">
      <li v-for="(config, code) in $localizeConf.languages" v-if="code !== currentLanguage && config.enabled !== false">
          <a v-bind:href="$localizeRoutePath($route, code)" @click.prevent="changeLanguage(code)">
            {{ code.toUpperCase() }} | {{ `global.lang.${config.key}` | translate(null, code) }}<br />
            <small class="text-muted">{{ `global.lang.${config.key}` | translate(null, currentLanguage) }}</small>
          </a>
      </li>
    </ul>
  </li>
</template>
<script>
import { replace } from 'lodash'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      opened: false
    }
  },
  computed: {
    ...mapState({
      currentLanguage: state => state.vueLocalize.currentLanguage
    })
  },
  methods: {
    toggle: function () {
      this.opened = !this.opened
    },
    changeLanguage: function (code) {
      this.toggle()
      if (!this.$route.meta.localized) {
        this.$store.commit('SET_APP_LANGUAGE', code)
      } else {
        var oldRouteName = this.$route.name
        var routeName = replace(oldRouteName, /^[a-z]{2}/g, code)
        this.$router.push({name: routeName})
      }
    }
  }
}
</script>
