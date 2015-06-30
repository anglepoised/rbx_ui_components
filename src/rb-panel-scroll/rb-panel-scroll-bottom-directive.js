define([
    'html!./rb-panel-scroll-bottom.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbPanelScrollBottom
     * @module rb-panel-scroll-bottom
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-panel-scroll-bottom>
     *     </rb-panel-scroll-bottom>
     * </hljs>
     *
     * @ngInject
     */
    function rbPanelScrollBottomDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            template: template,
            transclude: true
        };
    }

    return rbPanelScrollBottomDirective;
});
