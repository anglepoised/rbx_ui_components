define([
    './demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rg-text-control', {
            url: '/rg-text-control',
            controller: 'demo-rg-text-control-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
