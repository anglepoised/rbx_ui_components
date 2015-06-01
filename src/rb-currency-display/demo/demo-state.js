define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-currency-display', {
            url: '/rb-currency-display',
            controller: 'demo-currency-display-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
