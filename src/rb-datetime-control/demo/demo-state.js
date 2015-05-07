define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-datetime-control', {
            url: '/rb-datetime-control',
            controller: 'demo-rb-datetime-control-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
