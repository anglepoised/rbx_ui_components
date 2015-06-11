define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-check-with-text-control', {
            url: '/rb-check-with-text-control',
            controller: 'demo-rb-check-with-text-control-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
