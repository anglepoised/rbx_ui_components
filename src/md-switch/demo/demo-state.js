define([
    './demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('md-switch', {
            url: '/md-switch',
            controller: 'demo-md-switch-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
