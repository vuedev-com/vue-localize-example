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
         <li v-html="'f.lroute' | $translate(injectVars)">\</li>
         <li v-html="'f.lrp' | translate"></li>
         <li v-html="'f.cReusing' | translate"></li>
       </ul>
       <li v-html="'f.uiTrans' | translate"></li>
       <ul>
        <li v-html="'f.reactTrans' | translate"></li>
        <li v-html="'f.transFilter' | translate(injectVars)"></li>
        <li v-html="'f.transCall' | translate(injectVars)"></li>
        <li v-html="'f.transDir' | translate(injectVars)"></li>
        <li v-html="'f.varInject' | translate"></li>
        <li v-html="'f.transExact' | translate"></li>
        <li v-html="'f.transTitle' | translate"></li>
        <li v-html="'f.fallbackLang' | translate"></li>
       </ul>
       <li v-html="'f.locStor' | translate(injectVars)"></li>
       <li v-html="'f.ph44' | translate(injectVars)"></li>
       <li v-html="'f.transStruct' | translate"></li>
     </ul>
     <h1 v-html="'f.intro' | translate"></h1>

     {{ 'f.ph1' | translate }}<br />
     {{ 'f.ph2' | translate }}<br /><br />

     <h1 v-html="'f.arl' | translate"></h1>

     {{ 'f.ph3' | translate }}<br /><br />

     {{ 'f.ph4' | translate }} <router-link :to="{name: $localizeRoute('public-index')}">{{ 'public.header.nav.home' | translate }}</router-link> {{ 'f.ph48' | translate }}
     <router-link :to="{name: $localizeRoute('features')}">{{ 'public.header.nav.features' | translate }}</router-link>
     {{{ 'f.ph5' | translate(injectVars) }}}
     <h3 v-html="'f.arlActivate' | translate"></h3>
     {{{ 'f.ph6' | translate(injectVars) }}}<br />
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

     <h3 v-html="'f.dlr' | translate"></h3>
     {{ 'f.ph8' | translate }}<br />
     <code>defaultLanguage: 'en'</code><br /><br />
     {{ 'f.ph9' | translate }}
     <router-link :to="{name: $localizeRoute('public-index')}">{{ 'public.header.nav.home' | translate }}</router-link>
     {{ 'f.ph48' | translate }}
     <router-link :to="{name: $localizeRoute('features')}">{{ 'public.header.nav.features' | translate }}</router-link>
     {{ 'f.ph10' | translate }}<br /><br />
     {{{ 'f.ph11' | translate(injectVars) }}}<br /><br />
     {{{ 'f.ph12' | translate(injectVars) }}}<br />

     <h3 v-html="'f.lroute' | translate(injectVars)"></h3>

     {{{ 'f.ph13' | translate(injectVars) }}}<br /><br />
     {{{ 'f.ph14' | translate(injectVars) }}}<br />
     {{{ 'f.ph15' | translate(injectVars) }}}
     {{{ 'f.ph16' | translate(injectVars) }}}<br /><br />
     {{{ 'f.ph17' | translate(injectVars) }}}<br /><br />
     {{{ 'f.ph18' | translate(injectVars) }}}<br /><br />
     {{{ 'f.ph19' | translate(injectVars) }}}<br /><br />
     {{{ 'f.ph20' | translate(injectVars) }}}<br /><br />
     {{ 'f.ph21' | translate }} <br /><br />

     <code>{{ vars.localizeRouteExample }}</code><br />
     {{ 'f.ph22' | translate }}<br />
     <code>{{ vars.localizeRouteExampleExactLang }}</code>

     <h3 v-html="'f.lrp' | translate"></h3>

     {{ 'f.ph23' | translate }}
     {{{ 'f.ph24' | translate(injectVars) }}}<br /><br />
     {{ 'f.ph25' | translate }}

     <h3 v-html="'f.cReusing' | translate"></h3>
     {{ 'f.ph26' | translate }}<br />
     {{{ 'f.ph27' | translate(injectVars) }}}<br >
     {{{ 'f.ph28' | translate(injectVars) }}}<br /><br />

     {{ 'f.ph49' | translate }}<br /><br />
     <button class="btn btn-default btn-lg" @click="counter++">Counter: {{ counter }}</button><br /><br />
     <div class="btn-group">
      <router-link :to="{name: $localizeRoute('features', 'en')}" class="btn" :class="{'btn-primary': isEn, 'btn-default': isRu}">EN</router-link>
      <router-link :to="{name: $localizeRoute('features', 'ru')}" class="btn" :class="{'btn-primary': isRu, 'btn-default': isEn}">RU</router-link>
     </div><br /><br />

     {{{ 'f.ph29' | translate(injectVars) }}}<br /><br />
     {{{ 'f.ph30' | translate(injectVars) }}}<br /><br />
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

     <h1 v-html="'f.uiTrans' | translate"></h1>
     <h3 v-html="'f.reactTrans' | translate"></h3>
     {{ 'f.ph32' | translate }}<br /><br /><br />

     <h3 v-html="'f.transFilter2' | translate"></h3>
     <h3><code>{{ vars.filterExample }}</code></h3><br /><br />

     <h3 v-html="'f.transCall2' | translate"></h3>
     <h3><code>{{ vars.directCallExample }}</code></h3><br />
     <h3 v-html="'f.ph47' | translate"></h3>
     <h3><code>{{ vars.directCallExample2 }}</code></h3><br />
     <br /><br />

     <h3 v-html="'f.transDir2' | translate"></h3>
     <h3><code>{{ vars.directiveExample }}</code></h3><br /><br /><br />

     <h3 v-html="'f.varInject' | translate"></h3>

     <h3 v-html="'f.varInjectF' | translate"></h3>
     <h3><code>{{ vars.injectViaFilter }}</code></h3><br /><br />

     <h3 v-html="'f.varInjectC' | translate"></h3>
     <h3><code>{{ vars.injectViaDirectCall }}</code></h3><br /><br />

     <h3 v-html="'f.varInjectD' | translate"></h3>
     <h5><code>{{ vars.injectViaDirective }}</code></h5><br /><br />

     <h3>{{ 'f.transExact' | translate }}</h3>
     <h3>{{ 'f.transExactF' | translate }}</h3>
     <h3><code>{{ vars.exaxtExampleFilter }}</code></h3><br /><br />

     <h3>{{ 'f.transExactC' | translate }}</h3>
     <h3><code>{{ vars.exaxtExampleCall }}</code></h3><br /><br />

     <h3>{{ 'f.transExactD' | translate }}</h3>
     <h4><code>{{ vars.exaxtExampleDirective }}</code></h4><br /><br />

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
     {{{ 'f.ph37' | translate(injectVars) }}}<br />
     <code>fallbackOnNoTranslation: true</code><br /><br />

     {{ 'f.ph38' | translate }}<br />
     <code>fallbackLаnguage: 'en'</code>

     <h2>{{{ 'f.locStor' | translate(injectVars) }}}</h2>
     {{ 'f.ph39' | translate }}<br />
     {{ 'f.ph40' | translate }}<br />
     {{ 'f.ph41' | translate }}
     <br /><br />
     {{{ 'f.ph42' | translate(injectVars) }}}<br /><br />
     {{{ 'f.ph43' | translate(injectVars) }}}<br />
     {{{ 'f.ph44' | translate(injectVars) }}}

     <h2>{{ 'f.globMix' | translate(injectVars) }}</h2>
     {{ 'f.ph45' | translate }}<br />
     {{{ 'f.ph46' | translate(injectVars) }}}


     <!-- <h2>{{ 'f.transStruct' | translate(injectVars) }}</h2> -->
     <!-- <h2>{{ 'f.confFile' | translate(injectVars) }}</h2> -->
    </div>
  </div>
</template>
<script>
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
        'directiveExample': '<span v-localize="{path: \'projectName\'}"></span>',

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
    isEn: function () {
      return this.currentLanguage === 'en'
    },
    isRu: function () {
      return this.currentLanguage === 'ru'
    }
  }
}
</script>
