define([
    './rb-site-directive'
], function (rbSiteDirective) {
    /**
     * @ngdoc module
     * @name rb-site
     * @description
     *
     * RB Site
     *
     */
    var rbSite = angular
        .module('rb-site', [])
        .directive('rbSite', rbSiteDirective);

    return rbSite;
});
