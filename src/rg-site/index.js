define([
    './rg-site-directive',
    './rg-site-top-directive',
    './rg-site-middle-directive',
    './rg-site-bottom-directive',
    './rg-site.css'
], function (
    rgSiteDirective,
    rgSiteTopDirective,
    rgSiteMiddleDirective,
    rgSiteBottomDirective,
    css
) {
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
        .directive('rgSite', rgSiteDirective)
        .directive('rgSiteTop', rgSiteTopDirective)
        .directive('rgSiteMiddle', rgSiteMiddleDirective)
        .directive('rgSiteBottom', rgSiteBottomDirective);

    return rgSite;
});
