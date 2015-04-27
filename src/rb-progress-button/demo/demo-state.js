define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-progress-button', {
            url: '/rb-progress-button',
            controller: 'demo-rb-progress-button-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
