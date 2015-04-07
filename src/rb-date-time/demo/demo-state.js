define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-date-time', {
            url: '/rb-date-time',
            controller: 'demo-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
