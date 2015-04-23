define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-currency', {
            url: '/rb-currency',
            controller: 'demo-currency-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});