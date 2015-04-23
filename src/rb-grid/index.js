define([
    './rb-grid-directive',
    './rb-grid.css'
], function (rbGridDirective, css) {
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
        .directive('rbGrid', rbGridDirective);

    return rbGrid;

});
