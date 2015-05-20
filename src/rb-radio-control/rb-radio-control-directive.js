define([
    'html!./rb-radio-control.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbRadioControl
     * @module rb-radio-control
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-radio-control>
     *     </rb-radio-control>
     * </hljs>
     *
     * @ngInject
     */
    function rbRadioControlDirective () {

        return {
            scope: {
                choices: '=',
                ngModel: '=',
                form: '=',
                helpMessage: '@',
                isDisabled: '@',
                isRequired: '@',
                isRow: '@',
                name: '@'
            },
            restrict: 'E',
            replace: true,
            template: template,
            link: function (scope) {
                scope.setChoice = function (choice) {
                    scope.ngModel = choice.value;
                };

                scope.isChecked = function (choice) {
                    return scope.ngModel === choice.value;
                };
            }
        };
    }

    return rbRadioControlDirective;
});
