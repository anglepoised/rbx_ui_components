define([
    './rb-footer-directive',
    './rb-footer.css'
], function (rbFooterDirective, css) {
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
