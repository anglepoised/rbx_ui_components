define([
    './rb-fieldset-directive',
    './rb-fieldset.css'
], function (rbFieldsetDirective, css) {
    /**
     * @ngdoc module
     * @name rb-fieldset
     * @description
     *
     * rbFieldset
     *
     */
    var rbFieldset = angular
        .module('rb-fieldset', [])
        .directive('rbFieldset', rbFieldsetDirective);

    return rbFieldset;

});
