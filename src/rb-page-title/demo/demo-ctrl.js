define([
], function () {

    // @ngInject
    function pageTitleCtrl ($rootScope, $state, $injector) {
        var $this = this;
        this.status = 'statusPending';
        this.changeStatus = function (status) {
            $this.status = status;
        };
    }

    return pageTitleCtrl;
});
