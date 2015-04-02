define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-footer', {
            url: '/rb-footer',
            controller: 'footer-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
