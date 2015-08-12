define([
    './rb-release-version-directive',
    './rb-release-version.css'
], function (rbReleaseVersionDirective, css) {
    /**
     * @ngdoc module
     * @name rb-release-version
     * @description
     *
     * rbReleaseVersion
     *
     */
    var rbReleaseVersion = angular
        .module('rb-release-version', [])
        .directive('rbReleaseVersion', rbReleaseVersionDirective);

    return rbReleaseVersion;

});
