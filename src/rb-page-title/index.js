define([
    './rb-page-title-directive'
], function (rbPageTitleDirective) {
    /**
     * @ngdoc module
     * @name rb-page-title
     * @description
     *
     * RB Page Title
     *
     */
    var rbHeader = angular
        .module('rb-page-title', [])
        .directive('rbPageTitle', rbPageTitleDirective);

    return rbHeader;
});
