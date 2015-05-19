define([
], function () {

    // @ngInject
    function demoCtrl ($rootScope, $state, $injector) {
        this.default = false;
        this.disabled = false;
        this.required = false;
        this.preChecked = true;
        this.icon = false;
    }

    return demoCtrl;
});
