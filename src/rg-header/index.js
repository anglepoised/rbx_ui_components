define([
    './rg-header-directive',
    './rg-header-item-directive',
    './rg-header-user-directive',
    './rg-header-user-item-directive',
    './rg-header-user.css',
    './rg-header.css'
], function (rgHeaderDirective, rgHeaderItemDirective, rgHeaderUserDirective, rgHeaderUserItemDirective, rgHeaderUserCss, rgHeaderCss) {
    /**
     * @ngdoc module
     * @name rg-header
     * @description
     *
     * RB Header
     *
     */
    var rgHeader = angular
        .module('rg-header', [])
        .directive('rgHeader', rgHeaderDirective)
        .directive('rgHeaderItem', rgHeaderItemDirective)
        .directive('rgHeaderUser', rgHeaderUserDirective)
        .directive('rgHeaderUserItem', rgHeaderUserItemDirective);

    return rgHeader;
});
