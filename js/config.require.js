'use strict';

if(typeof localStorage.require === 'undefined') {
    localStorage.require = 'lotto649';
}

if(typeof localStorage.lang === 'undefined') {
    localStorage.lang = 'en';
}

require.config({
    paths: {
        jQuery: 'external/jquery-1.10.2.min',
        lodash: 'external/lodash',
        general: 'general',
        angular: 'external/angular.min',
        angularRoute: 'external/angular-route.min',
        mlcApp: 'mlc.app',

        'translation': 'translation',
        'en': 'locales/en',
        'fr': 'locales/fr'
    },
    shim: {
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
        },

        priority: [
            "angular"
        ]
    }
});

window.name = "NG_DEFER_BOOTSTRAP!";

/* I18n files */
if(typeof localStorage.lang === 'undefined') {
    localStorage.lang = 'en';
    require(['en'], function(en) {});
} else if(localStorage.lang === 'fr') {
    require(['fr'], function(fr) {});
} else {
    require(['en'], function(en) {});
}
/* end of I18n files */

require([
    'angular',
    'mlcApp',
    'translation',
    'routes',
    'controllers/actions/menu.controller'
], function(angular, mlcApp, translation, routes) {
    var $html = angular.element(document.getElementsByTagName('html')[0]);

    translateApp.i18n.translate();

    angular.element().ready(function() {
        angular.resumeBootstrap([mlcApp['name']]);
    });
});