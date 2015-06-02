define([
    'angular-scroll',
    './rb-scrollspy-directive',
    './rb-scrollspy.css'
], function (angularScroll, rbScrollspyDirective, css) {
    /**
     * @ngdoc module
     * @name rb-scrollspy
     * @description
     *
     * rbScrollspy
     *
     */
    var rbScrollspy = angular
        .module('rb-scrollspy', ['duScroll'])
        .directive('rbScrollspy', rbScrollspyDirective);

    return rbScrollspy;

});
