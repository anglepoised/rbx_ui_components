define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-action-bar', {
            url: '/rb-action-bar',
            controller: 'demo-rb-action-bar-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
