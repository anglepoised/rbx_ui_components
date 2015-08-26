define([
    './rg-site-directive',
    './rg-site.css'
], function (rgSiteDirective, css) {
    /**
     * @ngdoc module
     * @name rg-site
     * @description
     *
     * RgSite
     *
     */
    var rgSite = angular
        .module('rg-site', [])
        .directive('rgSite', rgSiteDirective);

    return rgSite;
});
