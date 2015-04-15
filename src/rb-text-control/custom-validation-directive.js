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
                }
            }
        };

    }

    return customValidationDirective;
});
