define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-demo-block', {
            url: '/rb-demo-block',
            controller: 'demo-rb-demo-block-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
