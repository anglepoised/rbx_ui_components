define([
    'html!./rb-check-with-text-control.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbCheckWithTextControl
     * @module rb-check-with-text-control
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-check-with-text-control>
     *     </rb-check-with-text-control>
     * </hljs>
     *
     * @ngInject
     */
    function rbCheckWithTextControlDirective () {

        return {
            scope: {},
            restrict: 'E',
            replace: true,
            template: template
        };
    }

    return rbCheckWithTextControlDirective;
});
