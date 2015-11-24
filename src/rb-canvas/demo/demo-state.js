define([
    './demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-canvas', {
            url: '/rb-canvas',
            controller: 'demo-rb-canvas-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
