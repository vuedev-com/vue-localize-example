<template>
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" @click="mobileMenuCollapsed = !mobileMenuCollapsed">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link :to="{name: $localizeRoute('public-index')}">{{ 'projectName' | translate }}</router-link>
      </div>
      <div id="navbar" class="navbar-collapse collapse" :class="{'in': mobileMenuCollapsed}">
        <ul class="nav navbar-nav navbar-right">
          <router-link tag="li" :to="{name: $localizeRoute('admin-home')}"><a>{{ 'admin.nav.home' | translate }}</a></router-link>
          <router-link tag="li" :to="{name: $localizeRoute('admin-settings')}"><a>{{ 'admin.nav.settings' | translate }}</a></router-link>
          <language-selector></language-selector>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  import LanguageSelector from '../../common/LanguageSelector'
  export default {
    data () {
      return {
        mobileMenuCollapsed: false
      }
    },
    components: {
      LanguageSelector
    },
    methods: {
    }
  }
</script>
