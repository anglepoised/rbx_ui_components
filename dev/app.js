define([
    'angular-ui-router',
    'components/rb-footer/demo',
    'components/rb-header/demo'
], function (uiRouter, rbFooterDemo, rbHeaderDemo) {

    // Setup of development app for working on rb-table
    // @ngInject
    angular
        .module('ui-demo', [
            'ui.router',
            rbFooterDemo.name,
            rbHeaderDemo.name
        ])
        .config(function ($stateProvider, $httpProvider) {

            // App State
            $stateProvider.state({
                name: 'app',
                abstract: true,
                url: '/',
                template: '<div ui-view></div>'
            });

        })
        .config(function ($urlRouterProvider, $locationProvider) {
            // Turn on HTML5 pushState routes if available
            $locationProvider.html5Mode(true);

            // Show the error page if a route isn't matched
            $urlRouterProvider.otherwise(function ($injector, $location) {
                var $state = $injector.get('$state');
                $state.go('rb-footer');
            });
        });
});

