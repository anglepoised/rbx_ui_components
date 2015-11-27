define([
    './demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-fieldset', {
            url: '/rb-fieldset',
            controller: 'demo-rb-fieldset-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
