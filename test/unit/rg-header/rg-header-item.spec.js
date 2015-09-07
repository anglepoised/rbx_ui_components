define([
    'ui-components/rg-header',
    'angular-ui-router'
], function (rgHeader, uiRouter) {
    describe('rg-header-item', function () {

        var $scope,
            $compile,
            compileTemplate;

        beforeEach(angular.mock.module(rgHeader.name));
        beforeEach(angular.mock.module('ui.router'));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;
            compileTemplate = function (template) {
                element = $compile(template)($scope);
                $scope.$apply();
                isolatedScope = element.isolateScope();
            };
        }));

        it('should contain label text',
            function () {
                compileTemplate('<rg-header-item label="test" rg-ui-sref="test"></rg-header-item>');
                expect(element.html().indexOf('test') !== -1).toBe(true);
                expect(element.html().indexOf('wrong') !== -1).toBe(false);
            });

        it('should contain a ui-sref link',
            function () {
                compileTemplate('<rg-header-item label="test" rg-ui-sref="test"></rg-header-item>');
                expect(element.find('a')[0].hasAttribute('ui-sref')).toBe(true);
                expect(element.find('a')[0].hasAttribute('fake-sref')).toBe(false);
            });

    });
});
