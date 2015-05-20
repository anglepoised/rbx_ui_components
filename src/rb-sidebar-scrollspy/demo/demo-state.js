define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-sidebar-scrollspy', {
            url: '/rb-sidebar-scrollspy',
            controller: 'demo-rb-sidebar-scrollspy-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
