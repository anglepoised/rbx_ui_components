define([
    './rb-grid-directive',
    './rb-grid-cell-directive',
    './rb-grid.css'
], function (rbGridDirective, rbGridCellDirective, css) {
    /**
     * @ngdoc module
     * @name rb-grid
     * @description
     *
     * rbGrid
     *
     */
    var rbGrid = angular
        .module('rb-grid', [])
        .directive('rbGrid', rbGridDirective)
        .directive('rbGridCell', rbGridCellDirective);

    return rbGrid;

});
