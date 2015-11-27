define([
    './demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-deep-search', {
            url: '/rb-deep-search',
            controller: 'demo-rb-deep-search-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
