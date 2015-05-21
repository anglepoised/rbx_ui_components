define([
    'angular-strap/dist/modules/debounce.js',
    'angular-strap/dist/modules/dimensions.js',
    'angular-strap/dist/modules/scrollspy.js',
    './rb-scrollspy-directive',
    './rb-scrollspy.css'
], function (bsDebounce, bsDimensions, bsscrollspy, rbScrollspyDirective, css) {
    /**
     * @ngdoc module
     * @name rb-scrollspy
     * @description
     *
     * rbScrollspy
     *
     */
    var rbScrollspy = angular
        .module('rb-scrollspy', ['mgcrea.ngStrap.scrollspy'])
        .directive('rbScrollspy', rbScrollspyDirective);

    return rbScrollspy;

});
