define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-check-with-text-control-group', {
            url: '/rb-check-with-text-control-group',
            controller: 'demo-rb-check-with-text-control-group-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
