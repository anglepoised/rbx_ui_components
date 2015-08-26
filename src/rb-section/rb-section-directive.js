define([
    'html!./rb-section.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbSection
     * @module rb-section
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-section>
     *     </rb-section>
     * </hljs>
     *
     * @ngInject
     */
    function rbSectionDirective () {

        return {
            scope: {
                heading: '@',
                gutterless: '@',
                hideHeading: '@'
            },
            restrict: 'E',
            replace: true,
            transclude: true,
            template: template,
            link: function (scope, ele, attrs) {
                // Default centered to false
                scope.centered = 'false';

                if (angular.isDefined(attrs['centered'])) {
                    scope.centered = attrs['centered'];
                }
            }
        };
    }

    return rbSectionDirective;
});
