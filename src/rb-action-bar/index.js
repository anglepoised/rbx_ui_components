define([
    '../rb-button',
    './rb-action-bar-directive',
    './rb-action-bar.css'
], function (rbButton, rbActionBarDirective, css) {
    /**
     * @ngdoc module
     * @name rb-action-bar
     * @description
     *
     * rbActionBar
     *
     */
    var rbActionBar = angular
        .module('rb-action-bar', [
            rbButton.name
        ])
        .directive('rbActionBar', rbActionBarDirective);

    return rbActionBar;

});
