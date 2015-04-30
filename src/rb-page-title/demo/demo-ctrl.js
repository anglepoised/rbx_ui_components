define([
], function () {

    // @ngInject
    function headerCtrl ($rootScope, $state, $injector) {
        this.showButton = true;
        this.clickButton = function (text) {
            alert(text);
        };
    }

    return headerCtrl;
});
