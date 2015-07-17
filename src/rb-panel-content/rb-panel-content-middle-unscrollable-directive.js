define([
    'html!./rb-panel-content-middle-unscrollable.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbPanelContentMiddleUnscrollable
     * @module rb-panel-content-middle-unscrollable
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-panel-content-middle-unscrollable>
     *     </rb-panel-content-middle-unscrollable>
     * </hljs>
     *
     * @ngInject
     */
    function rbPanelContentMiddleUnscrollableDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            template: template,
            transclude: true
        };
    }

    return rbPanelContentMiddleUnscrollableDirective;
});
