<template>
  <div class="container" style="max-width: none !important;">
    <public-header></public-header>
    <router-view></router-view>
    <public-footer></public-footer>
  </div>
</template>

<script>
import PublicHeader from './Header'
import PublicFooter from './Footer'

export default {
  components: {
    PublicHeader,
    PublicFooter
  }
}
</script>
