define([
    './demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-side-nav', {
            url: '/rb-side-nav',
            controller: 'demo-rb-side-nav-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
