define([
    'html!./rb-panel-content-bottom.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbPanelContentBottom
     * @module rb-panel-content-bottom
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-panel-content-bottom>
     *     </rb-panel-content-bottom>
     * </hljs>
     *
     * @ngInject
     */
    function rbPanelContentBottomDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            template: template,
            transclude: true
        };
    }

    return rbPanelContentBottomDirective;
});
