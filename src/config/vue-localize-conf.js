/**
 * Import localization file with translations
 */
import translations from './vue-localize-translations'

export default {
  /**
   * The list of application languages
   */
  languages: {
    en: {
      key: 'eng', // phrase key in the translation file for translating language name into different languages
      enabled: true // Set to false if need to disable language
    },
    ru: {
      key: 'rus',
      enabled: true
    },
    de: {
      key: 'deu',
      enabled: false
    }
  },

  /**
   * Default language will be used if the language nowhere defined (together in current route, Vuex store and localStorage)
   * Usually it works if user came for the first time
   */
  defaultLanguage: 'en',

  /**
   * The object with translations of application phrases
   */
  translations: translations,

  /**
   * Defines the behaviour of routes localization (adding language at the start of path of a routes)
   * If false, disable leading language param for all routes with default language, or enable otherwise
   */
  defaultLanguageRoute: false,

  /**
   * Defines the policy for storing selected language in browser local storage for
   * transiotions from localized routes to not localized and backwards
   *
   * If false, transition from NOT localized route to localized will not update selected language in local storage, and
   * it will be taken up when you'll back TO NOT localized route FROM LOCALIZED, even you have switched languages with
   * language selector.
   * It can be useful in cases when you need to remember the language selected in user account or administrative panel
   * and switching languages at the public section of a site should not affect this choice
   *
   * Set to true if you need transparent behaviour of application when switching languages and language must be changed for
   * all application regargless of where exactly it was switched, in administration panel or at the public section of a site
   */
  resaveOnLocalizedRoutes: false,

  /**
   * Name of the key for default context of translations
   */
  defaultContextName: 'global',

  /**
   * Set to true if you want to translate phrases which has no translation
   * into the language defined in the option "fallbackLanguage" below
   * It may be usefull when you already need to publish your app, but you have
   * no complete translations into all languages for all phrases
   */
  fallbackOnNoTranslation: true,

  /**
   * Defines the fallback language for using in case described in comment for the option above
   */
  fallbackLanguage: 'en',

  /**
   * Suppress warnings emitted into browser console (concerns only translation process)
   * Plugin can emit warnings during translation phrases process in the following cases:
   *
   * 1) phrase path doesn't exists in localization file (emitted always)
   *
   * 2) phrase path exists but there is no translation into current
   *    language (emitted only if "fallbackOnNoTranslation" is set to false)
   *
   * 3) phrase path exists, hasn't translation into current language and hasn't
   *    translation into fallback language (emitted only if "fallbackOnNoTranslation" is
   *    set to true)
   *
   * 4) Output translation contains unprocessed variables which will shown to user  as is, e.g. %foo%
   */
  supressWarnings: false
}
