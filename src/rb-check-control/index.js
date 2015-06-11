define([
    'components/rb-icon',
    './rb-check-control-directive',
    './rb-check-control-group-directive',
    './rb-check-control-select-all-directive',
    './rb-check-control.css',
    './rb-check-control-group.css'
], function (
        rbIcon,
        rbCheckControlDirective,
        rbCheckControlGroupDirective,
        rbCheckControlSelectAllDirective,
        css,
        groupCss
    ) {
    /**
     * @ngdoc module
     * @name rb-check-control
     * @description
     *
     * rbCheckControl
     *
     */
    var rbCheckControl = angular
        .module('rb-check-control', [rbIcon.name])
        .directive('rbCheckControl', rbCheckControlDirective)
        .directive('rbCheckControlGroup', rbCheckControlGroupDirective)
        .directive('rbCheckControlSelectAll', rbCheckControlSelectAllDirective);

    return rbCheckControl;

});
