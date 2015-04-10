define([
    './rb-text-control-directive'
], function (rbTextControlDirective) {
    /**
     * @ngdoc module
     * @name rb-text-control
     * @description
     *
     * rbTextControl
     *
     */
    var rbTextControl = angular
        .module('rb-text-control', [])
        .directive('rbTextControl', rbTextControlDirective);

    return rbTextControl;

});
