define([
    'angular-ui-router',
    'html!./demo.tpl.html',
    'components/rb-badge/demo',
    'components/rb-button/demo',
    'components/rb-check-control/demo',
    'components/rb-check-with-text-control/demo',
    'components/rb-check-with-text-control-group/demo',
    'components/rb-currency-display/demo',
    'components/rb-data-summary/demo',
    'components/rb-datetime-control/demo',
    'components/rb-datetime-display/demo',
    'components/rb-deep-search/demo',
    'components/rb-definition-list/demo',
    'components/rb-demo-block/demo',
    'components/rb-fieldset/demo',
    'components/rb-footer/demo',
    'components/rb-form-message/demo',
    'components/rb-generic-form/demo',
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
    'components/rb-panel-scroll/demo',
    'components/rb-progress-button/demo',
    'components/rb-radio-control/demo',
    'components/rb-ratio-display/demo',
    'components/rb-section/demo',
    'components/rb-select-control/demo',
    'components/rb-side-nav/demo',
    'components/rb-scrollspy/demo',
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
    rbCheckControlDemo,
    rbCheckWithTextControlDemo,
    rbCheckWithTextControlGroupDemo,
    rbCurrencyDisplayDemo,
    rbDataSummaryDemo,
    rbDatetimeControlDemo,
    rbDatetimeDisplayDemo,
    rbDeepSearch,
    rbDefinitionListDemo,
    rbDemoBlockDemo,
    rbFieldsetDemo,
    rbFooterDemo,
    rbFormMessageDemo,
    rbGenericFormDemo,
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
    rbPanelScrollDemo,
    rbProgressButtonDemo,
    rbRadioControlDemo,
    rbRatioDisplayDemo,
    rbSectionDemo,
    rbSelectControlDemo,
    rbSideNav,
    rbScrollspyDemo,
    rbSiteDemo,
    rbSystemMessage,
    rbTextControlDemo,
    rbWarningMessagesDemo,
    css
) {
    // @ngInject
    angular
        .module('ui-demo', [
            'ui.router',
            rbBadgeDemo.name,
            rbButtonDemo.name,
            rbCheckControlDemo.name,
            rbCheckWithTextControlDemo.name,
            rbCheckWithTextControlGroupDemo.name,
            rbCurrencyDisplayDemo.name,
            rbDataSummaryDemo.name,
            rbDatetimeControlDemo.name,
            rbDatetimeDisplayDemo.name,
            rbDeepSearch.name,
            rbDefinitionListDemo.name,
            rbDemoBlockDemo.name,
            rbFieldsetDemo.name,
            rbFooterDemo.name,
            rbFormMessageDemo.name,
            rbGridDemo.name,
            rbGenericFormDemo.name,
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
            rbPanelScrollDemo.name,
            rbProgressButtonDemo.name,
            rbRadioControlDemo.name,
            rbRatioDisplayDemo.name,
            rbSectionDemo.name,
            rbSelectControlDemo.name,
            rbSideNav.name,
            rbScrollspyDemo.name,
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

                    // First element is abstract route of ''
                    $scope.states.shift();
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
