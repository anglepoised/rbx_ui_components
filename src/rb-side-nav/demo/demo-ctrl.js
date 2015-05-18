define([
], function () {

    // @ngInject
    function demoCtrl ($rootScope, $state, $injector) {
        this.save = function () {
            console.log('SAVE');
        };

        this.cancel = function () {
            console.log('CANCEL');
        };
    }

    return demoCtrl;
});
