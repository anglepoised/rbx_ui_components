define([
    './demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-loading', {
            url: '/rb-loading',
            controller: 'demo-rb-loading-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
