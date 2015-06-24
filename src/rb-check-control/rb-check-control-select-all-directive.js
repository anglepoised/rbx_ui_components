define([
    'html!./rb-check-control-select-all.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbCheckControlSelectAll
     * @module rb-check-control-select-all
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *     <rb-check-control-select-all
     *         enable-select-all="false"
     *         form="form"
     *         is-disabled="expression"
     *         is-required="false"
     *         name="name"
     *         ng-model="ngModel"
     *         title="Your Title">
     *     </rb-check-control-select-all>
     * </hljs>
     *
     * @ngInject
     */
    function rbCheckControlSelectAllDirective () {

        return {
            scope: {
                form: '=',
                isDisabled: '=?',
                isRequired: '@',
                name: '@',
                ngModel: '=',
                title: '@'
            },
            restrict: 'E',
            replace: true,
            template: template,
            link: function ($scope, $element, $attributes) {
                $scope.change = function () {
                    if ($scope.isSelected) {
                        $scope.checkAll(true);
                    } else {
                        $scope.checkAll(false);
                    }
                };

                $scope.checkAll = function (checked) {
                    angular.forEach($scope.ngModel, function (value, key) {
                        if (!value.disabled) {
                            value.checked = checked;
                        }
                    });
                };

                $scope.update = function () {
                    var cleared = true,
                        checked = true,
                        disabled = true,
                        input = $element.find('input');

                    angular.forEach($scope.ngModel, function (value, key) {
                        if (!value.disabled) {
                            disabled = false;
                        }

                        if (value.checked) {
                            cleared = false;
                        } else {
                            checked = false;
                        }
                    });

                    if (disabled) {
                        $scope.isDisabled = true;
                    }

                    if (checked) {
                        $scope.isSelected = true;
                        input.prop('indeterminate', false);
                    } else if (cleared) {
                        $scope.isSelected = false;
                        input.prop('indeterminate', false);
                    } else {
                        $scope.isSelected = true;
                        input.prop('indeterminate', true);
                    }

                    return input;
                };

                $scope.$watch('ngModel', function () {
                    $scope.update();
                }, true);
            }
        };
    }

    return rbCheckControlSelectAllDirective;
});
