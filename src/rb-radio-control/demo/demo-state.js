define([
    './demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-radio-control', {
            url: '/rb-radio-control',
            controller: 'demo-rb-radio-control-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
