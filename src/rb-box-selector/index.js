define([
    './rb-box-selector-directive',
    './rb-box-selector.css'
], function (rbBoxSelectorDirective, css) {
    /**
     * @ngdoc module
     * @name rb-box-selector
     * @description
     *
     * rbBoxSelector
     *
     */
    var rbBoxSelector = angular
        .module('rb-box-selector', [])
        .directive('rbBoxSelector', rbBoxSelectorDirective);

    return rbBoxSelector;

});
