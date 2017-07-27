<template>
  <li class="dropdown" :class="{'open': opened}">
    <a href="javascript:;" @click="toggle">{{ currentLanguage.toUpperCase() }} <span class="caret"></span></a>
    <ul class="dropdown-menu">
      <li v-for="(code, config) in $localizeConf.languages" v-if="code !== currentLanguage && config.enabled !== false">
          <a v-bind:href="$localizeRoutePath($route, code)" @click.prevent="changeLanguage(code)">
            {{ code.toUpperCase() }} | {{ 'global.lang.' + config.key | translate(null, currentLanguage) }}<br />
            <small class="text-muted">{{ 'global.lang.' + config.key | translate(null, currentLanguage) }}</small>
          </a>
      </li>
    </ul>
  </li>
</template>
<script>
import { replace } from 'lodash'
export default {
  data () {
    return {
      opened: false
    }
  },
  methods: {
    toggle: function () {
      this.opened = !this.opened
    },
    changeLanguage: function (code) {
      this.toggle()
      if (!this.$route.meta.localized) {
        this.$store.dispatch('SET_APP_LANGUAGE', code)
      } else {
        var oldRouteName = this.$route.name
        var routeName = replace(oldRouteName, /^[a-z]{2}/g, code)
        this.$router.push({name: routeName})
      }
    }
  }
}
</script>
