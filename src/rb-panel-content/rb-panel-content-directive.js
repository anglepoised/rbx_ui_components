define([
    'html!./rb-panel-content.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbPanelContent
     * @module rb-panel-content
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-panel-content>
     *     </rb-panel-content>
     * </hljs>
     *
     * @ngInject
     */
    function rbPanelContentDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            template: template,
            transclude: true
        };
    }

    return rbPanelContentDirective;
});
