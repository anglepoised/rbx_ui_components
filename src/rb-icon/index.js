define([
    './rb-icon-directive',
    './rb-icon.css'
], function (rbIconDirective, css) {
    /**
     * @ngdoc module
     * @name rb-icon
     * @description
     *
     * RB Icon
     *
     */
    var rbIcon = angular
        .module('rb-icon', [])
        .directive('rbIcon', rbIconDirective);

    return rbIcon;

});
