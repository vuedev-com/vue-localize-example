import Vue from 'vue'

Vue.config.debug = true

import VueRouter from 'vue-router' //                           Import and install vue-router
Vue.use(VueRouter)

export var router = new VueRouter({ //                          Create vue-router instance
  linkActiveClass: 'active',
  history: true,
  saveScrollPosition: true,
  root: '/vue-localize-example/dist'
})

import routes from './config/routes' //                         Import router config obejct
import vueLocalizeConf from './config/vue-localize-conf' //     Import config for vue-localize plugin
import store from './vuex/store' //                             Import vuex store (required by vue-localize)
import VueLocalize from 'vue-localize' //                       Import vue-localize plugin

Vue.use(VueLocalize, { //                                       Registering vue-localize plugin
  store,
  config: vueLocalizeConf,
  router: router,
  routes: routes
})

router.beforeEach(function (transition) {
  if (transition.to.titleKey) { //                              Changing title on transition to new route
    store.dispatch('SET_TITLE', transition.to.titleKey)
  } else if (transition.to.titleKey === undefined) {
    store.dispatch('SET_TITLE', 'global.defaultTitle')
  }

  transition.next()
})

if (vueLocalizeConf.defaultLanguageRoute) { //                  404 handler. Looks forward to implementation of https://github.com/vuejs/vue-router/issues/382
  router.redirect({
    '*': '/' + vueLocalizeConf.defaultLanguage + '/error404',
    '/': '/' + vueLocalizeConf.defaultLanguage
  })
} else {
  router.redirect({
    '*': '/error404'
  })
}

import App from './components/App' //                           Import App component - root Vue instance

router.start(App, '#app') //                                    Application start
