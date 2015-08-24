define([
    './rg-header-directive',
    './rg-header.css'
], function (rgHeaderDirective, css) {
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
        .directive('rgHeader', rgHeaderDirective);

    return rgHeader;
});
