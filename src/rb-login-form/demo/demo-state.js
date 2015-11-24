define([
    './demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-login-form', {
            url: '/rb-login-form',
            controller: 'demo-login-form-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
