define([
    './rb-check-with-text-control-group-directive',
    './rb-check-with-text-control-group.css',
    'components/rb-check-with-text-control'
], function (rbCheckWithTextControlGroupDirective, css, rbCheckWithTextControl) {
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
