define([
    'components/rb-radio-control'
], function (rbRadioControl) {
    describe('rb-radio-control', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            element,
            compileTemplate,
            choices,
            form,
            model;

        beforeEach(angular.mock.module(rbRadioControl.name));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $rootScope = _$rootScope_;
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;

            choices = [
                {
                    label: 'Radio One',
                    value: 'radio_one'
                },
                {
                    label: 'Radio Two',
                    value: 'radio_two'
                }
            ];

            form = {
                $pristine: true
            };

            // Compile directive, apply scope and fetch new isolated scope
            compileTemplate = function (template) {
                $scope.choices = choices;
                $scope.form = form;
                $scope.model = model;
                element = $compile(template)($scope);
                $scope.$apply();
                isolatedScope = element.isolateScope();
            };
        }));

        it('should have a name attribute', function () {
            compileTemplate('<rb-radio-control choices="choices" name="radio-group"></rb-radio-control>');

            var radio = element.find('input');

            angular.forEach(radio, function (value, key) {
                expect(value.name).toBe('radio-group');
            });
        });

        describe('is required', function () {
            it('should not be there by default', function () {
                compileTemplate('<rb-radio-control choices="choices"></rb-radio-control>');

                var radio = element.find('input');

                angular.forEach(radio, function (value, key) {
                    expect(value.hasAttribute('required')).toBe(false);
                });
            });

            it('should be applied to all radio inputs', function () {
                compileTemplate('<rb-radio-control choices="choices" is-required=true></rb-radio-control>');

                var radio = element.find('input');

                angular.forEach(radio, function (value, key) {
                    expect(value.hasAttribute('required')).toBe(true);
                });
            });
        });

        describe('disabled', function () {
            it('should be enabled by default', function () {
                compileTemplate('<rb-radio-control choices="choices"></rb-radio-control>');

                var radio = element.find('input');

                angular.forEach(radio, function (value, key) {
                    expect(value.hasAttribute('disabled')).toBe(false);
                });
            });

            it('should disable all radio inputs', function () {
                compileTemplate('<rb-radio-control choices="choices" is-disabled=true></rb-radio-control>');

                var radio = element.find('input');

                angular.forEach(radio, function (value, key) {
                    expect(value.hasAttribute('disabled')).toBe(true);
                });
            });

            it('should only disable the first radio input', function () {
                choices[0].disabled = true;

                compileTemplate('<rb-radio-control choices="choices"></rb-radio-control>');

                var radio = element.find('input');

                expect(radio[0].hasAttribute('disabled')).toBe(true);
                expect(radio[1].hasAttribute('disabled')).toBe(false);
            });
        });

        describe('help message', function () {
            it('should show', function () {
                compileTemplate('<rb-radio-control help-message="Radio Control Help Message"></rb-radio-control>');

                var messages = element[0].getElementsByClassName('RadioControl-message');

                expect(messages.length).toBe(1);
                expect(angular.element(messages[0]).text()).toContain('Radio Control Help Message');
            });

            it('should be hidden if help-message is not specified', function () {
                compileTemplate('<rb-radio-control></rb-radio-control>');

                var messages = element[0].getElementsByClassName('RadioControl-message');

                expect(angular.element(messages[0]).hasClass('ng-hide')).toBe(true);
            });
        });

        describe('row modifier', function () {
            it('should not be applied by default', function () {
                compileTemplate('<rb-radio-control></rb-radio-control>');

                expect(angular.element(element[0]).hasClass('RadioControl--row')).toBe(false);
            });

            it('should have the radio control row class', function () {
                compileTemplate('<rb-radio-control is-row=true></rb-radio-control>');

                expect(angular.element(element[0]).hasClass('RadioControl--row')).toBe(true);
            });
        });

        describe('model', function () {
            describe('setChoice', function () {
                beforeEach(function () {
                    compileTemplate('<rb-radio-control choices="choices" form="form" ' +
                        'ng-model="model"></rb-radio-control>');
                });

                it('should be the value of the selected radio control', function () {
                    isolatedScope.setChoice($scope.choices[0]);
                    $scope.$digest();

                    expect($scope.model).toBe(element.find('input')[0].value);
                });

                it('should set form.$pristine as false when setting choice', function () {
                    isolatedScope.setChoice($scope.choices[0]);

                    expect($scope.form.$pristine).toBe(false);
                });
            });

            describe('isChecked', function () {
                it('should select a radio control when already has a value', function () {
                    model = 'radio_two';
                    compileTemplate('<rb-radio-control ng-model="model" choices="choices"></rb-radio-control>');

                    expect(isolatedScope.isChecked($scope.choices[1])).toBe(true);
                });
            });
        });

        describe('icon', function () {
            it('should take value from icon property in choices', function () {

                $scope.iconChoices = [
                    {
                        label: 'Radio One',
                        value: 'radio_one',
                        icon: 'AnIconClass'
                    },
                    {
                        label: 'Radio Two',
                        value: 'radio_two',
                        icon: 'AnSecondIconClass'
                    }
                ];

                compileTemplate('<rb-radio-control choices="iconChoices"></rb-radio-control>');

                var icons = element[0].getElementsByClassName('Icon'),
                    iconOne = angular.element(icons[0]),
                    iconTwo = angular.element(icons[1]);

                expect(icons.length).toBe(2);
                expect(iconOne.hasClass('Icon--AnIconClass')).toBe(true);
                expect(iconTwo.hasClass('Icon--AnSecondIconClass')).toBe(true);
            });
        });
    });
});
