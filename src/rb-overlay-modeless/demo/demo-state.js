define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-overlay-modeless', {
            url: '/rb-overlay-modeless',
            controller: 'demo-rb-overlay-modeless-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
