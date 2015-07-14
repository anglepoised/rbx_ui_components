define([
    './rb-raw-html-display-directive',
    './rb-raw-html-display.css'
], function (rbRawHtmlDisplayDirective, css) {
    /**
     * @ngdoc module
     * @name rb-raw-html-display
     * @description
     *
     * rbRawHtmlDisplay
     *
     */
    var rbRawHtmlDisplay = angular
        .module('rb-raw-html-display', [])
        .directive('rbRawHtmlDisplay', rbRawHtmlDisplayDirective);

    return rbRawHtmlDisplay;

});
