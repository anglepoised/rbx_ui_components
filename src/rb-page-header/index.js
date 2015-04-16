define([
    './rb-page-header-directive',
    './rb-page-header.css'
], function (rbPageHeaderDirective, css) {
    /**
     * @ngdoc module
     * @name rb-page-header
     * @description
     *
     * RB Page Header
     *
     */
    var rbPageHeader = angular
        .module('rb-page-header', [])
        .directive('rbPageHeader', rbPageHeaderDirective);

    return rbPageHeader;
});
