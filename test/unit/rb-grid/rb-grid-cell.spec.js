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

        describe('isolated scope', function () {
            it('should accept the expected attributes', function () {
                compileTemplate('<rb-grid-cell size="1of2"></rb-grid-cell>');
                expect(isolatedScope.size).toEqual('1of2');
            });
        });

        describe('compiled template', function () {
            it('should render with the expected SUIT class', function () {
                compileTemplate('<rb-grid-cell></rb-grid-cell>');
                expect(element.hasClass('Grid-cell')).toBe(true);
            });

            it('should transclude content', function () {
                compileTemplate('<rb-grid-cell>TEST</rb-grid-cell>');
                expect(element.text()).toBe('TEST');
            });

            describe('size `attr`', function () {
                it('should set the correct helper class for size=`1of2`', function () {
                    compileTemplate('<rb-grid-cell size="1of2"></rb-grid-cell>');
                    expect(element.hasClass('u-size1of2')).toBe(true);
                });

                it('should set the correct helper class for size=`1of3`', function () {
                    compileTemplate('<rb-grid-cell size="1of3"></rb-grid-cell>');
                    expect(element.hasClass('u-size1of3')).toBe(true);
                });

                it('should set the correct helper class for size=`2of3`', function () {
                    compileTemplate('<rb-grid-cell size="2of3"></rb-grid-cell>');
                    expect(element.hasClass('u-size2of3')).toBe(true);
                });

                it('should set the correct helper class for size=`1of4`', function () {
                    compileTemplate('<rb-grid-cell size="1of4"></rb-grid-cell>');
                    expect(element.hasClass('u-size1of4')).toBe(true);
                });

                it('should set the correct helper class for size=`3of4`', function () {
                    compileTemplate('<rb-grid-cell size="3of4"></rb-grid-cell>');
                    expect(element.hasClass('u-size3of4')).toBe(true);
                });

                it('should not set a helper class for other input', function () {
                    compileTemplate('<rb-grid-cell size="6of7"></rb-grid-cell>');
                    expect(element.hasClass('u-size6of7')).not.toBe(true);
                });
            });

        });

    });
});
