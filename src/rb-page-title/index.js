define([
    './rb-page-title-directive',
    './rb-page-title.css'
], function (rbPageTitleDirective, css) {
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
