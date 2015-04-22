define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-data-summary', {
            url: '/rb-data-summary',
            controller: 'demo-rb-data-summary-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
