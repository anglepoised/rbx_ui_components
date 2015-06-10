define([
    'html!./rb-check-with-text-control-group.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbCheckWithTextControlGroup
     * @module rb-check-with-text-control-group
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-check-with-text-control-group>
     *     </rb-check-with-text-control-group>
     * </hljs>
     *
     * @ngInject
     */
    function rbCheckWithTextControlGroupDirective () {

        return {
            scope: {
                form: '=',
                name: '@',
                options: '=',
                textPlaceholder: '@?',
                ngModel: '=?',
                checkboxKey: '@?',
                textKey: '@?'
            },
            restrict: 'E',
            replace: true,
            template: template,
            link: function (scope) {

                // Setup default checkboxKey
                if (angular.isUndefined(scope.checkboxKey)) {
                    scope.checkboxKey = 'checkbox';
                }

                // Setup default textKey
                if (angular.isUndefined(scope.textKey)) {
                    scope.textKey = 'text';
                }

                // The internal model is a key-value store of model values
                scope.internalModel = {};

                // Setup blank valid model if model is undefined
                if (angular.isUndefined(scope.ngModel)) {
                    scope.ngModel = [];
                }

                scope.updateInternalModelOnModelChange = function (newVal) {
                    scope.internalModel = {};
                    angular.forEach(newVal, function (value) {
                        scope.internalModel[value[scope.checkboxKey]] = value;
                    });
                };

                scope.updateModelOnInternalModelChange = function (newVal) {
                    scope.ngModel = [];

                    angular.forEach(newVal, function (value, key) {
                        if (value !== false) {
                            scope.ngModel.push(value);
                        }
                    });
                };

                scope.updateInternalModelOnModelChange(scope.ngModel);

                // Watch external model for changes
                scope.$watch('ngModel', scope.updateInternalModelOnModelChange, true);

                // Watch the internal model to modify ngModel
                scope.$watch('internalModel', scope.updateModelOnInternalModelChange, true);
            }
        };
    }

    return rbCheckWithTextControlGroupDirective;
});
