<template>
  <div class="header clearfix">
    <nav>
      <ul class="nav nav-pills pull-right">
        <!-- <router-link tag="li" :to="{name: $localizeRoute('public-index'), exact:true}">{{ 'public.header.nav.home' | translate }}</router-link> -->
        <!-- <router-link tag="li" :to="{name: $localizeRoute('features')}">{{ 'public.header.nav.features' | translate }}</router-link> -->
        <!-- <router-link tag="li" :to="{name: $localizeRoute('admin-home')}">{{ 'public.header.nav.admin' | translate }}</router-link> -->
        <language-selector></language-selector>
      </ul>
    </nav>
    <h3 class="text-muted">
      <!-- <router-link :to="{name: $localizeRoute('public-index')}">{{ 'projectName' | translate }}</router-link> -->
    </h3>
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
