define([
    './demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-badge', {
            url: '/rb-badge',
            controller: 'demo-rb-badge-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
