define([
    '../rb-check-with-text-control',
    './rb-check-with-text-control-group-directive',
    './rb-check-with-text-control-group.css'
], function (rbCheckWithTextControl, rbCheckWithTextControlGroupDirective, css) {
    /**
     * @ngdoc module
     * @name rb-check-with-text-control-group
     * @description
     *
     * rbCheckWithTextControlGroup
     *
     */
    var rbCheckWithTextControlGroup = angular
        .module('rb-check-with-text-control-group', [
            rbCheckWithTextControl.name
        ])
        .directive('rbCheckWithTextControlGroup', rbCheckWithTextControlGroupDirective);

    return rbCheckWithTextControlGroup;

});
