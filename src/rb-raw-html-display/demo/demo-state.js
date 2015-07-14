define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-raw-html-display', {
            url: '/rb-raw-html-display',
            controller: 'demo-rb-raw-html-display-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
