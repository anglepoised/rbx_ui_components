define([
], function () {

    // @ngInject
    function demoCtrl ($state) {
        var $this = this;

        this.showOverlay = true;

        this.close = function () {
            $this.showOverlay = false;
        };
    }

    return demoCtrl;
});
