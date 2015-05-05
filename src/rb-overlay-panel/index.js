define([
    'components/rb-overlay-modal',
    './rb-overlay-panel-directive',
    './rb-overlay-panel.css'
], function (rbOverlayModal, rbOverlayPanelDirective, css) {
    /**
     * @ngdoc module
     * @name rb-overlay-panel
     * @description
     *
     * rbOverlayPanel
     *
     */
    var rbOverlayPanel = angular
        .module('rb-overlay-panel', [
            rbOverlayModal.name
        ])
        .directive('rbOverlayPanel', rbOverlayPanelDirective);

    return rbOverlayPanel;

});
