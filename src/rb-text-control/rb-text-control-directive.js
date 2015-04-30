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
     *     <form name="userForm">
     *         <rb-text-control
     *             form="userForm"
     *             title="Your Name"
     *             placeholder="Enter your name..."
     *             name="name"
     *             type="text"
     *             is-elastic="true"
     *             ng-model="demoCtrl.data.name"
     *             is-required="true"
     *             help-message="This is what we will call you!">
     *         </rb-text-control>
     *     </form>
     * </hljs>
     *
     * @ngInject
     */
    function rbTextControlDirective () {

        return {
            scope: {
                isDisabled: '@',
                isElastic: '@',
                isRequired: '@',
                isReadonly: '@',
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
