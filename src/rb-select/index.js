define([
    './rb-select-directive',
    './rb-select.css'
], function (rbSelectDirective, css) {
    /**
     * @ngdoc module
     * @name rb-select
     * @description
     *
     * rbSelect
     *
     */
    var rbSelect = angular
        .module('rb-select', [])
        .directive('rbSelect', rbSelectDirective);

    return rbSelect;

});
