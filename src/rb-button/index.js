define([
    './rb-button-directive',
    './rb-button.css'
], function (rbButtonDirective, css) {
    /**
     * @ngdoc module
     * @name rb-button
     * @description
     *
     * rbButton
     *
     */
    var rbButton = angular
        .module('rb-button', [])
        .directive('rbButton', rbButtonDirective);

    return rbButton;

});
