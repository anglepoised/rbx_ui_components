define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-main', {
            url: '/rb-main',
            controller: 'main-demo-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
