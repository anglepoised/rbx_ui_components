define([
    'html!./rb-panel-content-top.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbPanelContentTop
     * @module rb-panel-content-top
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-panel-content-top>
     *     </rb-panel-content-top>
     * </hljs>
     *
     * @ngInject
     */
    function rbPanelContentTopDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            template: template,
            transclude: true
        };
    }

    return rbPanelContentTopDirective;
});
