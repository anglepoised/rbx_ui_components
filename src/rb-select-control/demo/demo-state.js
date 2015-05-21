define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-select-control', {
            url: '/rb-select-control',
            controller: 'demo-rb-select-control-ctrl as demoRbSelectControlCtrl',
            template: template
        });
    }

    return demoState;
});
