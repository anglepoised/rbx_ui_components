define([
], function () {

    // @ngInject
    function demoCtrl () {
        this.data = {
            isDisabled: false,
            readonlyMessage: 'This is read only! Aha!'
        };

    }

    return demoCtrl;
});
