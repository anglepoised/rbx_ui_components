define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-panel-scroll', {
            url: '/rb-panel-scroll',
            controller: 'demo-rb-panel-scroll-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
