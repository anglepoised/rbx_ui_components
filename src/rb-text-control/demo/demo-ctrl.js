define([
], function () {

    // @ngInject
    function demoCtrl ($rootScope, $state, $injector) {
        this.data = {
            readonlyMessage: 'This is read only! Aha!'
        };

        this.printChange = function (value) {
            console.log(value);
        };
    }

    return demoCtrl;
});
