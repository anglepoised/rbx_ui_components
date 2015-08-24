define([
    './rg-header-directive',
    './rg-header-item-directive',
    './rg-header.css'
], function (rgHeaderDirective, rgHeaderItemDirective, css) {
    /**
     * @ngdoc module
     * @name rg-header
     * @description
     *
     * RB Header
     *
     */
    var rgHeader = angular
        .module('rg-header', [])
        .directive('rgHeader', rgHeaderDirective)
        .directive('rgHeaderItem', rgHeaderItemDirective);

    return rgHeader;
});
