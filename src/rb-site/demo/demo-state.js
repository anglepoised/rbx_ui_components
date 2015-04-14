define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-site', {
            url: '/rb-site',
            controller: 'site-demo-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
