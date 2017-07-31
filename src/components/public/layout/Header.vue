<template>
  <div class="header clearfix">
    <nav>
      <ul class="nav nav-pills pull-right">
        <router-link active-class="active" tag="li" exact :to="{name: $localizeRoute('public-index')}"><a>{{ 'public.header.nav.home' | translate }}</a></router-link>
        <router-link active-class="active" tag="li" :to="{name: $localizeRoute('features')}"><a>{{ 'public.header.nav.features' | translate }}</a></router-link>
        <router-link active-class="active" tag="li" :to="{name: $localizeRoute('admin-home')}"><a>{{ 'public.header.nav.admin' | translate }}</a></router-link>
        <language-selector></language-selector>
      </ul>
    </nav>
    <h3 class="text-muted">
      <router-link :to="{name: $localizeRoute('public-index')}">{{ 'projectName' | translate }}</router-link>
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
