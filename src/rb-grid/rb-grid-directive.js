define([
    'html!./rb-grid.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbGrid
     * @module rb-grid
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-grid>
     *     </rb-grid>
     * </hljs>
     *
     * @ngInject
     */
    function rbGridDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            template: template
        };
    }

    return rbGridDirective;
});
