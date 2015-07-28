define([
    './rb-tabs-directive',
    './rb-tabs.css'
], function (rbTabsDirective, css) {
    /**
     * @ngdoc module
     * @name rb-tabs
     * @description
     *
     * rbTabs
     *
     */
    var rbTabs = angular
        .module('rb-tabs', [])
        .directive('rbTabs', rbTabsDirective);

    return rbTabs;

});
