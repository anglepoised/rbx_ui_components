define([
    './rb-panel-scroll-directive',
    './rb-panel-scroll-bottom-directive',
    './rb-panel-scroll-scrollable-directive',
    './rb-panel-scroll-top-directive',
    './rb-panel-scroll.css'
], function (
        rbPanelScrollDirective, rbPanelScrollBottomDirective, rbPanelScrollScrollableDirective,
        rbPanelScrollTopDirective, css) {
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
        .directive('rbPanelScroll', rbPanelScrollDirective)
        .directive('rbPanelScrollBottom', rbPanelScrollBottomDirective)
        .directive('rbPanelScrollScrollable', rbPanelScrollScrollableDirective)
        .directive('rbPanelScrollTop', rbPanelScrollTopDirective);

    return rbPanelScroll;

});
