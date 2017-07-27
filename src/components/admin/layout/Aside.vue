<template>
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <router-link tag="li" :to="{name: $localizeRoute('admin-home')}"><a>{{ 'admin.nav.home' | translate }}</a></router-link>
      <router-link tag="li" :to="{name: $localizeRoute('admin-settings')}"><a>{{ 'admin.nav.settings' | translate }}</a></router-link>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
