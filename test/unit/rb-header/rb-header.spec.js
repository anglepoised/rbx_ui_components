define([
    'components/rb-header'
], function (rbHeader) {
    describe('rb-header', function () {

        var $scope,
            $compile,
            template = '<rb-header></rb-header>';

        beforeEach(angular.mock.module('rb-header'));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;
        }));

        it('should convert attributes on a rb-header to attributes on the generated header',
            function () {
                var header = $compile('<rb-header anyattr any-attr></rb-header>')($scope);

                $scope.$apply();
                expect(header[0].hasAttribute('anyattr')).toBe(true);
                expect(header[0].hasAttribute('any-attr')).toBe(true);
            });

        describe('rendering', function () {

            it('should render with a "header" tagname', function () {
                var header = angular.element(template),
                    element = $compile(header)($scope);

                $scope.$apply();
                expect(element[0].tagName.toLowerCase()).toEqual('header');
            });

        });
    });
});