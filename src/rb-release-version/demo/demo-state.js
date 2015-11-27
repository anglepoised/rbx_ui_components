define([
    './demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-release-version', {
            url: '/rb-release-version',
            controller: 'demo-rb-release-version-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
