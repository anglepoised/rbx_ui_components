define([
    'html!./rb-panel-content-scrollable.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbPanelContentScrollable
     * @module rb-panel-content-scrollable
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-panel-content-scrollable>
     *     </rb-panel-content-scrollable>
     * </hljs>
     *
     * @ngInject
     */
    function rbPanelContentScrollableDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            template: template,
            transclude: true
        };
    }

    return rbPanelContentScrollableDirective;
});
