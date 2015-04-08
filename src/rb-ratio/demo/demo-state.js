define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-ratio', {
            url: '/rb-ratio',
            controller: 'demo-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
