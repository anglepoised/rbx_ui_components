(function () {
    'use strict';

    /**
    * @ngdoc module
    * @name directives.footers.rb-footer
    * @description
    *
    * RB Footer
    *
    */
    angular.module('directives.footers.rb-footer', [

    ])
    .directive('rbFooter', RbFooterDirective);

    /**
    * @ngdoc directive
    * @name rbFooter
    * @module directives.footers.rb-footer
    *
    * @restrict E
    *
    * @description
    * `<rb-footer>` is a directive that shows a layout footer
    *
    * @scope
    *  'copyright': contains a copyright notice to be placed in the footer
    *  'links': an array containing links objects to be placed in the footer.
    *           Link objects should be defined as follows:
    *           {id: '<an identifier for the link>', text: 'Text to be displayed'}
    *  'clickfunction': a custom function to be executed on every link when clicked
    *                   The function receives the 'id' from the link object as param
    *
    * @usage
    * <hljs lang="html">
    *   <rb-footer copyright="ctrl.copyright" links="ctrl.links" clickfunction="ctrl.goTo(id)"></rb-footer>
    * </hljs>
    *
    */

    function RbFooterDirective () {

        return {
            scope: {
                'copyright': '=',
                'links': '=',
                'clickfunction': '&'
            },
            restrict: 'E',
            replace: true,
            template: getTemplate
        };

        // Might be broken apart - in following stories - into its own HTML file
        // to be loaded with templateUrl.
        function getTemplate (elem, attr) {
            return '<footer class="Footer" role="contentinfo">' +
                '<ul class="Footer-items">' +
                '<li class="Footer-item" ng-repeat="link in ::links track by $index">' +
                '<a class="Footer-itemInner" ng-click="clickfunction({id:link.id})">{{::link.text}}</a>' +
                '</li>' +
                '</ul>' +
                '<div class="Footer-Copyright">' +
                '<p>{{::copyright}}</p>' +
                '</div>' +
                '</footer>';
        }
    }
})();
