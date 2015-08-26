define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-upload-status', {
            url: '/rb-upload-status',
            controller: 'demo-rb-upload-status-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
