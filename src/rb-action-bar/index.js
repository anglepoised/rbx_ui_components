define([
    './rb-action-bar-directive',
    './rb-action-bar.css'
], function (rbActionBarDirective, css) {
    /**
     * @ngdoc module
     * @name rb-action-bar
     * @description
     *
     * rbActionBar
     *
     */
    var rbActionBar = angular
        .module('rb-action-bar', [])
        .directive('rbActionBar', rbActionBarDirective);

    return rbActionBar;

});
