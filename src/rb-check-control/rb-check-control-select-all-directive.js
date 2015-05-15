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
     *         form="form"
     *         is-disabled="false"
     *         is-required="false"
     *         name="name"
     *         ng-model="ngModel"
     *         select-all="false"
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
                isDisabled: '@',
                isRequired: '@',
                name: '@',
                ngModel: '=',
                selectAll: '@',
                title: '@'
            },
            restrict: 'E',
            replace: true,
            template: template,
            link: function ($scope, $element, $attributes) {
                $scope.change = function () {
                    if ($scope.master) {
                        $scope.checkAll(true);
                    } else {
                        $scope.checkAll(false);
                    }
                };

                $scope.checkAll = function (checked) {
                    angular.forEach($scope.ngModel, function (value, key) {
                        value.checked = checked;
                    });
                };

                $scope.update = function () {
                    var cleared = true,
                        checked = true,
                        input = $element.find('input');

                    angular.forEach($scope.ngModel, function (value, key) {
                        if (value.checked) {
                            cleared = false;
                        } else {
                            checked = false;
                        }
                    });

                    if (checked) {
                        $scope.master = true;
                        input.prop('indeterminate', false);
                    } else if (cleared) {
                        $scope.master = false;
                        input.prop('indeterminate', false);
                    } else {
                        $scope.master = false;
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
