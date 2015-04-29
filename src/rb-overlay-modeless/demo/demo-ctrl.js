define([
], function () {

    // @ngInject
    function demoCtrl ($rootScope, $state, $injector) {
        this.dismiss = function (item) {
            console.log('dismissing item: ' + item);
        };
        this.log = function () {
            console.log('logging');
        };
    }

    return demoCtrl;
});
