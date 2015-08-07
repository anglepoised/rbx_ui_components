define([
], function () {
    function customValidationDirective () {

        return {
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {
                if (scope.type === 'currency') {

                    ctrl.$validators.currency = function (modelValue, viewValue) {
                        var splitSteps = (scope.numberSteps) ? scope.numberSteps.toString().split('.') : [],
                            maxDecimals = (splitSteps[1]) ? splitSteps[1].length : 0,
                            splitValue = (viewValue) ? viewValue.split('.') : [],
                            decimalsPlaces = (splitValue[1]) ? splitValue[1].length : 0,
                            result = ctrl.$isEmpty(modelValue) || (decimalsPlaces <= maxDecimals);
                        return result;
                    };

                    ctrl.$validators.tooManyDigits = function (modelValue, viewValue) {
                        var wholeNumberDigits, result;
                        if (!modelValue) {
                            wholeNumberDigits = 0;
                        } else if (modelValue.toString().split('e+').length > 1) {
                            wholeNumberDigits = modelValue.toString().split('e+')[1];
                        } else {
                            wholeNumberDigits = modelValue.toString().split('.')[0].length;
                        }
                        result = ctrl.$isEmpty(modelValue) || (wholeNumberDigits <= 18);
                        return result;
                    };

                }
            }
        };

    }

    return customValidationDirective;
});
