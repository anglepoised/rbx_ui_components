define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-modal-confirm', {
            url: '/rb-modal-confirm',
            controller: 'demo-rb-modal-confirm-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
