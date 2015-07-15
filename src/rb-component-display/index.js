define([
    './rb-component-display-directive',
    './rb-component-display.css'
], function (rbComponentDisplayDirective, css) {
    /**
     * @ngdoc module
     * @name rb-component-display
     * @description
     *
     * rbComponentDisplay
     *
     */
    var rbComponentDisplay = angular
        .module('rb-component-display', [])
        .directive('rbComponentDisplay', rbComponentDisplayDirective);

    return rbComponentDisplay;

});
