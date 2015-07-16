define([
    'html!./rb-panel-content-unscrollable.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbPanelContentUnscrollable
     * @module rb-panel-content-unscrollable
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-panel-content-unscrollable>
     *     </rb-panel-content-unscrollable>
     * </hljs>
     *
     * @ngInject
     */
    function rbPanelContentUnscrollableDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            template: template,
            transclude: true
        };
    }

    return rbPanelContentUnscrollableDirective;
});
