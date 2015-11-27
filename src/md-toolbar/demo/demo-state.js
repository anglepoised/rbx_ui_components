define([
    './demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('md-toolbar', {
            url: '/md-toolbar',
            controller: 'demo-md-toolbar-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
