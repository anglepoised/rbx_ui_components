define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-panel-content', {
            url: '/rb-panel-content',
            controller: 'demo-rb-panel-content-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
