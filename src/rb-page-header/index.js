define([
    './rb-page-header-directive'
], function (rbPageHeaderDirective) {
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
