export default {

  // ------------------------------------------------------------------------- GLOBAL
  'global': {

    projectName: {
      en: 'VueLocalize example',
      ru: 'VueLocalize пример'
    },

    defaultTitle: {
      en: '*en*',
      ru: '*ru*'
    },

    // ----------------------------------------------------------------------- GLOBAL . LANG
    lang: {
      eng: {
        en: 'English',
        ru: 'Английский'
      },
      rus: {
        en: 'Russian',
        ru: 'Русский'
      }
    }

  },

  // ------------------------------------------------------------------------- PUBPLIC
  public: {

    // ----------------------------------------------------------------------- PUBPLIC . HEADER
    header: {
      nav: {
        home: {
          en: 'About',
          ru: 'О плагине'
        },
        features: {
          en: 'Features',
          ru: 'Возможности'
        },
        admin: {
          en: 'Administration',
          ru: 'Админка'
        }
      },
      admin: {
        en: 'Administration',
        ru: 'Администрирование'
      },
      unauth: {
        en: 'Without authentication',
        ru: 'Без аутентификации'
      }
    },

    // ----------------------------------------------------------------------- PUBPLIC . INDEX
    index: {
      title: {
        en: 'VueLocalize plugin usage example',
        ru: 'Пример использования плагина VueLocalize'
      },
      jdesc: {
        en: 'This example contains all features of the plugin and you can "touch" them',
        ru: 'В этом примере задействованы все возможности плагина мультиязычности и их можно "потрогать"'
      },
      sources: {
        en: 'Sources here:',
        ru: 'Исходники здесь:'
      }
    },

    // ----------------------------------------------------------------------- PUBPLIC . ABOUT
    about: {
      title: {
        en: 'About this sample',
        ru: 'Об этом шаблоне'
      }
    },

    // ----------------------------------------------------------------------- PUBPLIC . ERROR_404
    err404: {
      title: {
        en: '404 - Page not found',
        ru: '404 - Страница не найдена'
      }
    }

  },

  // ------------------------------------------------------------------------- ADMIN
  admin: {

    // ----------------------------------------------------------------------- ADMIN . NAV
    nav: {
      home: {
        en: 'Dashboard',
        ru: 'Дашборда'
      },
      settings: {
        en: 'Settings',
        ru: 'Настройки'
      }
    },

    // ----------------------------------------------------------------------- ADMIN . HOME
    home: {
      title: {
        en: 'Dashboard',
        ru: 'Дашборда'
      },
      helloText: {
        en: 'Hello! This is admin dashboard.',
        ru: 'Привет! Это гавная страница административной панели.'
      },
      helloText2: {
        en: 'Automatic routes localization is disabled for this section so there is no leading language part in paths of routes.',
        ru: 'В этой секции приложения автоматическая локализация роутов отключена и языковая часть в начале адресов роутов отсутствует.'
      },
      helloText3: {
        en: 'Language changing in this section occurs without affecting to route path.',
        ru: 'Переключение языка интерфейса в этой секции происходит без смены роута.'
      },
      helloText4: {
        en: 'By the way! In the "Settings" you can play with config options and see how it affects the application behavior.',
        ru: 'Кстати! В разделе "Настройки" можно поиграться с настройками плагина и увидеть как это влияет поведение приложения.'
      }
    },

    // ----------------------------------------------------------------------- ADMIN . HELP
    settings: {
      title: {
        en: 'Settings',
        ru: 'Настройки'
      },
      variablesInjectionTest: {
        en: 'Some text in English, %foo%, and then the %bar% variable',
        ru: 'А теперь некоторый текст на русском, переменная %bar% и затем переменная %foo%'
      }
    }

  },

  // Features page phrases
  f: {
    title: {
      en: 'Features and functionality',
      ru: 'Функциональность и возможности'
    },
    intro: {
      en: 'Introduction',
      ru: 'Введение'
    },
    arl: {
      en: 'Automatic routes localization',
      ru: 'Автоматическая локализация роутов'
    },
    arlActivate: {
      en: 'How to enable',
      ru: 'Как включить'
    },
    dlr: {
      en: 'Exclude leading language from routes path for default language',
      ru: 'Исключение языкового параметра из начала адресов для языка по умолчанию'
    },
    lroute: {
      en: 'Wrapper for route name ni %v-link%',
      ru: 'Обертка для имени роута для %v-link%'
    },
    lrp: {
      en: 'Getting path of the current route for another language',
      ru: 'Получение адреса текущего роута для другого языка'
    },
    cReusing: {
      en: 'Components reusing',
      ru: 'Переиспользование компонент'
    },
    'uiTrans': {
      en: 'Translating phrases in UI',
      ru: 'Перевод фраз интерфейса'
    },
    'reactTrans': {
      en: 'Translation reactivity',
      ru: 'Реактивность перевода'
    },
    'transFilter': {
      en: 'Translating via %translate% filter',
      ru: 'Перевод с помощью фильтра %translate%'
    },
    'transFilter2': {
      en: 'Translating via filter',
      ru: 'Перевод с помощью фильтра'
    },
    'transCall': {
      en: 'Translating via %tCall% function call',
      ru: 'Перевод с помощью глобальной функции %tCall%'
    },
    'transCall2': {
      en: 'Translating via global function call',
      ru: 'Перевод с помощью глобальной функции плагина'
    },
    'transDir': {
      en: 'Translating via %v-localize% directive',
      ru: 'Перевод с помощью директивы %v-localize%'
    },
    'transDir2': {
      en: 'Translating via directive',
      ru: 'Перевод с помощью директивы'
    },
    'transExact': {
      en: 'Translating into exact language regardless of current one',
      ru: 'Перевод на определенный язык независимо от текущего'
    },
    'transExactF': {
      en: 'Translating using filter',
      ru: 'Перевод через фильтр'
    },
    'transExactC': {
      en: 'Translating using function call',
      ru: 'Перевод через вызов'
    },
    'transExactD': {
      en: 'Translating using directive',
      ru: 'Перевод через директиву'
    },
    'varInject': {
      en: 'Variables injection',
      ru: 'Внедрение переменных'
    },
    'varInjectF': {
      en: 'Injecting via filter',
      ru: 'Внедрение через фильтр'
    },
    'varInjectC': {
      en: 'Injecting via function call',
      ru: 'Внедрение через вызов функции'
    },
    'varInjectD': {
      en: 'Injecting via directive',
      ru: 'Внедрение через директиву'
    },
    'transTitle': {
      en: 'Page title translating',
      ru: 'Перевод тайтла страницы'
    },
    'fallbackLang': {
      en: 'Fallback language',
      ru: 'Запасной язык'
    },
    'locStor': {
      en: 'Saving selected languade in browser local storage and %resaveOnLocalizedRoutesCode% config option',
      ru: 'Сохранение выбранного языка в локальном хранилище браузера и опция %resaveOnLocalizedRoutesCode%'
    },
    'globMix': {
      en: 'Global mixin for getting current language',
      ru: 'Глобальный миксин для получения текущего языка'
    },
    'transStruct': {
      en: 'Translations file structure',
      ru: 'Структура хранения переводов'
    },
    // 'confFile': {
    //   en: '',
    //   ru: 'Опции и формат конфига'
    // },
    'ph1': {
      en: 'This example implements the skeleton application with public and admistrative sections',
      ru: 'Данный пример реализует скелет приложения с публичной и административной секциями.'
    },
    'ph2': {
      en: 'This is the public section.',
      ru: 'В данный момент вы находитесь в публичной части приложения.'
    },
    'ph3': {
      en: 'This feature enabled for the public section of this example app. It means that VueLocalize will add leading language part automatically to all paths of the public section.',
      ru: 'Для публичной части этого приложения включена автоматическая локалиция роутов. Это означает, что плагин VueLocalize будет автоматически добавлять языковой параметр в начало пути для всех роутов публичной секции.'
    },
    'ph4': {
      en: 'If you\'ll try to switching between',
      ru: 'Если вы попробуете переходить между страницами'
    },
    'ph5': {
      en: 'pages in Russian, you\'ll see that each route path contains the leading language part %rlRu%.',
      ru: 'предварительно выбрав русский язык, то увидите, что в начале адреса каждого роута добавлен языковой параметр %rlRu%.'
    },
    'ph6': {
      en: 'Only thing you have to do for enable this feature is just add %locTrue% into the root-level route in the router config',
      ru: 'Автоматическая локализация роутов включается добавлением опции %locTrue% в роут верхнего уровня.'
    },
    'ph7': {
      en: 'How it looks like:',
      ru: 'Выглядит это так:'
    },
    'ph8': {
      en: 'In the VueLocalize config of this example app, English defined as default application language:',
      ru: 'В этом примере в конфигурационном файле плагина VueLocalize в качестве языка по умолчанию определен английский язык:'
    },
    'ph9': {
      en: 'If you\'ll switched to English and try to walking between',
      ru: 'Если вы переключитесь на английский и попробуете переходить между страницами'
    },
    'ph10': {
      en: ', you\'ll see that there is no leading language in paths.',
      ru: ', то увидите, что на английском языке начальный языковой параметр отсутствует.'
    },
    'ph11': {
      en: 'This behaviour achieved by setting %defaultLanguageRouteFalse% in the config of the VueLocalize plugin.',
      ru: 'Это достигается установкой %defaultLanguageRouteFalse% в конфиге плагина локализации VueLocalize.'
    },
    'ph12': {
      en: 'Set this option to %true% if you need to add leading language part for all languages including default.',
      ru: 'Если установить эту опцию в %true%, то начальный языковой параметр будет добавляться в адреса роутов на любом языке, включая язык по умолчанию.'
    },
    'ph13': {
      en: 'VueLocalize transforms router config automatically and recursively cloning root-level routes having %locTrue% option.',
      ru: 'Плагин VueLocalize автоматически трансформирует конфиг роутера, рекурсивно клонируя роуты верхнего уровня имеющие опцию %locTrue%'
    },
    'ph14': {
      en: 'E.g. sub route of this page defined with name %rn-features% and path %rp-features%',
      ru: 'Например саброут этой страницы определен с именем %rn-features% и адресом %rp-features%'
    },
    'ph15': {
      en: 'After transformation by the VueLocalize plugin, the root-level route %rr% will be duplicated for each language with all nested sub routes.',
      ru: 'После преобразования плагином VueLocalize, корневой роут %rr% будет продублирован для каждого языка со всем вложенными саброутами.'
    },
    'ph16': {
      en: 'So there are two routes for this page now, one for the Englis and other one for the Russian, named %en-features% and %ru-features% respectively.',
      ru: 'Таким образом для этой страницы теперь существует два роута, один для английского языка, другой - для русского, с именами %en-features% и %ru-features% соответственно.'
    },
    'ph17': {
      en: 'The question arises: how we should to form routes names for current language to use in %v-link% directive to make navigation properly?',
      ru: 'Возникает вопрос: как формировать имена роутов под текущий язык для использования в %v-link% чтобы реализовать правильно работающую навигацию?'
    },
    'ph18': {
      en: 'The VueLocalize plugin provides the special function-wrapper %lRoute% for this purpose.',
      ru: 'Для этого плагин VueLocalize предоставляет глобальную функцию-обертку для имен роутов %lRoute%'
    },
    'ph19': {
      en: 'You can pass initial route name into %v-link% as they defined in router config, but wrapped with %lRoute%.',
      ru: 'Подставляйте в %v-link% исходные имена роутов так как они определены в конфиге роутера, оборачивая их в %lRoute%.'
    },
    'ph20': {
      en: 'Then the navigation links with %v-link% will always be correct regardless of current language.',
      ru: 'Тогда каким бы ни был текущий язык, навигационные ссылки c %v-link% всегда будут правильные.'
    },
    'ph21': {
      en: 'Example:',
      ru: 'Пример:'
    },
    'ph22': {
      en: 'and, you can specify the language code as the second argument if need to get link to a page in other (than current) language:',
      ru: 'а еще можно указать код языка вторым параметром если необходимо получить ссылку для языка отличного от текущего:'
    },
    'ph23': {
      en: 'However, sometimes it\'s necessary to get the path of the current route for another language.',
      ru: 'Однако иногда надо получить адрес текущего роута для другого языка.'
    },
    'ph24': {
      en: 'There is the global function %lRoutePath% for this.',
      ru: 'Для этого в плагине VueLocalize существует глобальная функция %lRoutePath%.'
    },
    'ph25': {
      en: 'A detailed description you can find in the documentation, and an example of usage in the source codes of this application on githab in the LanguageSelector.vue file.',
      ru: 'Подробное описание можно найти в документации, а пример использования в исходных кодах этого приложения на гитхабе в файле LanguageSelector.vue.'
    },
    'ph26': {
      en: 'Switching the language at this page performs not only reactive translation of all phrases of interface, but also changes the route path.',
      ru: 'При переключении языка этой страницы происходит не только реактивный перевод всех фраз интерфейса, но и смена роута.'
    },
    'ph27': {
      en: 'However, both routes of this page have the same Vue instance in %component% field.',
      ru: 'Однако, оба роута этой страницы имеют один и тотже экземпляр компоненты в свойстве %component%.'
    },
    'ph28': {
      en: 'So VueRouter will not activate the component again but will reuse it, and %dataObj% in component will not be affected.',
      ru: 'А следовательно VueRouter не будет реактивировать компоненту заново, а переиспользует ее и объект %dataObj% останется без изменений.'
    },
    'ph29': {
      en: 'It should be noted that triggering of the VueRouter %dataHook% hook is inevitably in this case.',
      ru: 'Здесь надо отметить, что в этом случае неизбежно срабатывание хука %dataHook%.'
    },
    'ph30': {
      en: 'If you have this hook defined for retrieving some data which shouldn\'t be affected with language changing, or just it is necessary to avoid data reloading, you can use the %isJustLangSw% gobal function inside the %dataHook% hook, passing transition object. Then you can perform data loading only if fucntion returned %false%.',
      ru: 'В случае если у вас определен этот хук и в нем происходит получение каких-то данных, на которые нельзя влиять при переключении языка или же просто необходимо избежать повторного их получения, можно воспользоваться глобальной функцией плагина %isJustLangSw% внутри хука, передав в нее объект %transtion%, и вызывать получение данных только если функция вернула %false%.'
    },
    'ph31': {
      en: 'For exapmple:',
      ru: 'Например:'
    },
    'ph32': {
      en: 'Since the current application language is the Veux state, which in turn follows the Vue reactivity principles, all phrases will translated reactively each time when current language was changed.',
      ru: 'Поскольку текущий язык приложения является состоянием Vuex, который в свою очередь следует реактивным приципам Vue, перевод всех фраз интерфейса при смене языка будет происходить реактивно.'
    },
    'ph33': {
      en: 'Technically any of the variants below can be used:',
      ru: 'При переводе тайтла страницы технически можно использовать любой из следующих вариантов:'
    },
    'ph34': {
      en: 'However the first two variants are shit because of braces flashing on page loading and reloading',
      ru: 'Однако первые два использовать нежелательно из-за отображения фигурных скобок при загрузке или перезагрузке страницы.'
    },
    'ph35': {
      en: 'If it is necessary to publish an application when there is no complete translations for all languages, but there is complete translation into at least one language, you can specify this language as a fallback.',
      ru: 'При необходимости опубликовать приложение на этапе, когда еще нет полных переводов на все языки, но на какой-то один перевод выполнен полностью, можно задать этот язык как запасной.'
    },
    'ph36': {
      en: 'Then in other languages with incomplete translation, phrases which are untranslated yet, will be translated into fallback language, and users will not see incomprehensible identifiers.',
      ru: 'Тогда на других языках с незавершенным переводом, фразы, которые еще не переведены, будут переводиться на этот запасной язык и пользователи не будут видеть непонятные идентификаторы.'
    },
    'ph37': {
      en: 'Set to %true% the corresponding option in the VueLocalize config to activate this feature:',
      ru: 'Чтобы включить функцию перевода на запасной язык установите соответствующую опцию в конфигурационном файле плагина в %true%:'
    },
    'ph38': {
      en: 'And define exact fallback language in another corresponding option:',
      ru: 'И определите собственно какой язык использовать как запасной в другой соответствующей опции:'
    },
    'ph39': {
      en: 'VueLocalize saves selected language in a local storage of browser and provides the ability to affect on application behaviour at transitions from localized routes to not localized.',
      ru: 'Плагин сохраняет выбранный пользователем язык в локальном хранилище браузера и предоставляет возможность управления поведением приложения при переходе от локализованных роутов к роутам не имеющим начального языкового параметра.'
    },
    'ph40': {
      en: 'Localized route clearly defines the language of the page, so there is no need to get stored language from the local storage for those pages.',
      ru: 'Локализованные роуты явно определяют язык страницы приложения, поэтому для таких страниц не требуется доставать из локального хранилища сохраненное значение.'
    },
    'ph41': {
      en: 'But when initialization starts with not localized route, plugin will use the language saved in local storage or default one.',
      ru: 'Но при инициализации приложения когда начальный роут не имеет языкового параметра, плагин будет использовать язык сохраненный в локальном хранилище или же язык по умолчанию.'
    },
    'ph42': {
      en: 'And there is the option %resaveOnLocalizedRoutesCode%, which specifies is there the need to rewrite value, saved in local storage, at transitions to localized routes.',
      ru: 'Опция %resaveOnLocalizedRoutesCode% указывает плагину надо ли перезаписывать сохраненное в локальном хранилище значение при переключении языка на локализованных роутах.'
    },
    'ph43': {
      en: 'For example, if app must remember the language selected in administrative section and switching the labguages in pucic section with localized routes shouldn\'t affect this choice, set this option to %false%.',
      ru: 'Например, если приложение должно помнить язык выбранный в административной панели и смена языков на публичной части, где в адресах роутов присутствует языковой параметр, не должна влиять на этот выбор, то установите эту опцию в %false%.'
    },
    'ph44': {
      en: 'Otherwise if you need to adjust transparent behaviour at language switching, set it to %true%',
      ru: 'Если же наоборот необходимо задать прозрачное поведение приложения при смене языка, установите в %true%'
    },
    'ph45': {
      en: 'VueLocalize provides global mixin for retrieving current language inside of any Vue instance of your application. It\'s in fact just a proxy to a corresponding Vuex getter.',
      ru: 'Плагин предоставляет глобальный миксин для получения текущего языка в любой компоненте приложения, который является по сути прокси на Vuex getter.'
    },
    'ph46': {
      en: 'You can get current language via %currentLanguage% in templates and via %thisCurrentLanguage% in methods.',
      ru: 'Получить текущий язык можно через %currentLanguage% в темплейте компоненты и через %thisCurrentLanguage% в методах.'
    },
    'ph47': {
      en: 'or',
      ru: 'или'
    },
    'ph48': {
      en: 'and',
      ru: 'и'
    },
    'ph49': {
      ru: 'Попробуйте накрутить счетчик и переключить язык:',
      en: 'Try to increment the counter below and then change the language:'
    }

  }

}
