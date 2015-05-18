define([
], function () {

    // @ngInject
    function demoCtrl ($rootScope, $state, $injector) {

        this.confirm = function () {
            console.log('CONFIRM');
        };

    }

    return demoCtrl;
});
