define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-header', {
            url: '/rb-header',
            controller: 'header-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
