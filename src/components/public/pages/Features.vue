<template>
  <div class="row marketing">
    <div class="col-sm-12">
      <h1>{{ 'f.title' | translate }}</h1>
    </div>
    <div class="col-sm-12">
     <ul>
       <li>{{ 'f.intro' | translate }}</li>
       <li>{{ 'f.arl' | translate }}</li>
       <ul>
         <li>{{ 'f.arlActivate' | translate }}</li>
         <li>{{ 'f.dlr' | translate }}</li>
         <li v-html="$translate('f.lroute', injectVars)"></li>
         <li>{{ 'f.lrp' | translate }}</li>
         <li>{{ 'f.cReusing' | translate }}</li>
       </ul>
       <li>{{ 'f.uiTrans' | translate }}</li>
       <ul>
        <li>{{ 'f.reactTrans' | translate }}</li>
        <li v-html="$translate('f.transFilter', injectVars)"></li>
        <li v-html="$translate('f.transCall', injectVars)"></li>
        <li>{{ 'f.varInject' | translate }}</li>
        <li>{{ 'f.transExact' | translate }}</li>
        <li>{{ 'f.transTitle' | translate }}</li>
        <li>{{ 'f.fallbackLang' | translate }}</li>
       </ul>
       <li v-html="$translate('f.locStor', injectVars)"></li>
       <li>{{ 'f.globMix' | translate }}</li>
       <li>{{ 'f.transStruct' | translate }}</li>
     </ul>
     <h1>{{ 'f.intro' | translate }}</h1>

     {{ 'f.ph1' | translate }}<br />
     {{ 'f.ph2' | translate }}<br /><br />

     <h1>{{ 'f.arl' | translate }}</h1>

     {{ 'f.ph3' | translate }}<br /><br />

     {{ 'f.ph4' | translate }} <router-link :to="{name: $localizeRoute('public-index')}">{{ 'public.header.nav.home' | translate }}</router-link> {{ 'f.ph48' | translate }}
     <router-link :to="{name: $localizeRoute('features')}">{{ 'public.header.nav.features' | translate }}</router-link>
     <span v-html="$translate('f.ph5', injectVars)"></span>
     <h3>{{'f.arlActivate' | translate }}</h3>
     <span v-html="$translate('f.ph6', injectVars)"></span><br />
     {{ 'f.ph7' | translate }}<br />
     <code>
      ...
      <br />
      export default {<br />
      &nbsp;&nbsp;'/': {<br />
      &nbsp;&nbsp;&nbsp;&nbsp;component: PublicLayout,<br />
      &nbsp;&nbsp;&nbsp;&nbsp;localized: true,<br />
      ...
     </code>

     <h3>{{ 'f.dlr' | translate }}</h3>
     {{ 'f.ph8' | translate }}<br />
     <code>defaultLanguage: 'en'</code><br /><br />
     {{ 'f.ph9' | translate }}
     <router-link :to="{name: $localizeRoute('public-index')}">{{ 'public.header.nav.home' | translate }}</router-link>
     {{ 'f.ph48' | translate }}
     <router-link :to="{name: $localizeRoute('features')}">{{ 'public.header.nav.features' | translate }}</router-link>
     {{ 'f.ph10' | translate }}<br /><br />
     <span v-html="$translate('f.ph11', injectVars)"></span><br /><br />
     <span v-html="$translate('f.ph12', injectVars)"></span><br />

     <h3 v-html="$translate('f.lroute', injectVars)"></h3>

     <span v-html="$translate('f.ph13', injectVars)"></span><br /><br />
     <span v-html="$translate('f.ph14', injectVars)"></span><br />
     <span v-html="$translate('f.ph15', injectVars)"></span>
     <span v-html="$translate('f.ph16', injectVars)"></span><br /><br />
     <span v-html="$translate('f.ph17', injectVars)"></span><br /><br />
     <span v-html="$translate('f.ph18', injectVars)"></span><br /><br />
     <span v-html="$translate('f.ph19', injectVars)"></span><br /><br />
     <span v-html="$translate('f.ph20', injectVars)"></span><br /><br />
     {{ 'f.ph21' | translate }} <br /><br />

     <code>{{ vars.localizeRouteExample }}</code><br />
     {{ 'f.ph22' | translate }}<br />
     <code>{{ vars.localizeRouteExampleExactLang }}</code>

     <h3>{{ 'f.lrp' | translate }}</h3>

     {{ 'f.ph23' | translate }}
     <span v-html="$translate('f.ph24', injectVars)"></span><br /><br />
     {{ 'f.ph25' | translate }}

     <h3>{{ 'f.cReusing' | translate }}</h3>
     {{ 'f.ph26' | translate }}<br />
     <span v-html="$translate('f.ph27', injectVars)"></span><br >
     <span v-html="$translate('f.ph28', injectVars)"></span><br /><br />

     {{ 'f.ph49' | translate }}<br /><br />
     <button class="btn btn-default btn-lg" @click="counter++">Counter: {{ counter }}</button><br /><br />
     <div class="btn-group">
      <router-link :to="{name: $localizeRoute('features', 'en')}" class="btn" :class="{'btn-primary': isEn, 'btn-default': isRu}">EN</router-link>
      <router-link :to="{name: $localizeRoute('features', 'ru')}" class="btn" :class="{'btn-primary': isRu, 'btn-default': isEn}">RU</router-link>
     </div><br /><br />

     <span v-html="$translate('f.ph29', injectVars)"></span><br /><br />
     <span v-html="$translate('f.ph30', injectVars)"></span><br /><br />
     {{ 'f.ph31' | translate }} <br />
     <code>
     route: {<br />
     &nbsp;&nbsp;data: function (transtion) {<br />
     &nbsp;&nbsp;&nbsp;&nbsp;if (this.$isJustLanguageSwitching(transition)) {<br />
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transition.next()<br />
     &nbsp;&nbsp;&nbsp;&nbsp;}<br />
     &nbsp;&nbsp;&nbsp;&nbsp;<br />
     &nbsp;&nbsp;&nbsp;&nbsp;// тут получаем данные<br />
     &nbsp;&nbsp;&nbsp;&nbsp;<br />
     &nbsp;&nbsp;&nbsp;&nbsp;transition.next()<br />
     &nbsp;&nbsp;}<br />
     }
     </code>

     <h1>{{ 'f.uiTrans' | translate }}</h1>
     <h3>{{ 'f.reactTrans' | translate }}</h3>
     {{ 'f.ph32' | translate }}<br /><br /><br />

     <h3>{{ 'f.transFilter2' | translate }}</h3>
     <h3><code>{{ vars.filterExample }}</code></h3><br /><br />

     <h3>{{ 'f.transCall2' | translate }}</h3>
     <h3><code>{{ vars.directCallExample }}</code></h3><br />
     <h3>{{ 'f.ph47' | translate }}</h3>
     <h3><code>{{ vars.directCallExample2 }}</code></h3><br />
     <br /><br />

     <h3>{{ 'f.varInject' | translate }}</h3>

     <h3>{{ 'f.varInjectF' | translate }}</h3>
     <h3><code>{{ vars.injectViaFilter }}</code></h3><br /><br />

     <h3>{{ 'f.varInjectC' | translate }}</h3>
     <h3><code>{{ vars.injectViaDirectCall }}</code></h3><br /><br />

     <h3>{{ 'f.transExact' | translate }}</h3>
     <h3>{{ 'f.transExactF' | translate }}</h3>
     <h3><code>{{ vars.exaxtExampleFilter }}</code></h3><br /><br />

     <h3>{{ 'f.transExactC' | translate }}</h3>
     <h3><code>{{ vars.exaxtExampleCall }}</code></h3><br /><br />

     <h3>{{ 'f.transTitle' | translate }}</h3>
     {{ 'f.ph33' | translate }}<br />
     <h3>
     <code>
       {{ vars.titleEx1 }}<br /><br />
       {{ vars.titleEx2 }}<br /><br />
       {{ vars.titleEx3 }}<br /><br />
       {{ vars.titleEx4 }}<br /><br />
     </code>
     </h3>
     {{ 'f.ph34' | translate }}

     <h3>{{ 'f.fallbackLang' | translate }}</h3>
     {{ 'f.ph35' | translate }}
     {{ 'f.ph36' | translate }}<br /><br />
     <span v-html="$translate('f.ph37', injectVars)"></span><br />
     <code>fallbackOnNoTranslation: true</code><br /><br />

     {{ 'f.ph38' | translate }}<br />
     <code>fallbackLаnguage: 'en'</code>

     <h2 v-html="$translate('f.locStor', injectVars)"></h2>
     {{ 'f.ph39' | translate }}<br />
     {{ 'f.ph40' | translate }}<br />
     {{ 'f.ph41' | translate }}
     <br /><br />
     <span v-html="$translate('f.ph42', injectVars)"></span><br /><br />
     <span v-html="$translate('f.ph43', injectVars)"></span><br />
     <span v-html="$translate('f.ph44', injectVars)"></span>

     <h2 v-html="$translate('f.globMix', injectVars)"></h2>
     {{ 'f.ph45' | translate }}<br />
     <span v-html="$translate('f.ph46', injectVars)"></span>

    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      counter: 0,
      vars: {
        translate: '',

        localizeRouteExample: '<router-link :to="{name: $localizeRoute(\'features\')}">',
        localizeRouteExampleExactLang: '<router-link :to="{name: $localizeRoute(\'features\', \'de\')}">',

        'filterExample': '{{ \'projectName\' | translate }}',
        'directCallExample': '{{ $translate(\'projectName\') }}',
        'directCallExample2': '<span v-text="$translate(\'projectName\')"></span>',

        'injectViaFilter': '{{ \'phrase-with-vars\' | translate(injectVars) }}',
        'injectViaDirectCall': '{{ $translate(\'phrase-with-vars\', injectVars) }}',
        'injectViaDirective': '<span v-localize="{path: \'phrase-with-vars\', vars: injectVars}"></span>',

        'exaxtExampleFilter': '{{ \'projectName\' | translate null \'en\' }}',
        'exaxtExampleCall': '{{ $translate(\'projectName\', null, \'en\') }}',
        'exaxtExampleDirective': '<span v-localize="{path: \'projectName\', lang: \'en\'}"></span>',

        'titleEx1': '<title>{{ $translate(currentTitle) }}</title>',
        'titleEx2': '<title>{{ currentTitle | translate }}</title>',
        'titleEx3': '<title v-localize="{path: currentTitle}"></title>',
        'titleEx4': '<title v-text="$translate(currentTitle)"></title>'
      },
      injectVars: {
        '%foo%': 'Foo',
        '%bar%': 'Bar',

        '%v-link%': '<code>v-link</code>',
        '%translate%': '<code>translate</code>',
        '%tCall%': '<code>$translate()</code>',
        '%v-localize%': '<code>v-localize</code>',
        '%link-about%': '',
        '%link-features%': '',
        '%rlRu%': '<code>/ru</code>',
        '%locTrue%': '<code>localized: true</code>',
        '%true%': '<code>true</code>',
        '%false%': '<code>false</code>',
        '%rn-features%': '<code>features</code>',
        '%rp-features%': '<code>/features</code>',
        '%rr%': '<code>/</code>',
        '%en-features%': '<code>en_features</code>',
        '%ru-features%': '<code>ru_features</code>',
        '%lRoute%': '<code>$localizeRoute()</code>',
        '%lRoutePath%': '<code>$localizeRoutePath($route, language)</code>',
        '%component%': '<code>component:</code>',
        '%dataObj%': '<code>$data</code>',
        '%dataHook%': '<code>data()</code>',
        '%isJustLangSw%': '<code>$isJustLanguageSwitching(transition)</code>',
        '%transtion%': '<code>transition</code>',
        '%resaveOnLocalizedRoutesCode%': '<code>resaveOnLocalizedRoutes</code>',
        '%currentLanguage%': '<code>currentLanguage</code>',
        '%thisCurrentLanguage%': '<code>this.currentLanguage</code>',
        '%defaultLanguageRouteFalse%': '<code>defaultLanguageRoute: false</code>'
      }
    }
  },
  computed: {
    ...mapState({
      currentLanguage: state => state.vueLocalize.currentLanguage
    }),
    isEn: function () {
      return this.currentLanguage === 'en'
    },
    isRu: function () {
      return this.currentLanguage === 'ru'
    }
  }
}
</script>
