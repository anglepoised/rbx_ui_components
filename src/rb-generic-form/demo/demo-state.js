define([
    './demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-generic-form', {
            url: '/rb-generic-form',
            controller: 'demo-rb-generic-form-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
