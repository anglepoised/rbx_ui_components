define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-tabs', {
            url: '/rb-tabs',
            controller: 'demo-rb-tabs-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
