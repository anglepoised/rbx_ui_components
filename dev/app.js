define([
    'angular-ui-router',
    'html!./demo.tpl.html',
    'ui-components/rb-action-bar/demo',
    'ui-components/rb-badge/demo',
    'ui-components/rb-button/demo',
    'ui-components/rb-check-control/demo',
    'ui-components/rb-check-with-text-control/demo',
    'ui-components/rb-check-with-text-control-group/demo',
    'ui-components/rb-component-display/demo',
    'ui-components/rb-currency-display/demo',
    'ui-components/rb-data-summary/demo',
    'ui-components/rb-datetime-control/demo',
    'ui-components/rb-datetime-display/demo',
    'ui-components/rb-deep-search/demo',
    'ui-components/rb-definition-list/demo',
    'ui-components/rb-demo-block/demo',
    'ui-components/rb-fieldset/demo',
    'ui-components/rb-footer/demo',
    'ui-components/rb-form-message/demo',
    'ui-components/rb-generic-form/demo',
    'ui-components/rb-grid/demo',
    'ui-components/rb-header/demo',
    'ui-components/rb-loading/demo',
    'ui-components/rb-login-form/demo',
    'ui-components/rb-main/demo',
    'ui-components/rb-modal-confirm/demo',
    'ui-components/rb-overlay-modal/demo',
    'ui-components/rb-overlay-modeless/demo',
    'ui-components/rb-overlay-panel/demo',
    'ui-components/rb-page-header/demo',
    'ui-components/rb-page-title/demo',
    'ui-components/rb-panel-content/demo',
    'ui-components/rb-progress-button/demo',
    'ui-components/rb-radio-control/demo',
    'ui-components/rb-ratio-display/demo',
    'ui-components/rb-raw-html-display/demo',
    'ui-components/rb-section/demo',
    'ui-components/rb-select-control/demo',
    'ui-components/rb-side-nav/demo',
    'ui-components/rb-scrollspy/demo',
    'ui-components/rb-site/demo',
    'ui-components/rb-system-message/demo',
    'ui-components/rb-text-control/demo',
    'ui-components/rb-warning-messages/demo',
    'rbx_style_guide'
], function (
    uiRouter,
    template,
    rbActionBarDemo,
    rbBadgeDemo,
    rbButtonDemo,
    rbCheckControlDemo,
    rbCheckWithTextControlDemo,
    rbCheckWithTextControlGroupDemo,
    rbComponentDisplayDemo,
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
    rbPanelContentDemo,
    rbProgressButtonDemo,
    rbRadioControlDemo,
    rbRatioDisplayDemo,
    rbRawHtmlDisplayDemo,
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
            rbActionBarDemo.name,
            rbBadgeDemo.name,
            rbButtonDemo.name,
            rbCheckControlDemo.name,
            rbCheckWithTextControlDemo.name,
            rbCheckWithTextControlGroupDemo.name,
            rbComponentDisplayDemo.name,
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
            rbPanelContentDemo.name,
            rbProgressButtonDemo.name,
            rbRadioControlDemo.name,
            rbRatioDisplayDemo.name,
            rbRawHtmlDisplayDemo.name,
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
