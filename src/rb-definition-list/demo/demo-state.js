define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-definition-list', {
            url: '/rb-definition-list',
            controller: 'demo-rb-definition-list-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
