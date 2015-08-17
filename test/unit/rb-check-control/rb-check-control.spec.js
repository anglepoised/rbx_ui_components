define([
    'ui-components/rb-check-control'
], function (rbCheckControl) {
    describe('rb-check-control', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            element,
            compileTemplate,
            ngModel = [
                {
                    label: 'check One',
                    value: 'one'
                },
                {
                    label: 'check Two',
                    value: 'two'
                }
            ];

        beforeEach(angular.mock.module(rbCheckControl.name));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $rootScope = _$rootScope_;
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;

            // Compile directive, apply scope and fetch new isolated scope
            compileTemplate = function (template) {
                $scope.ngModel = ngModel;
                element = $compile(template)($scope);
                $scope.$apply();
                isolatedScope = element.isolateScope();
            };
        }));

        it('should render a single input & label', function () {
            compileTemplate('<rb-check-control name="check-group"></rb-check-control>');

            expect(element.find('input').length).toBe(1);
            expect(element.find('label').length).toBe(1);
        });

        describe('label attribute', function () {
            it('should take label from attribute', function () {
                compileTemplate('<rb-check-control label="Check label"></rb-check-control>');

                var label = angular.element(element.find('label')[0]);

                expect(label.text()).toContain('Check label');
            });
        });

        it('should have a name attribute', function () {
            compileTemplate('<rb-check-control name="check-group"></rb-check-control>');

            var check = element.find('input');

            expect(check[0].name).toBe('check-group');
        });

        it('should have the correct value assigned', function () {
            compileTemplate('<rb-check-control value="one"></rb-check-control>');

            var check = element.find('input');

            expect(check[0].value).toBe('one');
        });

        describe('is required', function () {
            it('should not be there by default', function () {
                compileTemplate('<rb-check-control></rb-check-control>');

                var check = element.find('input');

                expect(check[0].hasAttribute('required')).toBe(false);
            });

            it('should be applied to all check inputs', function () {
                compileTemplate('<rb-check-control is-required="true"></rb-check-control>');

                var check = element.find('input');

                expect(check[0].hasAttribute('required')).toBe(true);
            });
        });

        describe('disabled', function () {
            it('should enabled by default', function () {
                compileTemplate('<rb-check-control></rb-check-control>');

                var check = element.find('input');

                expect(check[0].hasAttribute('disabled')).toBe(false);
            });

            it('should disable all check inputs', function () {
                compileTemplate('<rb-check-control is-disabled="true"></rb-check-control>');

                var check = element.find('input');

                expect(check[0].hasAttribute('disabled')).toBe(true);
            });
        });

        describe('icon attribute', function () {
            it('should add icon modifier to classes and display icon if passed', function () {
                compileTemplate('<rb-check-control icon="mediaCentre"></rb-check-control>');

                var label = element.find('label'),
                    icon = label.find('div');
                console.log(icon);
                expect(icon.hasClass('CheckControl-icon--mediaCentre')).toBe(true);
                expect(icon.length).toBe(1);
            });
        });
    });
});
