define([
    'components/rb-check-control'
], function (rbCheckControl) {
    describe('rb-check-control', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            element,
            compileTemplate,
            data = [
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
                $scope.data = data;
                element = $compile(template)($scope);
                $scope.$apply();
                isolatedScope = element.isolateScope();
            };
        }));

        it('should have two checkboxes', function () {
            compileTemplate('<rb-check-control data="data"></rb-check-control>');

            var check = element.find('input');

            expect(check.length).toBe(2);
            expect(check[0].type).toBe('checkbox');
            expect(check[1].type).toBe('checkbox');
        });

        it('should have a name attribute', function () {
            compileTemplate('<rb-check-control data="data" name="check-group"></rb-check-control>');

            var check = element.find('input');

            expect(check[0].name).toBe('check-group');
            expect(check[1].name).toBe('check-group');
        });

        it('should have the correct value assigned', function () {
            compileTemplate('<rb-check-control data="data"></rb-check-control>');

            var check = element.find('input');

            expect(check[0].value).toBe('one');
            expect(check[1].value).toBe('two');
        });

        describe('is required', function () {
            it('should not be there by default', function () {
                compileTemplate('<rb-check-control data="data"></rb-check-control>');

                var check = element.find('input');

                angular.forEach(check, function (value, key) {
                    expect(value.hasAttribute('required')).toBe(false);
                });
            });

            it('should be applied to all check inputs', function () {
                compileTemplate('<rb-check-control data="data" is-required=true></rb-check-control>');

                var check = element.find('input');

                angular.forEach(check, function (value, key) {
                    expect(value.hasAttribute('required')).toBe(true);
                });
            });
        });

        describe('disabled', function () {
            it('should enabled by default', function () {
                compileTemplate('<rb-check-control data="data"></rb-check-control>');

                var check = element.find('input');

                angular.forEach(check, function (value, key) {
                    expect(value.hasAttribute('disabled')).toBe(false);
                });
            });

            it('should disable all check inputs', function () {
                compileTemplate('<rb-check-control data="data" is-disabled=true></rb-check-control>');

                var check = element.find('input');

                angular.forEach(check, function (value, key) {
                    expect(value.hasAttribute('disabled')).toBe(true);
                });
            });

            it('should only disable the first check input', function () {
                data[0].disabled = true;

                compileTemplate('<rb-check-control data="data"></rb-check-control>');

                var check = element.find('input');

                expect(check[0].hasAttribute('disabled')).toBe(true);
                expect(check[1].hasAttribute('disabled')).toBe(false);
            });
        });
    });
});
