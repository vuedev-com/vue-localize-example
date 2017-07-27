import Vue from 'vue'

import Router from 'vue-router'                               // Import and install vue-router
import routes from './config/routes.js'                                   // Import router config obejct
import vueLocalizeConf from './config/vue-localize-conf'        // Import config for vue-localize plugin
import store from './vuex/store'                                // Import vuex store (required by vue-localize)
import VueLocalize from 'vue-localize'                          // Import vue-localize plugin

import App from './App'                                         // Import App component - root Vue instance

Vue.use(Router)

export var router = new Router({
  routes: [],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})

Vue.use(VueLocalize, { //                                       Registering vue-localize plugin
  store,
  config: vueLocalizeConf,
  router: router,
  routes: routes
})

// if (vueLocalizeConf.defaultLanguageRoute) { //                  404 handler. Looks forward to implementation of https://github.com/vuejs/vue-router/issues/382
//   router.redirect({
//     '*': '/' + vueLocalizeConf.defaultLanguage + '/error404',
//     '/': '/' + vueLocalizeConf.defaultLanguage
//   })
// } else {
//   router.redirect({
//     '*': '/error404'
//   })
// }

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: router,
  store: store
})
