define([
    './rb-panel-content-directive',
    './rb-panel-content-bottom-directive',
    './rb-panel-content-scrollable-directive',
    './rb-panel-content-top-directive',
    './rb-panel-content-unscrollable-directive',
    './rb-panel-content.css'
], function (
        rbPanelContentDirective, rbPanelContentBottomDirective, rbPanelContentScrollableDirective,
        rbPanelContentTopDirective, rbPanelContentUnscrollableDirective, css) {
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
        .directive('rbPanelContentScrollable', rbPanelContentScrollableDirective)
        .directive('rbPanelContentTop', rbPanelContentTopDirective)
        .directive('rbPanelContentUnscrollable', rbPanelContentUnscrollableDirective);

    return rbPanelContent;

});
