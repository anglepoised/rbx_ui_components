define([
    'angular-ui-router',
    'html!./demo.tpl.html',
    'components/rb-badge/demo',
    'components/rb-button/demo',
    'components/rb-currency/demo',
    'components/rb-data-summary/demo',
    'components/rb-datetime-control/demo',
    'components/rb-date-time/demo',
    'components/rb-fieldset/demo',
    'components/rb-footer/demo',
    'components/rb-form-message/demo',
    'components/rb-grid/demo',
    'components/rb-header/demo',
    'components/rb-loading/demo',
    'components/rb-login-form/demo',
    'components/rb-main/demo',
    'components/rb-modal-confirm/demo',
    'components/rb-overlay-modal/demo',
    'components/rb-overlay-modeless/demo',
    'components/rb-overlay-panel/demo',
    'components/rb-page-header/demo',
    'components/rb-page-title/demo',
    'components/rb-ratio/demo',
    'components/rb-section/demo',
    'components/rb-select/demo',
    'components/rb-site/demo',
    'components/rb-system-message/demo',
    'components/rb-text-control/demo',
    'components/rb-warning-messages/demo',
    'components/rb-progress-button/demo',
    'components/rb-definition-list/demo',
    'rbx_style_guide'
], function (
    uiRouter,
    template,
    rbBadgeDemo,
    rbButtonDemo,
    rbCurrencyDemo,
    rbDataSummaryDemo,
    rbDatetimeControlDemo,
    rbDateTimeDemo,
    rbFieldsetDemo,
    rbFooterDemo,
    rbFormMessageDemo,
    rbGridDemo,
    rbHeaderDemo,
    rbLoadingDemo,
    rbLoginFormDemo,
    rbMainDemo,
    rbModalConfirmDemo,
    rbOverlayModalDemo,
    rbOverlayModelessDemo,
    rbOverlayPanelDemo,
    rbPageHeaderDemo,
    rbPageTitleDemo,
    rbRatioDemo,
    rbSectionDemo,
    rbSelectDemo,
    rbSiteDemo,
    rbSystemMessage,
    rbTextControlDemo,
    rbWarningMessagesDemo,
    rbProgressButtonDemo,
    rbDefinitionListDemo,
    css
) {
    // @ngInject
    angular
        .module('ui-demo', [
            'ui.router',
            rbBadgeDemo.name,
            rbButtonDemo.name,
            rbCurrencyDemo.name,
            rbDataSummaryDemo.name,
            rbDatetimeControlDemo.name,
            rbDateTimeDemo.name,
            rbFieldsetDemo.name,
            rbFooterDemo.name,
            rbFormMessageDemo.name,
            rbGridDemo.name,
            rbHeaderDemo.name,
            rbLoadingDemo.name,
            rbLoginFormDemo.name,
            rbMainDemo.name,
            rbModalConfirmDemo.name,
            rbOverlayModalDemo.name,
            rbOverlayModelessDemo.name,
            rbOverlayPanelDemo.name,
            rbPageHeaderDemo.name,
            rbPageTitleDemo.name,
            rbRatioDemo.name,
            rbSectionDemo.name,
            rbSelectDemo.name,
            rbSiteDemo.name,
            rbSystemMessage.name,
            rbTextControlDemo.name,
            rbWarningMessagesDemo.name,
            rbProgressButtonDemo.name,
            rbDefinitionListDemo.name
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
