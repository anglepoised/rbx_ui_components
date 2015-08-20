define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rg-page-header', {
            url: '/rg-page-header',
            controller: 'page-header-demo-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
