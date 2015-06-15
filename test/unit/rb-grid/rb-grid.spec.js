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

        describe('compiled template', function () {
            it('should contain a root element with the appropriate SUIT class', function () {
                compileTemplate('<rb-grid></rb-grid>');

                expect(element.hasClass('Grid')).toBe(true);

                // Currently no toggle for flexCells
                expect(element.hasClass('Grid--flexCells')).toBe(true);
            });

            it('should translude contents directly', function () {
                compileTemplate('<rb-grid>TEST</rb-grid>');
                expect(element.text()).toBe('TEST');
            });
        });

    });
});
