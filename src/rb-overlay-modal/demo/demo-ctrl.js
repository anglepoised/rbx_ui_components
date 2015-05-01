define([
], function () {

    // @ngInject
    function demoCtrl ($rootScope, $state, $injector) {
        this.log = function () {
            console.log('logging');
        };
    }

    return demoCtrl;
});
