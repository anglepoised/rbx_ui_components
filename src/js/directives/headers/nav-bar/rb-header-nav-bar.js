(function () {
    'use strict';

    /**
     * @ngdoc module
     * @name directives.headers.nav-bar.rb-header-nav-bar
     * @description
     *
     * RB Header Navigation Bar
     *
     */
    angular.module('directives.headers.nav-bar.rb-header-nav-bar', [

    ])
    .directive('rbHeaderNavBar', RbHeaderNavBarDirective);

    /**
     * @ngdoc directive
     * @name rbHeaderNavBar
     * @module directives.headers.nav-bar.rb-header-nav-bar
     *
     * @restrict E
     *
     * @description
     * `<rb-header-nav-bar>` is a directive that shows a navigation bar in a header
     *
     * @scope
     *  'options': an array containing option objects to be placed in the navigation bar.
     *           Option objects should be defined as follows:
     *           {id: '<an identifier for the option>',
     *           text: 'Text to be displayed'}
     *  'clickfunction': a custom function to be executed on every option when clicked
     *                   The function receives the 'id' from the option object as param
     *  'isactivefunction': a custom function that returns if an option should be displayed
     *                   with an is-active class.
     *                   The function receives the 'id' from the option object as param
     *
     * @usage
     * <hljs lang="html">
     *   <rb-header-nav-bar options="ctrl.options" clickfunction="ctrl.goTo(id)"
     *   isactivefunction="ctrl.isActive(id)"></rb-header-nav-bar>
     * </hljs>
     *
     */

    function RbHeaderNavBarDirective () {

        return {
            scope: {
                'options': '=',
                'clickfunction': '&',
                'isactivefunction': '&'
            },
            restrict: 'E',
            replace: true,
            templateUrl: 'headers/nav-bar/rb-header-nav-bar.tpl.html'
        };
    }
})();
