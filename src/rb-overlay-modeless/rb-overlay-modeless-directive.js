define([
    './rb-overlay-modeless.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbOverlayModeless
     * @module rb-overlay-modeless
     *
     * @restrict E
     *
     * @description
     * `<rb-overlay-modeless>` is an overlay directive that wraps content
     * and allows interaction behind the content
     *
     * @usage
     * <hljs lang="html">
     *    <rb-overlay-modeless>
     *        Drop any content here
     *    </rb-overlay-modeless>
     * </hljs>
     *
     * @ngInject
     */
    function rbOverlayModelessDirective () {

        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            template: template
        };
    }

    return rbOverlayModelessDirective;
});
