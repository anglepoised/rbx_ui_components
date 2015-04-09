define([
    'components/rb-button'
], function (rbButton) {
    describe('rb-button', function () {

        beforeEach(angular.mock.module('rb-button'));

        it('should convert attributes on a rb-button to attributes on the generated button',
            inject(function ($compile, $rootScope) {
                var button = $compile('<rb-button anyattr any-attr></rb-button>')($rootScope);

                $rootScope.$apply();
                expect(button[0].hasAttribute('anyattr')).toBe(true);
                expect(button[0].hasAttribute('any-attr')).toBe(true);
            }));

        describe('with type submit, href, ng-href or ui-sref', function () {

            it('should be a submit button if type submit attr is supplied', inject(function ($compile, $rootScope) {
                var button = angular.element('<rb-button type="submit"></rb-button>'),
                    element = $compile(button)($rootScope.$new());

                $rootScope.$apply();
                expect(element[0].tagName.toLowerCase()).toEqual('button');
                expect(element[0].hasAttribute('type')).toBe(true);
                expect(element.attr('type')).toEqual('submit');
            }));

            it('should be an anchor if href attr is supplied', inject(function ($compile, $rootScope) {
                var button = angular.element('<rb-button href="/link"></rb-button>'),
                    element = $compile(button)($rootScope.$new());

                $rootScope.$apply();
                expect(element[0].tagName.toLowerCase()).toEqual('a');
                expect(element[0].hasAttribute('href')).toBe(true);
                expect(element.attr('href')).toEqual('/link');
            }));

            it('should be an anchor if ng-href attr is supplied', inject(function ($compile, $rootScope) {
                var button = angular.element('<rb-button ng-href="/link"></rb-button>'),
                    element = $compile(button)($rootScope.$new());

                $rootScope.$apply();
                expect(element[0].tagName.toLowerCase()).toEqual('a');
                expect(element[0].hasAttribute('ng-href')).toBe(true);
                expect(element.attr('ng-href')).toEqual('/link');
            }));

            it('should be an anchor if ui-sref attr is supplied', inject(function ($compile, $rootScope) {
                var button = angular.element('<rb-button ui-sref="/link"></rb-button>'),
                    element = $compile(button)($rootScope.$new());

                $rootScope.$apply();
                expect(element[0].tagName.toLowerCase()).toEqual('a');
                expect(element[0].hasAttribute('ui-sref')).toBe(true);
                expect(element.attr('ui-sref')).toEqual('/link');
            }));

            it('should be a standard button otherwise', inject(function ($compile, $rootScope) {
                var button = angular.element('<rb-button></rb-button>'),
                    element = $compile(button)($rootScope.$new());

                $rootScope.$apply();
                expect(element[0].tagName.toLowerCase()).toEqual('button');
                expect(element[0].hasAttribute('type')).toBe(true);
                expect(element.attr('type')).toEqual('button');
            }));

        });

        describe('with size, state and block', function () {

            it('should be a large button if large size attr is supplied', inject(function ($compile, $rootScope) {
                var button = angular.element('<rb-button size="large"></rb-button>'),
                    element = $compile(button)($rootScope.$new());

                $rootScope.$apply();
                expect(button.hasClass('Button--large')).toBe(true);
            }));

            it('should be a small button if small size attr is supplied', inject(function ($compile, $rootScope) {
                var button = angular.element('<rb-button size="small"></rb-button>'),
                    element = $compile(button)($rootScope.$new());

                $rootScope.$apply();
                expect(button.hasClass('Button--small')).toBe(true);
            }));

            it('should be a full-width button if block attr is supplied', inject(function ($compile, $rootScope) {
                var button = angular.element('<rb-button block="yes"></rb-button>'),
                    element = $compile(button)($rootScope.$new());

                $rootScope.$apply();
                expect(button.hasClass('Button--block')).toBe(true);
            }));

            it('should attach a state class (positive, warning, danger) if state attr is supplied',
                inject(function ($compile, $rootScope) {
                    var button = angular.element('<rb-button state="anystate"></rb-button>'),
                        element = $compile(button)($rootScope.$new());

                    $rootScope.$apply();
                    expect(button.hasClass('Button--anystate')).toBe(true);
                }));

        });

        describe('with ng-disabled', function () {

            it('should not set a `tabindex` when used without anchor attributes',
                inject(function ($compile, $rootScope) {
                    var scope = angular.extend($rootScope.$new(), {isDisabled: true}),
                        button = angular.element('<rb-button ng-disabled="isDisabled">button</rb-button>'),
                        element = $compile(button)(scope);

                    $rootScope.$apply();
                    expect(element[0].hasAttribute('tabindex')).toBe(false);
                }));

            it('should set `tabindex == -1` when used with href', inject(function ($compile, $rootScope) {
                var scope = angular.extend($rootScope.$new(), {isDisabled: true, url: 'http://www.rockabox.com'}),
                    button = $compile('<rb-button ng-disabled="isDisabled" href="url">button</rb-button>')(scope);

                $rootScope.$apply();
                expect(button.attr('tabindex')).toBe('-1');

                $rootScope.$apply(function () {
                    scope.isDisabled = false;
                });
                expect(button.attr('tabindex')).toBe('0');
            }));

            it('should set `tabindex == -1` when used with ng-href', inject(function ($compile, $rootScope) {
                var scope = angular.extend($rootScope.$new(), {isDisabled: true, url: 'http://www.rockabox.com'}),
                    button = $compile('<rb-button ng-disabled="isDisabled" ng-href="url">button</rb-button>')(scope);

                $rootScope.$apply();
                expect(button.attr('tabindex')).toBe('-1');

                $rootScope.$apply(function () {
                    scope.isDisabled = false;
                });
                expect(button.attr('tabindex')).toBe('0');
            }));

            it('should set `tabindex == -1` when used with ui-sref', inject(function ($compile, $rootScope) {
                var scope = angular.extend($rootScope.$new(), {isDisabled: true, url: 'http://www.rockabox.com'}),
                    button = $compile('<rb-button ng-disabled="isDisabled" ui-sref="url">button</rb-button>')(scope);

                $rootScope.$apply();
                expect(button.attr('tabindex')).toBe('-1');

                $rootScope.$apply(function () {
                    scope.isDisabled = false;
                });
                expect(button.attr('tabindex')).toBe('0');
            }));
        });
    });
});
