define([
    'html!./rb-panel-scroll-scrollable.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbPanelScrollScrollable
     * @module rb-panel-scroll-scrollable
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-panel-scroll-scrollable>
     *     </rb-panel-scroll-scrollable>
     * </hljs>
     *
     * @ngInject
     */
    function rbPanelScrollScrollableDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            template: template,
            transclude: true
        };
    }

    return rbPanelScrollScrollableDirective;
});
