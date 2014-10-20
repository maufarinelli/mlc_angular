// Karma configuration
// Generated on Sat Oct 11 2014 16:40:11 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
        {pattern: 'js/external/angular.min.js', included: false},
        {pattern: 'js/external/angular-route.min.js', included: false},
        {pattern: 'js/external/angular-mocks.js', included: false},
        {pattern: 'js/external/jquery-1.10.2.min.js', included: false},
        {pattern: 'js/external/lodash.js', included: false},
        {pattern: 'js/mlc.app.js', included: false},
        {pattern: 'js/routes.js', included: false},
        {pattern: 'js/translation.js', included: false},
        {pattern: 'js/general.js', included: false},
        {pattern: 'js/controllers/core.controller.js', included: false},
        {pattern: 'js/controllers/lottery649.controller.js', included: false},
        {pattern: 'js/controllers/actions/*.js', included: false},

        {pattern: 'test/unit/controllersSpec.js', included: false},
        'test/test-main.js'
    ],


    // list of files to exclude
    exclude: [
        'js/config.require.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};