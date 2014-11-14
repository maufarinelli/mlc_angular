var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/Spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/js',

    paths: {
        jQuery: 'external/jquery-1.10.2.min',
        lodash: 'external/lodash',
        general: 'general',
        angular: 'external/angular.min',
        angularRoute: 'external/angular-route.min',
        angularMocks: 'external/angular-mocks',

        addExtra: 'Add_Extra/addextra.module',
        addGuaranteed: 'Add_Guaranteed/addguaranteed.module',
        addNumbers: 'Add_Numbers/addnumbers.module',
        billboard: 'Billboard/billboard.module',
        extra: 'Extra/extra.module',
        guaranteed: 'Guaranteed/guaranteed.module',
        lastdraw: 'Last_Draw/lastdraw.module',
        myNumbers: 'My_Numbers/mynumbers.module',

        mlcApp: 'mlc.app',

        translation: 'translation',
        en: 'locales/en',
        fr: 'locales/fr'
    },
    shim: {
        'Add_Extra/add_extra.html': {deps: ['angular']},
        // Libraries
        'jQuery': {
            exports: '$'
        },
        'lodash': {
            exports: '_'
        },
        'angular': {
            exports: 'angular'
        },
        'angularRoute': {
            deps: ['angular']
        },
        'angularMocks': {
            deps: ['angular']
        },
        'translation': {
            exports: 'translation'
        },
        'mlcApp': {
            deps: [
                'lodash',
                'jQuery',
                'angular',
                'angularRoute',
                'translation', 
                'general'
            ],
            exports: 'mlcApp'
        },

        // Local files
        'en': {
            deps: ['translation'],
            exports: 'en'
        },
        'fr': {
            deps: ['translation'],
            exports: 'fr'
        }
    },

    priority: [
        'angular'
    ],
    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
