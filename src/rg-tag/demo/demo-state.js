define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rg-tag', {
            url: '/rg-tag',
            controller: 'demo-tag-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
