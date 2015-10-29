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
     *             label="Your Name"
     *             placeholder="Enter your name..."
     *             name="name"
     *             type="text"
     *             is-elastic="true"
     *             ng-model="demoCtrl.data.name"
     *             on-change="demoCtrl.anyFunction(value)"
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
                label: '@',
                placeholder: '@',
                helpMessage: '@',
                ngModel: '=',
                form: '=',
                name: '@',
                type: '@',
                numberSteps: '@',
                small: '@',
                onChange: '&',
                modelOptions: '@',
                maxDigits: '@',
                maxValue: '@?',
                minValue: '@?'
            },
            restrict: 'E',
            replace: true,
            template: template,
            controller: function ($scope, $element) {
                $scope.modelOptions = {
                    updateOnDefault: true,
                    updateOn: 'default blur',
                    debounce: {
                        'default': 700,
                        'blur': 0
                    }
                };
                if ($scope.type === 'password') {
                    $scope.modelOptions.debounce.default = 0;
                }
                $scope.$watch(function watchmen () {
                    if (!$scope.ngModel) {
                        $scope.isPopulated = '';
                        return;
                    }
                    $scope.isPopulated = ($scope.ngModel.toString() !== '');
                });
            },
            link: function (scope, element, attributes) {
                scope.numberSteps = scope.numberSteps || 0;
                if (scope.type === 'currency') {
                    scope.inputType = 'number';
                    scope.numberSteps = scope.numberSteps || 0.01;
                } else {
                    scope.inputType = scope.type;
                }
            }
        };
    }

    return rbTextControlDirective;
});
