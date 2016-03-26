<template>
    <comp-header v-ref:header></comp-header>
    <div class="container-fluid">
      <div class="row">
        <comp-aside v-ref:aside></comp-aside>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <router-view></router-view>
        </div>
      </div>
    </div>
</template>
<script>
import CompHeader from './Header'
import CompAside from './Aside'

export default {
  components: {
    CompHeader,
    CompAside
  }
}
</script>
