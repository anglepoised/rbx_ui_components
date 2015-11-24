define([
    './demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-warning-messages', {
            url: '/rb-warning-messages',
            controller: 'demo-warning-messages-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
