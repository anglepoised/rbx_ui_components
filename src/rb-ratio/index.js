define([
    './rb-ratio-directive',
    './rb-ratio.css'
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
