define([
    './rb-button-directive'
], function (rbButtonDirective) {
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
