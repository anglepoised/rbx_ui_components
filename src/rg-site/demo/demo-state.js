define([
    './demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rg-site', {
            url: '/rg-site',
            controller: 'site-demo-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
