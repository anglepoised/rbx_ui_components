define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-component-display', {
            url: '/rb-component-display',
            controller: 'demo-rb-component-display-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
