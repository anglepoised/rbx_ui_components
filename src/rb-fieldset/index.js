define([
    './rb-fieldset-directive',
    './rb-fieldset-item-directive',
    './rb-fieldset.css'
], function (rbFieldsetDirective, rbFieldsetItemDirective, css) {
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
        .directive('rbFieldset', rbFieldsetDirective)
        .directive('rbFieldsetItem', rbFieldsetItemDirective);

    return rbFieldset;

});
