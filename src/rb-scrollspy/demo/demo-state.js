define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-scrollspy', {
            url: '/rb-scrollspy',
            controller: 'demo-rb-scrollspy-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
