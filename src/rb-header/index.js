define([
    './rb-header-directive'
], function (rbHeaderDirective) {
    /**
     * @ngdoc module
     * @name rb-header
     * @description
     *
     * RB Header
     *
     */
    var rbHeader = angular
        .module('rb-header', [])
        .directive('rbHeader', rbHeaderDirective);

    return rbHeader;
});
