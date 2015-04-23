define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-grid', {
            url: '/rb-grid',
            controller: 'demo-rb-grid-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
