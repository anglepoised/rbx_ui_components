define([
    './demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-header', {
            url: '/rb-header',
            controller: 'header-demo-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
