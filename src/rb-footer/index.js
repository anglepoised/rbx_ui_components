define([
    './rb-footer-directive'
], function (rbFooterDirective) {
    /**
     * @ngdoc module
     * @name rb-footer
     * @description
     *
     * RB Footer
     *
     */
    var rbFooter = angular
        .module('rb-footer', [])
        .directive('rbFooter', rbFooterDirective);

    return rbFooter;

});
