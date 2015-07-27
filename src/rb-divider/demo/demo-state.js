define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-divider', {
            url: '/rb-divider',
            controller: 'demo-rb-divider-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
