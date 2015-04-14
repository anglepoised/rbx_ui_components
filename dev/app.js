define([
    'angular-ui-router',
    'components/rb-badge/demo',
    'components/rb-button/demo',
    'components/rb-date-time/demo',
    'components/rb-footer/demo',
    'components/rb-header/demo',
    'components/rb-loading/demo',
    'components/rb-main/demo',
    'components/rb-page-header/demo',
    'components/rb-page-title/demo',
    'components/rb-ratio/demo',
    'components/rb-site/demo'
], function (
    uiRouter, rbBadgeDemo, rbButtonDemo, rbDateTimeDemo, rbFooterDemo, rbHeaderDemo, rbLoadingDemo, rbMainDemo,
    rbPageHeaderDemo, rbPageTitleDemo, rbRatioDemo, rbSiteDemo
    ) {

    // @ngInject
    angular
        .module('ui-demo', [
            'ui.router',
            rbBadgeDemo.name,
            rbButtonDemo.name,
            rbDateTimeDemo.name,
            rbFooterDemo.name,
            rbHeaderDemo.name,
            rbLoadingDemo.name,
            rbPageHeaderDemo.name,
            rbPageTitleDemo.name,
            rbMainDemo.name,
            rbDateTimeDemo.name,
            rbRatioDemo.name,
            rbButtonDemo.name,
            rbLoadingDemo.name,
            rbBadgeDemo.name,
            rbRatioDemo.name,
            rbSiteDemo.name
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
