define([
    './rb-icon-directive'
], function (rbIconDirective) {
    /**
     * @ngdoc module
     * @name directives.icons.rb-icon
     * @description
     *
     * RB Icon
     *
     */
    var rbIcon = angular
        .module('rb-icon', [])
        .directive('rbIcon', rbIconDirective);

    return rbIcon;

});
