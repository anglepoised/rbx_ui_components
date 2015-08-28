define([
    'ui-components/rg-header'
], function (rgHeader) {
    describe('rg-header', function () {

        var $scope,
            $compile,
            template = '<rg-header></rg-header>';

        beforeEach(angular.mock.module(rgHeader.name));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;
        }));

        it('should convert attributes on a rg-header to attributes on the generated page header',
            function () {
                var pageHeader = $compile('<rg-header anyattr any-attr></rg-header>')($scope);

                $scope.$apply();
                expect(pageHeader[0].hasAttribute('anyattr')).toBe(true);
                expect(pageHeader[0].hasAttribute('any-attr')).toBe(true);
            });

        describe('rendering', function () {

            it('should render with a "div" tagname', function () {
                var pageHeader = angular.element(template),
                    element = $compile(pageHeader)($scope);

                $scope.$apply();
                expect(element[0].tagName.toLowerCase()).toEqual('div');
            });

        });
    });
});
