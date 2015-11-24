define([
    './rb-panel-content-middle-scrollable.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbPanelContentMiddleScrollable
     * @module rb-panel-content-middle-scrollable
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-panel-content-middle-scrollable>
     *     </rb-panel-content-middle-scrollable>
     * </hljs>
     *
     * @ngInject
     */
    function rbPanelContentMiddleScrollableDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            template: template,
            transclude: true
        };
    }

    return rbPanelContentMiddleScrollableDirective;
});
