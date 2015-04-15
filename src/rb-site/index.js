define([
    './rb-site-directive',
    './rb-site.css'
], function (rbSiteDirective, css) {
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
