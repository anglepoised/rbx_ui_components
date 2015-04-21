define([
    'html!./rb-overlay-modal.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbOverlayModal
     * @module rb-overlay-modal
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-overlay-modal>
     *     </rb-overlay-modal>
     * </hljs>
     *
     * @ngInject
     */
    function rbOverlayModalDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            template: template
        };
    }

    return rbOverlayModalDirective;
});
