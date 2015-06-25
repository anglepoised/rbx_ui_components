define([
    'html!./rb-panel-scroll.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbPanelScroll
     * @module rb-panel-scroll
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-panel-scroll>
     *     </rb-panel-scroll>
     * </hljs>
     *
     * @ngInject
     */
    function rbPanelScrollDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            template: template
        };
    }

    return rbPanelScrollDirective;
});
