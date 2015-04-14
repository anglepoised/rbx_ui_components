define([
    'angular-ui-router',
    'components/rb-footer/demo',
    'components/rb-header/demo',
    'components/rb-page-header/demo',
    'components/rb-page-title/demo',
    'components/rb-date-time/demo',
    'components/rb-ratio/demo',
    'components/rb-button/demo',
    'components/rb-loading/demo',
    'components/rb-badge/demo',
    'components/rb-site/demo',
    'components/rb-main/demo'
], function (uiRouter, rbFooterDemo, rbHeaderDemo, rbPageHeaderDemo, rbPageTitleDemo, rbDateTimeDemo,
    rbRatioDemo, rbButtonDemo, rbLoadingDemo, rbBadgeDemo, rbSiteDemo, rbMainDemo) {

    // @ngInject
    angular
        .module('ui-demo', [
            'ui.router',
            rbFooterDemo.name,
            rbHeaderDemo.name,
            rbPageHeaderDemo.name,
            rbPageTitleDemo.name,
            rbDateTimeDemo.name,
            rbRatioDemo.name,
            rbButtonDemo.name,
            rbLoadingDemo.name,
            rbBadgeDemo.name,
            rbSiteDemo.name,
            rbMainDemo.name
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
