define([
    './rb-progress-button-directive',
    './rb-progress-button.css'
], function (rbProgressButtonDirective, css) {
    /**
     * @ngdoc module
     * @name rb-progress-button
     * @description
     *
     * rbProgressButton
     *
     */
    var rbProgressButton = angular
        .module('rb-progress-button', [])
        .directive('rbProgressButton', rbProgressButtonDirective);

    return rbProgressButton;

});
