define([
    './rg-page-header-directive',
    './rg-page-header.css'
], function (rgPageHeaderDirective, css) {
    /**
     * @ngdoc module
     * @name rg-page-header
     * @description
     *
     * RB Page Header
     *
     */
    var rgPageHeader = angular
        .module('rg-page-header', [])
        .directive('rgPageHeader', rgPageHeaderDirective);

    return rgPageHeader;
});
