define([
    'html!./rb-text-control.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbTextControl
     * @module rb-text-control
     *
     * @restrict E
     *
     * @description Contains the label, input, help message and validation for a text input control.
     *
     * @usage
     * <hljs lang="html">
     *    <rb-text-control>
     *     </rb-text-control>
     * </hljs>
     *
     * @ngInject
     */
    function rbTextControlDirective () {

        return {
            scope: {
                isDisabled: '@',
                isRequired: '@',
                title: '@',
                placeholder: '@',
                helpMessage: '@',
                ngModel: '=',
                form: '=',
                name: '@',
                type: '@'
            },
            restrict: 'E',
            replace: true,
            template: template
        };
    }

    return rbTextControlDirective;
});
