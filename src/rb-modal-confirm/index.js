define([
    'components/rb-overlay-modal',
    './rb-modal-confirm-directive',
    './rb-modal-confirm.css'
], function (rbOverlayModal, rbModalConfirmDirective, css) {
    /**
     * @ngdoc module
     * @name rb-modal-confirm
     * @description
     *
     * rbModalConfirm
     *
     */
    var rbModalConfirm = angular
        .module('rb-modal-confirm', [rbOverlayModal.name])
        .directive('rbModalConfirm', rbModalConfirmDirective);

    return rbModalConfirm;

});
