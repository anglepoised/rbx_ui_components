define([
    './rb-section-directive',
    './rb-section.css'
], function (rbSectionDirective, css) {
    /**
     * @ngdoc module
     * @name rb-section
     * @description
     *
     * rbSection
     *
     */
    var rbSection = angular
        .module('rb-section', [])
        .directive('rbSection', rbSectionDirective);

    return rbSection;

});
