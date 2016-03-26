<template>
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <li v-link-active><a v-link="{name: $localizeRoute('admin-home')}">{{ 'admin.nav.home' | translate }}</a></li>
      <li v-link-active><a v-link="{name: $localizeRoute('admin-settings')}">{{ 'admin.nav.settings' | translate }}</a></li>
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
