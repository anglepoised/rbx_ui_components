define([
    'html!./rb-panel-scroll-unscrollable.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbPanelScrollUnscrollable
     * @module rb-panel-scroll-unscrollable
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-panel-scroll-unscrollable>
     *     </rb-panel-scroll-unscrollable>
     * </hljs>
     *
     * @ngInject
     */
    function rbPanelScrollUnscrollableDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            template: template,
            transclude: true
        };
    }

    return rbPanelScrollUnscrollableDirective;
});
