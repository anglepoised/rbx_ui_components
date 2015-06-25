define([
    './rb-panel-scroll-directive',
    './rb-panel-scroll.css'
], function (rbPanelScrollDirective, css) {
    /**
     * @ngdoc module
     * @name rb-panel-scroll
     * @description
     *
     * rbPanelScroll
     *
     */
    var rbPanelScroll = angular
        .module('rb-panel-scroll', [])
        .directive('rbPanelScroll', rbPanelScrollDirective);

    return rbPanelScroll;

});
