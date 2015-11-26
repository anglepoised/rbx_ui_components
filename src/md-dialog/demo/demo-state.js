define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('md-dialog', {
            url: '/md-dialog',
            controller: 'demo-md-dialog-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
