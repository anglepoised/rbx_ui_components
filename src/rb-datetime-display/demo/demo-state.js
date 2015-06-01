define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-datetime-display', {
            url: '/rb-datetime-display',
            controller: 'demo-datetime-display-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
