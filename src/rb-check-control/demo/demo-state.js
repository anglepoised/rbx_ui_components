define([
    './demo.tpl.html',
    './demo-group.tpl.html'
], function (template, groupTemplate) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-check-control', {
            url: '/rb-check-control',
            controller: 'demo-rb-check-control-ctrl as demoCtrl',
            template: template
        });
        $stateProvider.state('rb-check-control-group', {
            url: '/rb-check-control-group',
            controller: 'demo-rb-check-control-group-ctrl as demoCtrl',
            template: groupTemplate
        });
    }

    return demoState;
});
