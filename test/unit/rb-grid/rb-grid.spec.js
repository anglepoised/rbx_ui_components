define([
    'components/rb-grid'
], function (rbGrid) {
    describe('rb-grid', function () {

        var $scope,
            $compile,
            textControl,
            element;

        beforeEach(angular.mock.module(rbGrid.name));

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
                compileTemplate('<rb-grid gutter="false"></rb-grid>');
                expect(isolatedScope.gutter).toBe('false');
            });

            describe('gutter variable', function () {
                it('should default to true', function () {
                    compileTemplate('<rb-grid></rb-grid>');
                    expect(isolatedScope.gutter).toBe(true);
                });
            });
        });

        describe('compiled template', function () {
            it('should contain a root element with the appropriate SUIT class', function () {
                compileTemplate('<rb-grid></rb-grid>');

                expect(element.hasClass('Grid')).toBe(true);
                expect(element.hasClass('Grid--flexCells')).toBe(true); // Currently no toggle for flexCells
            });

            it('should translude contents directly', function () {
                compileTemplate('<rb-grid>TEST</rb-grid>');
                expect(element.text()).toBe('TEST');
            });

            it('should have appropriate SUIT class set if `gutter` is `true`', function () {
                compileTemplate('<rb-grid gutter="true"></rb-grid>');
                expect(element.hasClass('Grid--gutter')).toBe(true);
            });

            it('should not have appropriate SUIT class set if `gutter` is `false`', function () {
                compileTemplate('<rb-grid gutter="false"></rb-grid>');
                expect(element.hasClass('Grid--gutter')).toBe(false);
            });
        });

    });
});
