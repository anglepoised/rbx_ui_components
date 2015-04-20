define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-system-message', {
            url: '/rb-system-message',
            controller: 'demo-rb-system-message-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
