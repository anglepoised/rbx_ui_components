define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-check-control', {
            url: '/rb-check-control',
            controller: 'demo-rb-check-control-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
