define([
    'html!./rb-overlay-modal.tpl.html',
    './rb-overlay-modal-directive-link'
], function (template, link) {

    /**
     * @ngdoc directive
     * @name rbOverlayModal
     * @module rb-overlay-modal
     *
     * @restrict E
     *
     * @description
     * `<rb-overlay-modal>` is an overlay directive that wraps a modal content
     * and prevents interaction behind the modal window
     *
     * @usage
     * <hljs lang="html">
     *    <rb-overlay-modal>
     *        Drop any content here
     *    </rb-overlay-modal>
     * </hljs>
     *
     * @ngInject
     */
    function rbOverlayModalDirective () {

        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            template: template,
            link: link
        };
    }

    return rbOverlayModalDirective;
});
