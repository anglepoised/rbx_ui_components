define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-button', {
            url: '/rb-button',
            controller: 'demo-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
