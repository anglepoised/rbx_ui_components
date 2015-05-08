define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-datetime', {
            url: '/rb-datetime',
            controller: 'demo-date-time-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
