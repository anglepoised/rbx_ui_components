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
            link: function ($scope) {

                angular.forEach($scope.choices, function (choice) {
                    // Loop through all the choices and see if any have an Icon key
                    if (choice.icon) {
                        $scope.hasIcon = true;
                        return;
                    }
                });

                $scope.setChoice = function (choice) {
                    $scope.ngModel = choice.value;
                    // Notify form that it has been updated
                    $scope.form.$pristine = false;
                };

                $scope.isChecked = function (choice) {
                    return $scope.ngModel === choice.value;
                };
            }
        };
    }

    return rbRadioControlDirective;
});
