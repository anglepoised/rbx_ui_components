define([
    './rb-check-with-text-control-group-directive',
    './rb-check-with-text-control-group.css'
], function (rbCheckWithTextControlGroupDirective, css) {
    /**
     * @ngdoc module
     * @name rb-check-with-text-control-group
     * @description
     *
     * rbCheckWithTextControlGroup
     *
     */
    var rbCheckWithTextControlGroup = angular
        .module('rb-check-with-text-control-group', [])
        .directive('rbCheckWithTextControlGroup', rbCheckWithTextControlGroupDirective);

    return rbCheckWithTextControlGroup;

});
