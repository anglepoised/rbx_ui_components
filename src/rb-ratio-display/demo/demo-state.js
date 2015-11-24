define([
    './demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-ratio-display', {
            url: '/rb-ratio-display',
            controller: 'demo-rb-ratio-display-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
