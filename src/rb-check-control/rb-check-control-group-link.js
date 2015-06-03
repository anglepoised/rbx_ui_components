define([],
    function () {

        /**
         * rbCheckControlGroup Link function.
         * Provides given model with strings of values checked.
         * Sets checked fields based on given model.
         */
        function rbCheckControlGroupLink ($scope, $element, $attributes) {

            // Check checkboxes who's value is in the model array
            function setChecked () {
                if ($scope.ngModel) {
                    angular.forEach($scope.options, function (option) {
                        if ($scope.ngModel.indexOf(option.value) > -1) {
                            option.checked = true;
                        }
                    });
                }
            }

            // Initial check when rendering
            setChecked();

            // If the model changes externally make sure we update the checkboxes
            $scope.$watch('ngModel', function (newModel, oldModel) {

                if (newModel === oldModel) {
                    return;
                }
                setChecked();

            }, true);

            // When the checkboxes change update the model.
            // Don't destory/override the model as it could be shared with another group.
            $scope.$watch('options|filter:{checked:true}', function (newOptions, oldOptions) {

                if (newOptions === oldOptions) {
                    return;
                }

                if (!$scope.ngModel) {
                    $scope.ngModel = [];
                }

                // Remove all previously selected from model
                angular.forEach(oldOptions, function (option) {
                    var index = $scope.ngModel.indexOf(option.value);
                    if (index > -1) {
                        $scope.ngModel.splice(index, 1);
                    }
                });

                // Add all currently selected to model
                newOptions.map(function (option) {
                    if ($scope.ngModel.indexOf(option.value) < 0) {
                        $scope.ngModel.push(option.value);
                    }
                });

            }, true);
        }

        return rbCheckControlGroupLink;
    });
