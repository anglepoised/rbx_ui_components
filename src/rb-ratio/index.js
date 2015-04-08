define([
    './rb-ratio-directive'
], function (rbRatioDirective) {
    /**
     * @ngdoc module
     * @name rb-ratio
     * @description
     *
     * rbRatio
     *
     */
    var rbRatio = angular
        .module('rb-ratio', [])
        .directive('rbRatio', rbRatioDirective);

    return rbRatio;

});
