(function () {
    'use strict';

    /**
     * @ngdoc module
     * @name directives.headers.logo.rb-header-logo
     * @description
     *
     * RB Header Logo
     *
     */
    angular.module('directives.headers.logo.rb-header-logo', [

    ])
    .directive('rbHeaderLogo', RbHeaderLogoDirective);

    /**
     * @ngdoc directive
     * @name rbHeaderLogo
     * @module directives.headers.logo.rb-header-logo
     *
     * @restrict E
     *
     * @description
     * `<rb-header-logo>` is a directive that shows a logo in a header
     *
     * @scope
     *  'logoicon': contains an icon class for the logo header
     *  'clickfunction': a custom function to be executed on every link when clicked
     *                   The function receives the 'id' from the link object as param
     *
     * @usage
     * <hljs lang="html">
     *   <rb-header-logo logoicon="white-alabaster-100-logo-rockabox"
     *   clickfunction="ctrl.goTo(id)">Rockabox</rb-header-logo>
     * </hljs>
     *
     */

    function RbHeaderLogoDirective () {

        return {
            scope: {
                'logoicon': '@',
                'clickfunction': '&'
            },
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'headers/logo/rb-header-logo.tpl.html'
        };
    }
})();
