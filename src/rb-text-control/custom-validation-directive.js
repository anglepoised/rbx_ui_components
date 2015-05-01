define([
], function () {
    function customValidationDirective () {
        var EMAIL_REGEXP = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

        return {
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {
                if (scope.type === 'email') {

                    ctrl.$validators.email = function (modelValue, viewValue) {
                        var result = ctrl.$isEmpty(modelValue) || EMAIL_REGEXP.test(modelValue);
                        return result;
                    };
                } else if (scope.type === 'currency') {

                    ctrl.$validators.currency = function (modelValue, viewValue) {
                        var splitSteps = (scope.numberSteps) ? scope.numberSteps.toString().split('.') : [],
                            maxDecimals = (splitSteps[1]) ? splitSteps[1].length : 0,
                            splitValue = (viewValue) ? viewValue.split('.') : [],
                            decimalsPlaces = (splitValue[1]) ? splitValue[1].length : 0,
                            result = ctrl.$isEmpty(modelValue) || (decimalsPlaces <= maxDecimals);

                        return result;
                    };
                }
            }
        };

    }

    return customValidationDirective;
});
