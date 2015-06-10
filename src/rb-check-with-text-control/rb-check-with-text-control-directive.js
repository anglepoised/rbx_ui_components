define([
    'html!./rb-check-with-text-control.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbCheckWithTextControl
     * @module rb-check-with-text-control
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-check-with-text-control>
     *     </rb-check-with-text-control>
     * </hljs>
     *
     * @ngInject
     */
    function rbCheckWithTextControlDirective () {

        return {
            scope: {
                form: '=',
                name: '@',
                label: '@',
                checkboxValue: '@',
                textPlaceholder: '@',
                ngModel: '=?',
                checkboxKey: '@',
                textKey: '@'
            },
            restrict: 'E',
            replace: true,
            template: template,
            link: function (scope) {
                scope.checked = false;

                // Cache models between toggling
                scope.cachedModel = {};

                // Check if we have a valid model
                scope.modelIsValid = function () {
                    if (angular.isUndefined(scope.ngModel)) {
                        // No model, so not checked
                        return false;
                    } else {
                        if (angular.isUndefined(scope.ngModel[scope.textKey])) {
                            // Bad model, so not checked
                            return false;
                        } else {
                            // We have a correct model, so checked
                            return true;
                        }
                    }
                };

                // Setup defaults for model
                if (angular.isUndefined(scope.checkboxKey)) {
                    scope.checkboxKey = 'checkbox';
                }

                if (angular.isUndefined(scope.textKey)) {
                    scope.textKey = 'text';
                }

                // Setup default cachedModel
                if (scope.modelIsValid()) {
                    scope.cachedModel = scope.ngModel;
                } else {
                    scope.cachedModel = {};
                    scope.cachedModel[scope.checkboxKey] = scope.checkboxValue;
                    scope.cachedModel[scope.textKey] = '';
                }

                scope.updateCheckedOnModelChange = function (modelVal) {
                    if (scope.modelIsValid()) {
                        scope.cachedModel = scope.ngModel;
                        scope.checked = true;
                    } else {
                        scope.checked = false;
                    }
                };

                // Watch ngModel for external changes
                scope.$watch('ngModel', scope.updateCheckedOnModelChange);

                scope.updateModelOnCheckedChange = function (checkedVal) {
                    if (scope.checked === true) {
                        scope.ngModel = scope.cachedModel;
                    } else {
                        scope.ngModel = false;
                    }
                };

                // Watch checked to set ngModel to cached model if true, else set ngModel to false
                scope.$watch('checked', scope.updateModelOnCheckedChange, true);

            }
        };
    }

    return rbCheckWithTextControlDirective;
});
