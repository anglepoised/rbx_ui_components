define([
    './demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('md-toast', {
            url: '/md-toast',
            controller: 'demo-md-toast-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
