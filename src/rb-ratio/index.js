define([
    './rb-ratio-directive',
    'components/rb-currency',
    './rb-ratio.css'
], function (rbRatioDirective, rbCurrency, css) {
    /**
     * @ngdoc module
     * @name rb-ratio
     * @description
     *
     * rbRatio
     *
     */
    var rbRatio = angular
        .module('rb-ratio', [
            rbCurrency.name
        ])
        .directive('rbRatio', rbRatioDirective);

    return rbRatio;

});
