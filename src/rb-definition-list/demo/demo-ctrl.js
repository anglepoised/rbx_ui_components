define([
], function () {

    // @ngInject
    function demoCtrl ($rootScope, $state, $injector) {

        this.onButtonClick = function () {
            console.log('Edit Targeting Button Clicked');
        };
    }

    return demoCtrl;
});
