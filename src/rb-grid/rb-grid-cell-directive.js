define([
    'html!./rb-grid-cell.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbGridCell
     * @module rb-grid-cell
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-grid-cell>
     *     </rb-grid-cell>
     * </hljs>
     *
     * @ngInject
     */
    function rbGridCellDirective () {

        return {
            scope: {
                size: '@'
            },
            restrict: 'E',
            replace: true,
            transclude: true,
            template: template
        };
    }

    return rbGridCellDirective;
});
