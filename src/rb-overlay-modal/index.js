define([
    './rb-overlay-modal-directive',
    './rb-overlay-modal.css'
], function (rbOverlayModalDirective, css) {
    /**
     * @ngdoc module
     * @name rb-overlay-modal
     * @description
     *
     * rbOverlayModal
     *
     */
    var rbOverlayModal = angular
        .module('rb-overlay-modal', [])
        .directive('rbOverlayModal', rbOverlayModalDirective);

    return rbOverlayModal;

});
