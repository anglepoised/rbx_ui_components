define([
    'components/rb-action-bar'
], function (rbActionBar) {
    describe('rb-action-bar', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            element,
            compileTemplate;

        beforeEach(angular.mock.module(rbActionBar.name));

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
                compileTemplate('<rb-action-bar></rb-action-bar>');
                compileTemplate(
                    '<rb-action-bar ' +
                        'cancel-action="alert(\'test\')" ' +
                        'cancel-label="Cancel" ' +
                        'column="true" ' +
                        'primary-action="alert(\'test\')" ' +
                        'primary-label="Save" ' +
                        'row="false" ' +
                    '></rb-action-bar>'
                );
                expect(isolatedScope.cancelAction).toBeDefined();
                expect(isolatedScope.cancelLabel).toBe('Cancel');
                expect(isolatedScope.column).toBe('true');
                expect(isolatedScope.primaryAction).toBeDefined();
                expect(isolatedScope.primaryLabel).toBe('Save');
                expect(isolatedScope.row).toBe('false');
            });

            describe('cancelLabel variable', function () {
                it('should default to "Cancel"', function () {
                    compileTemplate('<rb-action-bar></rb-action-bar>');
                    expect(isolatedScope.cancelLabel).toBe('Cancel');
                });
            });

            describe('column variable', function () {
                it('should default to true', function () {
                    compileTemplate('<rb-action-bar></rb-action-bar>');
                    expect(isolatedScope.column).toBe('true');
                });
            });

            describe('primaryLabel variable', function () {
                it('should default to "Submit"', function () {
                    compileTemplate('<rb-action-bar></rb-action-bar>');
                    expect(isolatedScope.primaryLabel).toBe('Submit');
                });
            });
        });

        describe('compiled template', function () {
            it('should contain a root element with the appropriate SUIT class', function () {
                compileTemplate('<rb-action-bar></rb-action-bar>');
                expect(element.hasClass('ActionBar')).toBe(true);
            });

            it('should have appropriate SUIT class set if `column` is `true`', function () {
                compileTemplate('<rb-action-bar column="true"></rb-action-bar>');
                expect(element.hasClass('ActionBar--column')).toBe(true);
            });

            it('should have appropriate SUIT class set if `row` is `true`', function () {
                compileTemplate('<rb-action-bar row="true"></rb-action-bar>');
                expect(element.hasClass('ActionBar--row')).toBe(true);
            });

            it('should contain the contents of the `message` attr', function () {
                compileTemplate('<rb-action-bar message="This is a message"></rb-action-bar>');
                expect(element.html()).toContain('This is a message');
            });

            describe('rb-button Primary Action subcomponent', function () {
                it('should be rendered', function () {
                    compileTemplate('<rb-action-bar></rb-action-bar>');
                    // First button in component. Not the cleanest approach.
                    var rbButton = angular.element(element[0].querySelectorAll('.Button')[0]);
                    expect(rbButton.length).toBe(1);
                });

                it('should have `ng-click` attr set by `primaryAction`', function () {
                    compileTemplate('<rb-action-bar primary-action="alert(\'test\')"></rb-action-bar>');
                    var rbButton = angular.element(element[0].querySelectorAll('.Button')[0]);
                    expect(rbButton.attr('ng-click')).toEqual('primaryAction()');
                });

                it('should have contents set by `primaryLabel`', function () {
                    compileTemplate('<rb-action-bar primary-label="Do something!"></rb-action-bar>');
                    var rbButton = angular.element(element[0].querySelectorAll('.Button')[0]);
                    expect(rbButton.html()).toContain('Do something!');
                });
            });

            describe('rb-button Cancel Action subcomponent', function () {
                it('should be rendered', function () {
                    compileTemplate('<rb-action-bar></rb-action-bar>');
                    // Second button in component.
                    var rbButton = angular.element(element[0].querySelectorAll('.Button')[1]);
                    expect(rbButton.length).toBe(1);
                });

                it('should have `ng-click` attr set by `cancelAction`', function () {
                    compileTemplate('<rb-action-bar cancel-action="alert(\'test\')"></rb-action-bar>');
                    var rbButton = angular.element(element[0].querySelectorAll('.Button')[1]);
                    expect(rbButton.attr('ng-click')).toEqual('cancelAction()');
                });

                it('should have contents set by `cancelLabel`', function () {
                    compileTemplate('<rb-action-bar cancel-label="Do something!"></rb-action-bar>');
                    var rbButton = angular.element(element[0].querySelectorAll('.Button')[1]);
                    expect(rbButton.html()).toContain('Do something!');
                });
            });
        });
    });
});
