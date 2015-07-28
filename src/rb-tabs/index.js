define([
    './rb-tabset-directive',
    './rb-tab-directive',
    './rb-tabs.css'
], function (rbTabset, rbTab, css) {
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
        .directive('rbTabset', rbTabset)
        .directive('rbTab', rbTab);

    return rbTabs;

});
