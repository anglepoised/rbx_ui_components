define([
    'html!./rb-check-control-select-all.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbCheckControlSelectAll
     * @module rb-check-control0-
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-check-control>
     *     </rb-check-control>
     * </hljs>
     *
     * @ngInject
     */
    function rbCheckControlDirective () {

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
                };

                $scope.$watch('ngModel', function () {
                    $scope.update();
                }, true);
            }
        };
    }

    return rbCheckControlDirective;
});
