define([
    'components/rb-datetime-control'
], function (rbDatetimeControl) {
    describe('rb-datetime-control', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            element,
            compileTemplate;

        beforeEach(angular.mock.module(rbDatetimeControl.name));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $rootScope = _$rootScope_;
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;

            // Compile directive, apply scope and fetch new isolated scope
            compileTemplate = function (template) {
                element = $compile('<form name="aForm">' + template + '</form>')($scope);
                element = angular.element(element.children('div')[0]);
                $scope.$apply();
                isolatedScope = element.isolateScope();
            };
        }));

        describe('rendering', function () {
            it('should render root, title and body with classes', function () {
                compileTemplate('<rb-datetime-control name="test"></rb-datetime-control>');

                expect(element.length).toBe(1);
                expect(element.hasClass('TextControl')).toBe(true);
                expect(element.hasClass('DatetimeControl')).toBe(true);
            });

            it('should render two inputs with classes', function () {
                compileTemplate('<rb-datetime-control name="test"></rb-datetime-control>');

                var inputs = element.find('input');
                expect(inputs.length).toBe(3); // Include inherit checkbox too!
                expect(angular.element(inputs[0]).hasClass('TextControl-field')).toBe(true);
                expect(angular.element(inputs[1]).hasClass('TextControl-field')).toBe(true);
            });

            it('should render help message div', function () {
                compileTemplate(
                    '<rb-datetime-control name="test" help-message="Enter a date and time"></rb-datetime-control>'
                );

                messages = element[0].getElementsByClassName('TextControl-message');
                expect(messages.length).toBe(2);
                expect(angular.element(messages[0]).text()).toContain('Enter a date and time');
                expect(angular.element(messages[1]).text()).toContain('All times are shown in your local time.');
            });

            it('should name two inputs with generated names', function () {
                compileTemplate(
                    '<rb-datetime-control name="test" help-message="Enter a date and time"></rb-datetime-control>'
                );

                var firstInput = angular.element(element.find('input')[0]),
                    secondInput = angular.element(element.find('input')[1]);

                expect(firstInput.attr('name')).toBe('testDate');
                expect(secondInput.attr('name')).toBe('testTime');
            });
        });

        describe('label', function () {
            it('should contain title', function () {
                compileTemplate('<rb-datetime-control name="test" title="The date and time"></rb-datetime-control>');
                expect(element.find('label').text()).toContain('The date and time');
            });

            it('should use invalid class when control invalid after touch', function () {
                compileTemplate('<rb-datetime-control form="aForm" is-required="true"></rb-datetime-control>');

                // Focus and unfocus the input field
                angular.element(element.find('input')[0]).triggerHandler('focus');
                angular.element(element.find('input')[0]).triggerHandler('blur');

                expect(element.find('label').hasClass('is-invalid')).toBe(true);
            });

            it('should not use invalid class when control invalid before touch', function () {
                compileTemplate('<rb-datetime-control name="test"></rb-datetime-control>');

                expect(element.find('label').hasClass('is-invalid')).toBe(false);
            });
        });

        describe('input', function () {
            it('should bind to the model', function () {
                $scope.dateTime = '2015-04-27T11:29:05.474Z';
                compileTemplate(
                    '<rb-datetime-control name="test" ng-model="dateTime" form="aForm"></rb-datetime-control>'
                );

                expect(element.find('input')[0].value).toBe('27/04/2015');
                // Timezone should be set with TZ=UTC flag before running tests so phamtom doesn't use local timzone.
                expect(element.find('input')[1].value).toBe('11:29');
            });

            it('should use invalid class when control invalid after touch', function () {
                compileTemplate(
                    '<rb-datetime-control name="test" is-required="true" form="aForm"></rb-datetime-control>'
                );

                var firstInput = angular.element(element.find('input')[0]),
                    secondInput = angular.element(element.find('input')[1]);
                // Focus and unfocus the input field
                firstInput.triggerHandler('focus');
                firstInput.triggerHandler('blur');
                secondInput.triggerHandler('focus');
                secondInput.triggerHandler('blur');

                expect(firstInput.hasClass('is-invalid')).toBe(true);
                expect(secondInput.hasClass('is-invalid')).toBe(true);
            });

            it('should not use invalid class when control invalid before touch', function () {
                compileTemplate('<rb-datetime-control name="test" form="aForm"></rb-datetime-control>');

                var firstInput = angular.element(element.find('input')[0]),
                    secondInput = angular.element(element.find('input')[1]);

                expect(firstInput.hasClass('is-invalid')).toBe(false);
                expect(secondInput.hasClass('is-invalid')).toBe(false);
            });

            it('should be disabled when is-disabled is set', function () {
                compileTemplate(
                    '<rb-datetime-control name="test" is-disabled="true" form="aForm"></rb-datetime-control>'
                );

                var firstInput = angular.element(element.find('input')[0]),
                    secondInput = angular.element(element.find('input')[1]);

                expect(firstInput.attr('disabled')).toBe('disabled');
                expect(secondInput.attr('disabled')).toBe('disabled');
            });

            it('should not be disabled when is-disabled is set', function () {
                compileTemplate(
                    '<rb-datetime-control name="test" is-disabled="false" form="aForm"></rb-datetime-control>'
                );
                expect(element.find('input').attr('disabled')).toBe(undefined);
            });

            it('should become required when is-required is true', function () {
                compileTemplate(
                    '<rb-datetime-control name="test" is-required="true" form="aForm"></rb-datetime-control>'
                );

                var firstInput = angular.element(element.find('input')[0]),
                    secondInput = angular.element(element.find('input')[1]);

                expect(firstInput.attr('required')).toBe('required');
                expect(secondInput.attr('required')).toBe('required');
            });

            it('should not be required when is-required is false', function () {
                compileTemplate(
                    '<rb-datetime-control name="test" is-required="false" form="aForm"></rb-datetime-control>'
                );

                var firstInput = angular.element(element.find('input')[0]),
                    secondInput = angular.element(element.find('input')[1]);

                expect(firstInput.attr('required')).toBe(undefined);
                expect(secondInput.attr('required')).toBe(undefined);
            });

            it('should be readonly when is-readonly is true', function () {
                compileTemplate(
                    '<rb-datetime-control name="test" is-readonly="true" form="aForm"></rb-datetime-control>'
                );

                var firstInput = angular.element(element.find('input')[0]),
                    secondInput = angular.element(element.find('input')[1]);

                expect(firstInput.attr('readonly')).toBe('readonly');
                expect(secondInput.attr('readonly')).toBe('readonly');
            });

            it('should not be readonly when is-readonly is false', function () {
                compileTemplate(
                    '<rb-datetime-control name="test" is-readonly="false" form="aForm"></rb-datetime-control>'
                );

                var firstInput = angular.element(element.find('input')[0]),
                    secondInput = angular.element(element.find('input')[1]);

                expect(firstInput.attr('readonly')).toBe(undefined);
                expect(secondInput.attr('readonly')).toBe(undefined);
            });

            it('should accept a placeholder for time and date', function () {
                compileTemplate(
                    '<rb-datetime-control name="test" placeholder-date="DD/MM/YY" placeholder-time="HH:MM">' +
                    '</rb-datetime-control>'
                );

                var firstInput = angular.element(element.find('input')[0]),
                    secondInput = angular.element(element.find('input')[1]);

                expect(firstInput.attr('placeholder')).toBe('DD/MM/YY');
                expect(secondInput.attr('placeholder')).toBe('HH:MM');
            });

        });

        describe('inherited date time', function () {

            it('should not show inherited date time checkbox when attribute is missing', function () {
                compileTemplate(
                        '<rb-datetime-control name="test" is-required="true" form="aForm"></rb-datetime-control>'
                    );

                var inheritDiv = element[0].getElementsByClassName('DatetimeControl-inherit')[0];

                expect(angular.element(inheritDiv).hasClass('ng-hide')).toBe(true);
            });

            it('should show inherited date time checkbox when inherit-datetime attribute is specified', function () {
                $scope.inheritDateTime = '2015-04-27T11:29:05.474Z';
                compileTemplate(
                    '<rb-datetime-control name="test" inherit-datetime="{{inheritDateTime}}" is-required="true" ' +
                    'form="aForm"></rb-datetime-control>'
                );

                var inheritDiv = element[0].getElementsByClassName('DatetimeControl-inherit')[0];

                expect(angular.element(inheritDiv).hasClass('ng-hide')).toBe(false);
            });

            it('should set inherit label passed from attribute', function () {
                $scope.inheritDateTime = '2015-04-27T11:29:05.474Z';
                compileTemplate(
                    '<rb-datetime-control name="test" inherit-label="Inherit date/time" ' +
                    'inherit-datetime="{{inheritDateTime}}" is-required="true" form="aForm"></rb-datetime-control>'
                );

                var inheritDiv = element[0].getElementsByClassName('DatetimeControl-inherit')[0];

                expect(angular.element(inheritDiv).find('label').text()).toContain('Inherit date/time');
            });

            it('should set date to inherited date value on checkbox select', function () {
                $scope.inheritModel = false;
                $scope.inheritDateTime = '2015-04-27T11:29:05.474Z';
                $scope.dt = '';
                compileTemplate(
                    '<rb-datetime-control name="test" ng-model="dt" inherit-datetime="{{inheritDateTime}}" ' +
                    'is-required="true" inherit-model="inheritModel" form="aForm"></rb-datetime-control>'
                );

                $scope.inheritModel = true;
                $scope.$apply();
                isolatedScope.toggleInherited();
                isolatedScope.$apply();

                var inputOne = angular.element(element.find('input')[0]),
                    inputTwo = angular.element(element.find('input')[1]);

                expect(inputOne[0].value).toBe('27/04/2015');
                expect(inputOne.attr('disabled')).toBe('disabled');
                // Timezone should be set with TZ=UTC flag before running tests so phamtom doesn't use local timzone.
                expect(inputTwo[0].value).toBe('11:29');
                expect(inputTwo.attr('disabled')).toBe('disabled');
            });

            it('should set date to a emtpy value on checkbox deselect', function () {
                $scope.inheritModel = true;
                $scope.inheritDateTime = '2015-04-27T11:29:05.474Z';
                $scope.dt = '';
                compileTemplate(
                    '<rb-datetime-control name="test" ng-model="dt" inherit-datetime="{{inheritDateTime}}" ' +
                    'is-required="true" inherit-model="inheritModel" form="aForm"></rb-datetime-control>'
                );

                $scope.inheritModel = false;
                $scope.$apply();
                isolatedScope.toggleInherited();
                isolatedScope.$apply();

                expect(element.find('input')[0].value).toBe('');
                // Timezone should be set with TZ=UTC flag before running tests so phamtom doesn't use local timzone.
                expect(element.find('input')[1].value).toBe('');
            });

            it('should bind as a boolean to the inherit-model attribute', function () {
                $scope.inheritModel = true;
                $scope.inheritDateTime = '2015-04-27T11:29:05.474Z';
                $scope.dt = '';
                compileTemplate(
                    '<rb-datetime-control name="test" ng-model="dt" inherit-datetime="{{inheritDateTime}}"' +
                    ' is-required="true" inherit-model="inheritModel" form="aForm"></rb-datetime-control>'
                );

                isolatedScope.toggleInherited();
                isolatedScope.$apply();

                var inputOne = angular.element(element.find('input')[0]),
                    inputTwo = angular.element(element.find('input')[1]);

                expect(inputOne[0].value).toBe('27/04/2015');
                expect(inputOne.attr('disabled')).toBe('disabled');
                // Timezone should be set with TZ=UTC flag before running tests so phamtom doesn't use local timzone.
                expect(inputTwo[0].value).toBe('11:29');
                expect(inputTwo.attr('disabled')).toBe('disabled');
            });
        });

        describe('validation', function () {

            it('should show validation messages when invalid after touch', function () {
                compileTemplate(
                    '<rb-datetime-control name="test" is-required="true" form="aForm"></rb-datetime-control>'
                );

                // Focus and unfocus the input field to trigger validation messages
                element.find('input').triggerHandler('focus');
                element.find('input').triggerHandler('blur');

                // Get validation message
                element = angular.element(element[0].querySelector('.TextControl-message.is-invalid'));

                expect(element.length).toBe(1);
            });

            it('should not show validation messages when invalid before touch', function () {
                compileTemplate(
                    '<rb-datetime-control name="test" is-required="true" form="aForm"></rb-datetime-control>'
                );

                // Get validation message
                element = angular.element(element[0].querySelector('.TextControl-message.is-invalid'));

                expect(element.length).toBe(0);
            });

            it('should invalidate the form field when invalid', function () {
                compileTemplate(
                    '<rb-datetime-control name="test" is-required="true" form="aForm"></rb-datetime-control>'
                );

                // Focus and unfocus the input field to trigger validation messages
                element.find('input').triggerHandler('focus');
                element.find('input').triggerHandler('blur');

                expect($scope.aForm.testDate.$invalid).toBe(true);
                expect($scope.aForm.$invalid).toBe(true);
            });

            it('should validate the form field when valid', function () {
                compileTemplate(
                    '<rb-datetime-control name="test" is-required="false" form="aForm"></rb-datetime-control>'
                );

                // Focus and unfocus the input field to trigger validation messages
                element.find('input').triggerHandler('focus');
                element.find('input').triggerHandler('blur');

                expect($scope.aForm.testDate.$invalid).toBe(false);
                expect($scope.aForm.$invalid).toBe(false);
            });

        });

    });
});
