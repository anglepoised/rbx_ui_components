define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-page-header', {
            url: '/rb-page-header',
            controller: 'page-header-demo-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
