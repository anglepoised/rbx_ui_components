define([
    './rb-modal-confirm-directive',
    './rb-modal-confirm.css'
], function (rbModalConfirmDirective, css) {
    /**
     * @ngdoc module
     * @name rb-modal-confirm
     * @description
     *
     * rbModalConfirm
     *
     */
    var rbModalConfirm = angular
        .module('rb-modal-confirm', [])
        .directive('rbModalConfirm', rbModalConfirmDirective);

    return rbModalConfirm;

});
