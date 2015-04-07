define([
    'components/rb-page-title'
], function (rbPageTitle) {
    describe('rb-page-title', function () {

        var $scope,
            $compile,
            template = '<rb-page-title heading="My heading" subheading="My Subheading"></rb-page-title>';

        beforeEach(angular.mock.module(rbPageTitle.name));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;
        }));

        it('should set the heading in accordance to the heading attribute', function () {
            var pageTitle = angular.element(template),
                element = $compile(pageTitle)($scope);

            $scope.$apply();

            expect(element.html()).toContain('My heading');
        });

        it('should set and show the subheading in accordance to the subheading attribute', function () {
            var pageTitle = angular.element(template),
                element = $compile(pageTitle)($scope);

            $scope.$apply();

            expect(element.html()).toContain('My Subheading');
        });

    });
});
