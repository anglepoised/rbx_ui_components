define([
], function () {

    // @ngInject
    function demoCtrl ($rootScope, $state, $injector) {
        this.data = {
            readonlyMessage: 'This is read only! Aha!'
        };
    }

    return demoCtrl;
});
