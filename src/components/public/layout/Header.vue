<template>
  <div class="header clearfix">
    <nav>
      <ul class="nav nav-pills pull-right">
        <li V-link-active><a v-link="{name: $localizeRoute('public-index'), exact:true}">{{ 'public.header.nav.home' | translate }}</a></li>
        <li v-link-active><a v-link="{name: $localizeRoute('features')}">{{ 'public.header.nav.features' | translate }}</a></li>
        <li v-link-active><a v-link="{name: $localizeRoute('admin-home')}">{{ 'public.header.nav.admin' | translate }}</a></li>
        <language-selector></language-selector>
      </ul>
    </nav>
    <h3 class="text-muted"><a v-link="{name: $localizeRoute('public-index')}">{{ 'projectName' | translate }}</a></h3>
  </div>
</template>

<script>
import LanguageSelector from '../../common/LanguageSelector'

export default {
  components: {
    LanguageSelector
  }
}
</script>
