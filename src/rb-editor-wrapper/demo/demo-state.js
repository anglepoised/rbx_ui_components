define([
    './demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-editor-wrapper', {
            url: '/rb-editor-wrapper',
            controller: 'demo-rb-editor-wrapper-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});
