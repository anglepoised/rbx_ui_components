define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-form-message', {
            url: '/rb-form-message',
            controller: 'demo-rb-form-message-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
