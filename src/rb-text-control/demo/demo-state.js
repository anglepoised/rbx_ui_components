define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-text-control', {
            url: '/rb-text-control',
            controller: 'demo-text-control-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
