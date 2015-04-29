define([
    'components/rb-grid'
], function (rbGridCell) {
    describe('rb-grid-cell', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            element,
            compileTemplate;

        beforeEach(angular.mock.module(rbGridCell.name));

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

        describe('rendering', function () {
            it('should render with class and transclude', function () {
                compileTemplate('<rb-grid-cell>TEST</rb-grid-cell>');

                expect(element.hasClass('Grid-cell')).toBe(true);
                expect(element.text()).toBe('TEST');
            });
        });

    });
});
