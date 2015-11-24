define([
    './demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-section', {
            url: '/rb-section',
            controller: 'demo-rb-section-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
