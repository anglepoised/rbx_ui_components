define([
    'ui-components/rb-check-with-text-control-group'
], function (rbCheckWithTextControlGroup) {
    describe('rb-check-with-text-control-group', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            element,
            compileTemplate;

        beforeEach(angular.mock.module(rbCheckWithTextControlGroup.name));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $rootScope = _$rootScope_;
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;

            // Compile directive, apply scope and fetch new isolated scope
            compileTemplate = function (template) {
                element = $compile(template)($scope);
                $scope.$apply();
                isolatedScope = element.isolateScope();
            };
        }));

        describe('isolatedScope', function () {

            it('should contain variables for all expected attributes', function () {

                $scope.form = {};
                $scope.options = [];
                $scope.myModel = {};

                compileTemplate('<rb-check-with-text-control-group ' +
                    'form="form" ' +
                    'name="name" ' +
                    'options="options" ' +
                    'text-placeholder="My Placeholder" ' +
                    'ng-model="myModel" ' +
                    'checkbox-key="checkboxKey" ' +
                    'text-key="textKey"' +
                '></rb-check-with-text-control-group>');

                expect(angular.isDefined(isolatedScope.form)).toBe(true);
                expect(angular.isDefined(isolatedScope.name)).toBe(true);
                expect(angular.isDefined(isolatedScope.options)).toBe(true);
                expect(angular.isDefined(isolatedScope.textPlaceholder)).toBe(true);
                expect(angular.isDefined(isolatedScope.ngModel)).toBe(true);
                expect(angular.isDefined(isolatedScope.checkboxKey)).toBe(true);
                expect(angular.isDefined(isolatedScope.textKey)).toBe(true);
            });

            describe('`checkboxKey` variable', function () {
                it('should default to "checkbox"', function () {
                    compileTemplate('<rb-check-with-text-control-group></rb-check-with-text-control-group>');
                    expect(isolatedScope.checkboxKey).toBe('checkbox');
                });
            });

            describe('`textKey` variable', function () {
                it('should default to "text"', function () {
                    compileTemplate('<rb-check-with-text-control-group></rb-check-with-text-control-group>');
                    expect(isolatedScope.textKey).toBe('text');
                });
            });

            describe('`internalModel` variable', function () {
                it('should default to {}', function () {
                    compileTemplate('<rb-check-with-text-control-group></rb-check-with-text-control-group>');
                    expect(isolatedScope.internalModel = {});
                });
            });

            describe('`updateInternalModelOnModelChange()` method', function () {
                it('should set `internalModel` to keyed version of ngModel', function () {
                    $scope.myModel = [
                        {checkbox: 'my_value', text: 'My text'}
                    ];
                    compileTemplate('<rb-check-with-text-control-group ng-model="myModel">' +
                        '</rb-check-with-text-control-group>');

                    isolatedScope.updateInternalModelOnModelChange(isolatedScope.ngModel);

                    expect(isolatedScope.internalModel).toEqual({
                        'my_value': {checkbox: 'my_value', text: 'My text'}
                    });
                });

                it('be called by default', function () {

                });
            });

            describe('`updateModelOnInternalModelChange()` method', function () {
                it('should set `ngModel` to an array of `internalModel` values', function () {
                    compileTemplate('<rb-check-with-text-control-group>' +
                        '</rb-check-with-text-control-group>');

                    isolatedScope.internalModel = {
                        'my_value': {checkbox: 'my_value', text: 'My text'}
                    };

                    isolatedScope.updateModelOnInternalModelChange(isolatedScope.internalModel);

                    expect(isolatedScope.ngModel).toEqual([
                        {checkbox: 'my_value', text: 'My text'}
                    ]);
                });

                it('be called by default', function () {

                });
            });
        });

        describe('compiled template', function () {

            it('should contain a root element with the appropriate SUIT class', function () {
                compileTemplate('<rb-check-with-text-control-group></rb-check-with-text-control-group>');
                expect(element.hasClass('CheckWithTextControlGroup')).toBe(true);
            });

            describe('rb-check-with-text-control subcomponents', function () {

                it('should be rendered once for each option in `options`', function () {
                    $scope.myOptions = [
                        {
                            'value': 'option_1',
                            'label': 'Option 1'
                        },
                        {
                            'value': 'option_2',
                            'label': 'Option 2'
                        }
                    ];
                    compileTemplate('<rb-check-with-text-control-group options="myOptions">' +
                        '</rb-check-with-text-control-group>');

                    var rbCheckWithTextControl = angular.element(element[0].querySelectorAll('.CheckWithTextControl'));

                    expect(rbCheckWithTextControl.length).toBe(2);
                });

                it('should have `form` attr set by `form`', function () {
                    $scope.myOptions = [
                        {
                            'value': 'option_1',
                            'label': 'Option 1'
                        },
                        {
                            'value': 'option_2',
                            'label': 'Option 2'
                        }
                    ];
                    $scope.myForm = {};

                    compileTemplate('<rb-check-with-text-control-group options="myOptions" form="myForm">' +
                        '</rb-check-with-text-control-group>');

                    var rbCheckWithTextControl = angular.element(element[0].querySelector('.CheckWithTextControl'));

                    expect(rbCheckWithTextControl.attr('form')).toEqual('form');
                });

                it('should have `label` attr set by the option `label`', function () {
                    $scope.myOptions = [
                        {
                            'value': 'option_1',
                            'label': 'Option 1'
                        },
                        {
                            'value': 'option_2',
                            'label': 'Option 2'
                        }
                    ];
                    compileTemplate('<rb-check-with-text-control-group options="myOptions">' +
                        '</rb-check-with-text-control-group>');

                    var rbCheckWithTextControl = angular.element(element[0].querySelector('.CheckWithTextControl'));

                    expect(rbCheckWithTextControl.attr('label')).toEqual('Option 1');
                });

                it('should have `name` attr set by `name` with `_value` suffix', function () {
                    $scope.myOptions = [
                        {
                            'value': 'option_1',
                            'label': 'Option 1'
                        },
                        {
                            'value': 'option_2',
                            'label': 'Option 2'
                        }
                    ];
                    compileTemplate('<rb-check-with-text-control-group options="myOptions" name="my_options">' +
                        '</rb-check-with-text-control-group>');

                    var rbCheckWithTextControl = angular.element(element[0].querySelector('.CheckWithTextControl'));

                    expect(rbCheckWithTextControl.attr('name')).toEqual('my_options_option_1');
                });

                it('should have `ng-model` attr set by `internalModel[option.value]`', function () {
                    $scope.myOptions = [
                        {
                            'value': 'option_1',
                            'label': 'Option 1'
                        },
                        {
                            'value': 'option_2',
                            'label': 'Option 2'
                        }
                    ];
                    compileTemplate('<rb-check-with-text-control-group options="myOptions">' +
                        '</rb-check-with-text-control-group>');

                    var rbCheckWithTextControl = angular.element(element[0].querySelector('.CheckWithTextControl'));

                    expect(rbCheckWithTextControl.attr('ng-model')).toEqual('internalModel[option.value]');
                });

                it('should have `checkbox-value` attr set by the option `value`', function () {
                    $scope.myOptions = [
                        {
                            'value': 'option_1',
                            'label': 'Option 1'
                        },
                        {
                            'value': 'option_2',
                            'label': 'Option 2'
                        }
                    ];
                    compileTemplate('<rb-check-with-text-control-group options="myOptions">' +
                        '</rb-check-with-text-control-group>');

                    var rbCheckWithTextControl = angular.element(element[0].querySelector('.CheckWithTextControl'));

                    expect(rbCheckWithTextControl.attr('checkbox-value')).toEqual('option_1');
                });

                it('should have `text-placeholder` attr set by `textPlaceholder`', function () {
                    $scope.myOptions = [
                        {
                            'value': 'option_1',
                            'label': 'Option 1'
                        },
                        {
                            'value': 'option_2',
                            'label': 'Option 2'
                        }
                    ];
                    compileTemplate('<rb-check-with-text-control-group options="myOptions" ' +
                        'text-placeholder="Description"></rb-check-with-text-control-group>');

                    var rbCheckWithTextControl = angular.element(element[0].querySelector('.CheckWithTextControl'));

                    expect(rbCheckWithTextControl.attr('text-placeholder')).toEqual('Description');
                });

                it('should have `checkbox-key` attr set by `checkboxKey`', function () {
                    $scope.myOptions = [
                        {
                            'value': 'option_1',
                            'label': 'Option 1'
                        },
                        {
                            'value': 'option_2',
                            'label': 'Option 2'
                        }
                    ];
                    compileTemplate('<rb-check-with-text-control-group options="myOptions" checkbox-key="id">' +
                        '</rb-check-with-text-control-group>');

                    var rbCheckWithTextControl = angular.element(element[0].querySelector('.CheckWithTextControl'));

                    expect(rbCheckWithTextControl.attr('checkbox-key')).toEqual('id');
                });

                it('should have `text-key` attr set by `textKey`', function () {
                    $scope.myOptions = [
                        {
                            'value': 'option_1',
                            'label': 'Option 1'
                        },
                        {
                            'value': 'option_2',
                            'label': 'Option 2'
                        }
                    ];
                    compileTemplate('<rb-check-with-text-control-group options="myOptions" text-key="description">' +
                        '</rb-check-with-text-control-group>');

                    var rbCheckWithTextControl = angular.element(element[0].querySelector('.CheckWithTextControl'));

                    expect(rbCheckWithTextControl.attr('text-key')).toEqual('description');
                });
            });

        });

    });
});
