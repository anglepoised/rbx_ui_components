define([
    './rb-header-directive'
], function (rbHeaderDirective) {
    /**
     * @ngdoc module
     * @name directives.headers.rb-header
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
