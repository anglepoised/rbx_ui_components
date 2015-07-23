define([
    'ui-components/rb-check-with-text-control'
], function (rbCheckWithTextControl) {
    describe('rb-check-with-text-control', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            element,
            compileTemplate;

        beforeEach(angular.mock.module(rbCheckWithTextControl.name));

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
                $scope.myModel = {};

                compileTemplate('<rb-check-with-text-control ' +
                    'form="form" ' +
                    'name="name" ' +
                    'label="My Label" ' +
                    'checkbox-value="some_val" ' +
                    'text-placeholder="My Placeholder" ' +
                    'ng-model="myModel" ' +
                    'checkbox-key="checkboxKey" ' +
                    'text-key="textKey"' +
                '></rb-check-with-text-control>');

                expect(angular.isDefined(isolatedScope.form)).toBe(true);
                expect(angular.isDefined(isolatedScope.name)).toBe(true);
                expect(angular.isDefined(isolatedScope.label)).toBe(true);
                expect(angular.isDefined(isolatedScope.checkboxValue)).toBe(true);
                expect(angular.isDefined(isolatedScope.textPlaceholder)).toBe(true);
                expect(angular.isDefined(isolatedScope.ngModel)).toBe(true);
                expect(angular.isDefined(isolatedScope.checkboxKey)).toBe(true);
                expect(angular.isDefined(isolatedScope.textKey)).toBe(true);
            });

            describe('`checked` variable', function () {
                it('should default to false', function () {
                    compileTemplate('<rb-check-with-text-control></rb-check-with-text-control>');
                    expect(isolatedScope.checked).toEqual(false);
                });
            });

            describe('`cachedModel` variable', function () {

                it('should default to a valid empty model when there is no ngModel', function () {
                    compileTemplate('<rb-check-with-text-control checkbox-value="my_checkbox">' +
                        '</rb-check-with-text-control>');

                    expect(isolatedScope.cachedModel).toEqual({
                        'text': '',
                        'checkbox': 'my_checkbox'
                    });
                });

                it('should default to the ngModel when there is an ngModel', function () {
                    $scope.myModel = {
                        'checkbox': 'my_checkbox',
                        'text': 'ID1, ID2'
                    };
                    compileTemplate('<rb-check-with-text-control ng-model="myModel" checkbox-value="my_checkbox">' +
                        '</rb-check-with-text-control>');

                    expect(isolatedScope.cachedModel).toEqual($scope.myModel);
                });
            });

            describe('`checkboxKey` variable', function () {
                it('should default to "checkbox"', function () {
                    compileTemplate('<rb-check-with-text-control></rb-check-with-text-control>');
                    expect(isolatedScope.checkboxKey).toBe('checkbox');
                });
            });

            describe('`textKey` variable', function () {
                it('should default to "text"', function () {
                    compileTemplate('<rb-check-with-text-control></rb-check-with-text-control>');
                    expect(isolatedScope.textKey).toBe('text');
                });
            });

            describe('`modelIsValid()` method', function () {
                it('should return `true` if we have a valid model on the scope', function () {
                    $scope.myModel = {
                        'checkbox': 'my_checkbox',
                        'text': 'ID1, ID2'
                    };
                    compileTemplate('<rb-check-with-text-control ng-model="myModel">' +
                        '</rb-check-with-text-control>');

                    expect(isolatedScope.modelIsValid()).toEqual(true);
                });

                it('should return `false` if we have an undefined model on the scope', function () {
                    compileTemplate('<rb-check-with-text-control ng-model="myModel">' +
                        '</rb-check-with-text-control>');

                    expect(isolatedScope.modelIsValid()).toEqual(false);
                });

                it('should return `false` if we have an invalid model on the scope', function () {
                    $scope.myModel = {
                        'value1': 'something'
                    };
                    compileTemplate('<rb-check-with-text-control ng-model="myModel">' +
                        '</rb-check-with-text-control>');

                    expect(isolatedScope.modelIsValid()).toEqual(false);
                });
            });

            describe('`updateCheckedOnModelChange()` method', function () {
                it('should set `checked` to `true` if the model is valid', function () {
                    compileTemplate('<rb-check-with-text-control>' +
                        '</rb-check-with-text-control>');

                    spyOn(isolatedScope, 'modelIsValid').and.returnValue(true);

                    isolatedScope.updateCheckedOnModelChange();

                    expect(isolatedScope.checked).toBe(true);
                });

                it('should set `checked` to `false` if the model is invalid', function () {
                    compileTemplate('<rb-check-with-text-control>' +
                        '</rb-check-with-text-control>');

                    spyOn(isolatedScope, 'modelIsValid').and.returnValue(false);

                    isolatedScope.updateCheckedOnModelChange();

                    expect(isolatedScope.checked).toBe(false);
                });

                // TODO Missing watcher test
            });

            describe('`updateModelOnCheckedChange()` method', function () {
                it('should set `ngModel` to the `cachedModel` if the `checked` is `true`', function () {
                    compileTemplate('<rb-check-with-text-control>' +
                        '</rb-check-with-text-control>');

                    isolatedScope.cachedModel = {
                        'checkbox': 'my_checkbox',
                        'text': 'ID1, ID2'
                    };
                    isolatedScope.checked = true;
                    isolatedScope.updateModelOnCheckedChange();

                    expect(isolatedScope.ngModel).toBe(isolatedScope.cachedModel);
                });

                it('should set `ngModel` to the `false` if the `checked` is `false`', function () {
                    compileTemplate('<rb-check-with-text-control>' +
                        '</rb-check-with-text-control>');

                    isolatedScope.checked = false;
                    isolatedScope.updateModelOnCheckedChange();

                    expect(isolatedScope.ngModel).toBe(false);

                });

                // TODO Missing watcher test
            });
        });

        describe('compiled template', function () {

            it('should contain a root element with the appropriate SUIT class', function () {
                compileTemplate('<rb-check-with-text-control></rb-check-with-text-control>');
                expect(element.hasClass('CheckWithTextControl')).toBe(true);
            });

            describe('rb-check-control subcomponent', function () {

                it('should be rendered', function () {
                    compileTemplate('<rb-check-with-text-control></rb-check-with-text-control>');

                    var rbCheckControl = angular.element(element[0].querySelector('.CheckControl'));

                    expect(rbCheckControl.length).toBe(1);
                });

                it('should have `label` attr set by `label`', function () {
                    compileTemplate('<rb-check-with-text-control label="Test Label"></rb-check-with-text-control>');

                    var rbCheckControl = angular.element(element[0].querySelector('.CheckControl'));

                    expect(rbCheckControl.attr('label')).toEqual('Test Label');
                });

                it('should have `form` attr set by `form`', function () {
                    $scope.myForm = {};

                    compileTemplate('<rb-check-with-text-control form="myForm"></rb-check-with-text-control>');

                    var rbCheckControl = angular.element(element[0].querySelector('.CheckControl'));

                    expect(rbCheckControl.attr('form')).toEqual('form');
                });

                it('should have `name` attr set by `name` with _checkbox suffix', function () {
                    compileTemplate('<rb-check-with-text-control name="some_val"></rb-check-with-text-control>');

                    var rbCheckControl = angular.element(element[0].querySelector('.CheckControl'));

                    expect(rbCheckControl.attr('name')).toEqual('some_val_checkbox');
                });

                it('should have `ng-model` attr set by `checked`', function () {
                    compileTemplate('<rb-check-with-text-control></rb-check-with-text-control>');

                    var rbCheckControl = angular.element(element[0].querySelector('.CheckControl'));

                    expect(rbCheckControl.attr('ng-model')).toEqual('checked');
                });
            });

            describe('rb-text-control subcomponent', function () {

                it('should be rendered', function () {
                    compileTemplate('<rb-check-with-text-control></rb-check-with-text-control>');

                    var rbTextControl = angular.element(element[0].querySelector('.TextControl'));

                    expect(rbTextControl.length).toBe(1);
                });

                it('should have `placeholder` attr set by `text-placeholder`', function () {
                    compileTemplate('<rb-check-with-text-control text-placeholder="Test Placeholder">' +
                        '</rb-check-with-text-control>');

                    var rbTextControl = angular.element(element[0].querySelector('.TextControl'));

                    expect(rbTextControl.attr('placeholder')).toEqual('Test Placeholder');
                });

                it('should have `form` attr set by `form`', function () {
                    compileTemplate('<rb-check-with-text-control form="myForm">' +
                        '</rb-check-with-text-control>');

                    var rbTextControl = angular.element(element[0].querySelector('.TextControl'));

                    expect(rbTextControl.attr('form')).toEqual('form');
                });

                it('should have `name` attr set by `name` with _text suffix', function () {
                    compileTemplate('<rb-check-with-text-control name="my_name">' +
                        '</rb-check-with-text-control>');

                    var rbTextControl = angular.element(element[0].querySelector('.TextControl'));

                    expect(rbTextControl.attr('name')).toEqual('my_name_text');
                });

                it('should have `ng-model` attr set by `ngModel[textKey]`', function () {
                    compileTemplate('<rb-check-with-text-control>' +
                        '</rb-check-with-text-control>');

                    var rbTextControl = angular.element(element[0].querySelector('.TextControl'));

                    expect(rbTextControl.attr('ng-model')).toEqual('ngModel[textKey]');
                });

                it('should have `ng-show` attr set by `checked`', function () {
                    compileTemplate('<rb-check-with-text-control>' +
                        '</rb-check-with-text-control>');

                    var rbTextControl = angular.element(element[0].querySelector('.TextControl'));

                    expect(rbTextControl.attr('ng-show')).toEqual('checked');
                });
            });

        });

    });
});
