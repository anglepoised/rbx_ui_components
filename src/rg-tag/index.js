define([
    './rg-tag-directive',
    './rg-tag.css'
], function (rgTagDirective, css) {
    /**
     * @ngdoc module
     * @name rg-tag
     * @description
     *
     * rgTag
     *
     */
    var rgTag = angular
        .module('rg-tag', [])
        .directive('rgTag', rgTagDirective);

    return rgTag;

});
