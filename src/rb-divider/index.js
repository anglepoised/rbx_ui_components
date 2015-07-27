define([
    './rb-divider-directive',
    './rb-divider.css'
], function (rbDividerDirective, css) {
    /**
     * @ngdoc module
     * @name rb-divider
     * @description
     *
     * rbDivider
     *
     */
    var rbDivider = angular
        .module('rb-divider', [])
        .directive('rbDivider', rbDividerDirective);

    return rbDivider;

});
