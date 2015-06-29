define([
], function () {

    // @ngInject
    function demoCtrl ($rootScope, $state, $injector) {
        this.primary = function () {
            alert('Primary Action!');
        };

        this.cancel = function () {
            alert('Cancel Action!');
        };
    }

    return demoCtrl;
});
