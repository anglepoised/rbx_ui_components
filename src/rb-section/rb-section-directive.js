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
            },
            restrict: 'E',
            replace: true,
            template: template
        };
    }

    return rbSectionDirective;
});
