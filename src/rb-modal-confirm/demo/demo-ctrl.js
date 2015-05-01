define([
], function () {

    // @ngInject
    function demoCtrl ($rootScope, $state, $injector) {

        this.confirm = function () {
            console.log('CONFIRM');
        };

        this.cancel = function () {
            console.log('CANCEL');
        };
    }

    return demoCtrl;
});
