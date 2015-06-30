define([
], function () {

    // @ngInject
    function demoCtrl ($rootScope, $state, $injector) {
        this.showOverlay = true;

        this.close = function () {
            this.showOverlay = false;
        };
    }

    return demoCtrl;
});
