define([
    'components/rb-text-control',
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

        describe('label', function () {
            it('should contain title', function () {
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
            it('should use invalid class when control invalid after touch', function () {
                // Focus and unfocus the input field
                element.find('input').triggerHandler('focus');
                element.find('input').triggerHandler('blur');

                expect(element.find('input').hasClass('is-invalid')).toBe(true);
            });

            it('should not use invalid class when control invalid before touch', function () {
                expect(element.find('input').hasClass('is-invalid')).toBe(false);
            });

            it('should become disabled when is-disabled is set', function () {
                recompile({isDisabled: true});

                // Can just test ng-disabled exists as we can assume that works
                expect(element.find('input').attr('ng-disabled')).toBe('true');
            });

            it('should become required when is-required is true', function () {
                // Can just test ng-required exists as we can assume that works
                expect(element.find('input').attr('ng-required')).toBe('true');
            });

            it('should not be required when is-required is false', function () {
                recompile({isRequired: false});

                // Can just test ng-required exists as we can assume that works
                expect(element.find('input').attr('ng-required')).toBe('false');
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

    });
});
