define([
    './demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rg-header', {
            url: '/rg-header',
            controller: 'page-header-demo-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
