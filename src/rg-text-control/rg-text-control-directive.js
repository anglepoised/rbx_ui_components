define([
    'html!./rg-text-control.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rgTextControl
     * @module rg-text-control
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rg-text-control>
     *     </rg-text-control>
     * </hljs>
     *
     * @ngInject
     */
    function rgTextControlDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            template: template
        };
    }

    return rgTextControlDirective;
});
