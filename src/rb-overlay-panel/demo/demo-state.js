define([
    './demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-overlay-panel', {
            url: '/rb-overlay-panel',
            controller: 'demo-rb-overlay-panel-ctrl as demoRbOverlayPanelCtrl',
            template: template
        });
    }

    return demoState;
});
