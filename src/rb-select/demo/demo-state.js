define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-select', {
            url: '/rb-select',
            controller: 'demo-rb-select-ctrl as demoRbSelectCtrl',
            template: template
        });
    }

    return demoState;
});
