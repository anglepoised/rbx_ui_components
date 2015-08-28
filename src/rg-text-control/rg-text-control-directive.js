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
                label: '@',
                helpMessage: '@',
                form: '=',
                numberSteps: '@',
                small: '@',
                type: '@'
            },
            transclude: true,
            restrict: 'E',
            replace: true,
            template: template,
            link: function (scope, element, attributes) {
                // user need to either wrap rg-text-control around input or textarea
                $input = element.find('input');
                $textarea = element.find('textarea');
                if ($textarea.length) {
                    $textarea.addClass('RgTextControl-field');
                } else {
                    $input.addClass('RgTextControl-field');
                }
                if (scope.type === 'currency') {
                    scope.numberSteps = scope.numberSteps || 0.01;
                } else {
                    scope.type = $input.length ? $input.attr('type') : $textarea.attr('type');
                    scope.numberSteps = scope.numberSteps || 0;
                }
                scope.name = $input.length ? $input.attr('name') : $textarea.attr('name');
            }
        };
    }

    return rgTextControlDirective;
});
