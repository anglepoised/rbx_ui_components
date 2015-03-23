(function () {
    'use strict';

    /**
     * @ngdoc module
     * @name directives.headers.header.rb-header
     * @description
     *
     * RB Header
     *
     */
    angular.module('directives.headers.header.rb-header', [

    ])
    .directive('rbHeader', RbHeaderDirective);

    /**
     * @ngdoc directive
     * @name rbHeader
     * @module directives.headers.header.rb-header
     *
     * @restrict E
     *
     * @description
     * `<rb-header>` is a directive that shows a header
     *
     * @usage
     * <hljs lang="html">
     *   <rb-header></rb-header>
     * </hljs>
     *
     */

    function RbHeaderDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'headers/header/rb-header.tpl.html'
        };
    }
})();
