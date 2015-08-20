define([
    'ui-components/rg-page-header'
], function (rgPageHeader) {
    describe('rg-page-header', function () {

        var $scope,
            $compile,
            template = '<rg-page-header></rg-page-header>';

        beforeEach(angular.mock.module(rgPageHeader.name));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;
        }));

        it('should convert attributes on a rg-page-header to attributes on the generated page header',
            function () {
                var pageHeader = $compile('<rg-page-header anyattr any-attr></rg-page-header>')($scope);

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
