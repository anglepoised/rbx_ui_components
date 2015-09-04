define([
    'ui-components/rg-site'
], function (rgSite) {
    describe('rg-site', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            element,
            compileTemplate;

        beforeEach(angular.mock.module(rgSite.name));

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

        describe('', function () {
            it('should ', function () {
                compileTemplate('<rg-site></rg-site>');
            });
        });

        describe('no scroll attribute on site', function () {
            it('should attach a no scroll modifier to rg-site not passed', function () {
                compileTemplate('<rg-site></rg-site>');

                expect(element.hasClass('RgSite--noScroll')).toBeFalsy();
            });

            it('should attach a no scroll modifier to rg-site passed as false', function () {
                compileTemplate('<rg-site no-scroll="false"></rg-site>');

                expect(element.hasClass('RgSite--noScroll')).toBeFalsy();
            });

            it('should attach a scroll modifier to rg-site', function () {
                compileTemplate('<rg-site no-scroll="true"></rg-site>');

                expect(element.hasClass('RgSite--noScroll')).toBeTruthy();
            });
        });
    });
});
