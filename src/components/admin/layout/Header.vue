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
        <a class="navbar-brand" v-link="{name: $localizeRoute('public-index')}">{{ 'projectName' | translate }}</a>
      </div>
      <div id="navbar" class="navbar-collapse collapse" :class="{'in': mobileMenuCollapsed}">
        <ul class="nav navbar-nav navbar-right">
          <li v-link-active><a v-link="{name: $localizeRoute('admin-home')}">{{ 'admin.nav.home' | translate }}</a></li>
          <li v-link-active><a v-link="{name: $localizeRoute('admin-settings')}">{{ 'admin.nav.settings' | translate }}</a></li>
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
