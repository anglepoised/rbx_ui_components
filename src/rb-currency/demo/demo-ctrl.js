define([
], function () {

    // @ngInject
    function demoCtrl () {
        this.currency = {
            withDec: '102929.87',
            withoutDec: '99999'
        };
    }

    return demoCtrl;
});
