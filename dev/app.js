define([
    'angular-ui-router',
    'html!./demo.tpl.html',
    'components/rb-badge/demo',
    'components/rb-button/demo',
    'components/rb-date-time/demo',
    'components/rb-footer/demo',
    'components/rb-header/demo',
    'components/rb-loading/demo',
    'components/rb-login-form/demo',
    'components/rb-main/demo',
    'components/rb-page-header/demo',
    'components/rb-page-title/demo',
    'components/rb-ratio/demo',
    'components/rb-site/demo',
    'components/rb-text-control/demo',
    'rbx_style_guide'
], function (
    uiRouter, template, rbBadgeDemo, rbButtonDemo, rbDateTimeDemo, rbFooterDemo, rbHeaderDemo, rbLoadingDemo,
    rbLoginFormDemo, rbMainDemo, rbPageHeaderDemo, rbPageTitleDemo, rbRatioDemo, rbSiteDemo, rbTextControlDemo, css
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
            rbLoginFormDemo.name,
            rbMainDemo.name,
            rbPageHeaderDemo.name,
            rbPageTitleDemo.name,
            rbRatioDemo.name,
            rbSiteDemo.name,
            rbTextControlDemo.name
        ])
        .config(function ($stateProvider, $httpProvider) {

            // App State
            $stateProvider.state({
                name: 'app',
                url: '/',
                template: template,
                controller: function ($scope, $state) {
                    $scope.states = $state.get();
                }
            });

        })
        .config(function ($urlRouterProvider, $locationProvider) {
            // Turn on HTML5 pushState routes if available
            $locationProvider.html5Mode(true);

            // Show the error page if a route isn't matched
            $urlRouterProvider.otherwise(function ($injector, $location) {
                var $state = $injector.get('$state');
                $state.go('app');
            });
        });
});
