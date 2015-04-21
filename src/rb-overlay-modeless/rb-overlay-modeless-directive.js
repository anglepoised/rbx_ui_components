define([
    'html!./rb-overlay-modeless.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbOverlayModeless
     * @module rb-overlay-modeless
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-overlay-modeless>
     *     </rb-overlay-modeless>
     * </hljs>
     *
     * @ngInject
     */
    function rbOverlayModelessDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            template: template
        };
    }

    return rbOverlayModelessDirective;
});
