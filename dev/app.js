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
    'components/rb-modal-confirm/demo',
    'components/rb-page-header/demo',
    'components/rb-page-title/demo',
    'components/rb-ratio/demo',
    'components/rb-site/demo',
    'components/rb-system-message/demo',
    'components/rb-text-control/demo',
    'components/rb-warning-messages/demo',
    'rbx_style_guide'
], function (
    uiRouter,
    template,
    rbBadgeDemo,
    rbButtonDemo,
    rbDateTimeDemo,
    rbFooterDemo,
    rbHeaderDemo,
    rbLoadingDemo,
    rbLoginFormDemo,
    rbMainDemo,
    rbModalConfirmDemo,
    rbPageHeaderDemo,
    rbPageTitleDemo,
    rbRatioDemo,
    rbSiteDemo,
    rbSystemMessage,
    rbTextControlDemo,
    rbWarningMessagesDemo,
    css
) {
    uiRouter, template, rbBadgeDemo, rbButtonDemo, rbDateTimeDemo, rbFooterDemo, rbHeaderDemo, rbLoadingDemo,
    rbLoginFormDemo, rbMainDemo, rbPageHeaderDemo, rbPageTitleDemo, rbRatioDemo, rbSiteDemo, rbSystemMessage,
    rbTextControlDemo, rbWarningMessagesDemo, css
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
            rbModalConfirmDemo.name,
            rbPageHeaderDemo.name,
            rbPageTitleDemo.name,
            rbRatioDemo.name,
            rbSiteDemo.name,
            rbSystemMessage.name,
            rbTextControlDemo.name,
            rbWarningMessagesDemo.name
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
        })
        .value('warningStates', {
            // A map of all available WARNING_IDENTIFIER: UI_ROUTER_STATE
            // (key:value) pairs
            // Everytime a user clicks an issue link on any warning message,
            // will be a redirection to a UI-Router state.
            // UI-Router states will be determined by this key:value map
            // with key: WARNING_IDENTIFIER
            // STATES FOR DEMO PURPOSES ONLY
            'PARTIAL_TRACKING': 'tracking',
            'OTHER_STATE': 'other_state'
        });
});
