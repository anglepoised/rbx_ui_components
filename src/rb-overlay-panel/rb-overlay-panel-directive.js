define([
    './rb-overlay-panel.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbOverlayPanel
     * @module rb-overlay-panel
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-overlay-panel overlay-close=""></rb-overlay-panel>
     * </hljs>
     *
     * @ngInject
     */
    function rbOverlayPanelDirective () {

        return {
            scope: {
                overlayClose: '&'
            },
            restrict: 'E',
            transclude: true,
            replace: true,
            template: template
        };
    }

    return rbOverlayPanelDirective;
});
