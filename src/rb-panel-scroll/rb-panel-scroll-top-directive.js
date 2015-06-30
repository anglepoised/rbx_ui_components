define([
    'html!./rb-panel-scroll-top.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbPanelScrollTop
     * @module rb-panel-scroll-top
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-panel-scroll-top>
     *     </rb-panel-scroll-top>
     * </hljs>
     *
     * @ngInject
     */
    function rbPanelScrollTopDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            template: template,
            transclude: true
        };
    }

    return rbPanelScrollTopDirective;
});
