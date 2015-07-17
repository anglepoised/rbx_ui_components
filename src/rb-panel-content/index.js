define([
    './rb-panel-content-directive',
    './rb-panel-content-bottom-directive',
    './rb-panel-content-middle-scrollable-directive',
    './rb-panel-content-top-directive',
    './rb-panel-content-middle-unscrollable-directive',
    './rb-panel-content.css'
], function (
        rbPanelContentDirective, rbPanelContentBottomDirective, rbPanelContentMiddleScrollableDirective,
        rbPanelContentTopDirective, rbPanelContentMiddleUnscrollableDirective, css) {
    /**
     * @ngdoc module
     * @name rb-panel-content
     * @description
     *
     * rbPanelContent
     *
     */
    var rbPanelContent = angular
        .module('rb-panel-content', [])
        .directive('rbPanelContent', rbPanelContentDirective)
        .directive('rbPanelContentBottom', rbPanelContentBottomDirective)
        .directive('rbPanelContentMiddleScrollable', rbPanelContentMiddleScrollableDirective)
        .directive('rbPanelContentTop', rbPanelContentTopDirective)
        .directive('rbPanelContentMiddleUnscrollable', rbPanelContentMiddleUnscrollableDirective);

    return rbPanelContent;

});
