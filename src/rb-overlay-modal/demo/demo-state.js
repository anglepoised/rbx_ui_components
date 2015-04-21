define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-overlay-modal', {
            url: '/rb-overlay-modal',
            controller: 'demo-rb-overlay-modal-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
