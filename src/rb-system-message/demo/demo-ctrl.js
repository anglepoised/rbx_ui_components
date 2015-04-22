define([
], function () {

    // @ngInject
    function demoCtrl ($rootScope, $state, $injector) {
        this.dismiss = function (id) {
            alert('Dismissed warning ' + id + '!');
        };
    }

    return demoCtrl;
});
