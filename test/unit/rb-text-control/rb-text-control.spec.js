define([
    'ui-components/rb-text-control',
    'html!./rb-text-control.tpl.html'
], function (rbTextControl, template) {
    describe('rb-text-control', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            textControl,
            element,
            recompile;

        // Recompile directive after updating $scope
        recompile = function (scopeChanges) {
            angular.extend($scope, scopeChanges);
            element = $compile(template)($scope);
            $scope.$apply();
        };

        beforeEach(angular.mock.module('rb-text-control'));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $rootScope = _$rootScope_;
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;

            // Use scope variables to dynamically modify test template
            $scope.data = {};
            $scope.isRequired = true;

            element = $compile(template)($scope);
            $scope.$digest();

            // Need to get isolated scope on first child of <form>, else it's undefined since form is not a directive
            isolatedScope = angular.element(element.children()[0]).isolateScope();
            isolatedScope.$digest();
        }));

        describe('root element', function () {
            it('should have the TextControl--text class', function () {
                expect(element.find('div').hasClass('TextControl--text')).toBe(true);
            });

            it('should have TextControl--small class when `small` is `true`', function () {
                element = $compile('<rb-text-control small="true"></rb-text-control>')($scope);
                $scope.$apply();
                expect(element.hasClass('TextControl--small')).toBe(true);
            });

            it('should not have TextControl--small class when `small` is `false`', function () {
                element = $compile('<rb-text-control small="false"></rb-text-control>')($scope);
                $scope.$apply();
                expect(element.hasClass('TextControl--small')).toBe(false);
            });

            it('should not have TextControl--small class when `small` is undefined', function () {
                element = $compile('<rb-text-control></rb-text-control>')($scope);
                $scope.$apply();
                expect(element.hasClass('TextControl--small')).toBe(false);
            });
        });

        describe('label', function () {
            it('should contain label', function () {
                expect(element.find('label').html()).toContain('Your Name');
            });

            it('should use invalid class when control invalid after touch', function () {

                // Focus and unfocus the input field
                element.find('input').triggerHandler('focus');
                element.find('input').triggerHandler('blur');

                expect(element.find('label').hasClass('is-invalid')).toBe(true);
            });

            it('should not use invalid class when control invalid before touch', function () {
                expect(element.find('label').hasClass('is-invalid')).toBe(false);
            });
        });

        describe('input', function () {
            it('should bind to the model', function () {
                recompile({data: {firstName: 'Steve'}});
                expect(element.find('input')[0].value).toBe('Steve');
            });

            it('should use invalid class when control invalid after touch', function () {
                // Focus and unfocus the input field
                element.find('input').triggerHandler('focus');
                element.find('input').triggerHandler('blur');

                expect(element.find('input').hasClass('is-invalid')).toBe(true);
            });

            it('should not use invalid class when control invalid before touch', function () {
                expect(element.find('input').hasClass('is-invalid')).toBe(false);
            });

            it('should be disabled when is-disabled is set', function () {
                recompile({isDisabled: true});
                expect(element.find('input').attr('disabled')).toBe('disabled');
            });

            it('should not be disabled when is-disabled is set', function () {
                recompile({isDisabled: false});
                expect(element.find('input').attr('disabled')).toBe(undefined);
            });

            it('should become required when is-required is true', function () {
                expect(element.find('input').attr('required')).toBe('required');
            });

            it('should not be required when is-required is false', function () {
                recompile({isRequired: false});
                expect(element.find('input').attr('required')).toBe(undefined);
            });

            it('should be readonly when is-readonly is true', function () {
                recompile({isReadonly: true});
                expect(element.find('input').attr('readonly')).toBe('readonly');
            });

            it('should not be readonly when is-readonly is false', function () {
                recompile({isReadonly: false});
                expect(element.find('input').attr('readonly')).toBe(undefined);
            });

            it('should accept a placeholder', function () {
                recompile({placeholder: 'Enter your name...'});

                expect(element.find('input').attr('placeholder')).toBe('Enter your name...');
            });

            it('should have the correct name', function () {
                expect(element.find('input').attr('name')).toBe('firstName');
            });

        });

        describe('help message', function () {
            it('should show and contain help message when set', function () {
                recompile({helpMessage: 'Relax. Take it easy.'});

                // Get validation message
                element = angular.element(element[0].querySelector('.TextControl-message'));

                expect(element.html()).toContain('Relax. Take it easy.');
            });
        });

        describe('validation', function () {

            it('should show validation messages when invalid after touch', function () {
                // Focus and unfocus the input field to trigger validation messages
                element.find('input').triggerHandler('focus');
                element.find('input').triggerHandler('blur');

                // Get validation message
                element = angular.element(element[0].querySelector('.TextControl-message.is-invalid'));

                expect(element.length).toBe(1);
            });

            it('should not show validation messages when invalid before touch', function () {
                // Get validation message
                element = angular.element(element[0].querySelector('.TextControl-message.is-invalid'));

                expect(element.length).toBe(0);
            });

            it('should invalidate the form field when invalid', function () {
                expect($scope.testForm.firstName.$invalid).toBe(true);
            });

            it('should invalidate the form when invalid', function () {
                expect($scope.testForm.$invalid).toBe(true);
            });

            it('should validate the form field when valid', function () {
                recompile({isRequired: false});

                expect($scope.testForm.firstName.$invalid).toBe(false);
            });

            it('should validate the form when valid', function () {
                recompile({isRequired: false});

                expect($scope.testForm.$invalid).toBe(false);
            });
        });

        describe('required validation', function () {
            describe('message', function () {
                it('should show when control is set to required and is empty after touch', function () {
                    // Focus and unfocus the input field to trigger validation messages
                    element.find('input').triggerHandler('focus');
                    element.find('input').triggerHandler('blur');

                    // Get validation message
                    element = angular.element(element[0].querySelector('.TextControl-message.is-invalid'));

                    expect(element.html()).toContain('This field is required.');
                });
            });

            describe('accepts', function () {
                it('any text input', function () {
                    recompile({data: {firstName: 'Tim'}});

                    expect($scope.testForm.firstName.$invalid).toBe(false);
                });
            });

        });

        describe('server validation', function () {
            describe('message', function () {
                it('should show when a message is set to the $error.server parameter on the form', function () {
                    $scope.testForm.firstName.$error.server = 'Something bad happened!';
                    $scope.$apply(); // Can't use recomile as it will reset the testForm object

                    // Get validation message
                    element = angular.element(element[0].querySelector('.TextControl-message.is-invalid'));

                    expect(element.html()).toContain('Something bad happened!');
                });
            });
        });

    });
});
