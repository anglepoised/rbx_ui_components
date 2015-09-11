define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-box-selector', {
            url: '/rb-box-selector',
            controller: 'demo-rb-box-selector-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
