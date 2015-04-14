define([
    './rb-main-directive'
], function (rbMainDirective) {
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
