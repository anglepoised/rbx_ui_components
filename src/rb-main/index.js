define([
    './rb-main-directive',
    './rb-main.css'
], function (rbMainDirective, css) {
    /**
     * @ngdoc module
     * @name rb-main
     * @description
     *
     * RB Main
     *
     */
    var rbMain = angular
        .module('rb-main', [])
        .directive('rbMain', rbMainDirective);

    return rbMain;
});
