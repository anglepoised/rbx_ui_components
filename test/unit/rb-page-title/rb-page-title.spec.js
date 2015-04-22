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

        describe('back to parent', function () {
            it('should be set when setting the text and the state', function () {
                var pageTitle = angular.element(template),
                    element;

                pageTitle.attr('back-text', 'Back somewhere');
                pageTitle.attr('back-sref', 'back');

                element = $compile(pageTitle)($scope);

                $scope.$apply();

                expect(element.html()).toContain('Back somewhere');
            });

            // Ensure both text and sref is required for back to display
            it('should not be set when missing the text', function () {
                var pageTitle = angular.element(template),
                    element;

                pageTitle.attr('back-sref', 'back');

                element = $compile(pageTitle)($scope);

                $scope.$apply();

                expect(element.find('a').length).toBe(0);
            });

            it('should not be set when missing the text', function () {
                var pageTitle = angular.element(template),
                    element;

                pageTitle.attr('back-text', 'Back somewhere');

                element = $compile(pageTitle)($scope);

                $scope.$apply();

                expect(element.html()).not.toContain('Back somewhere');
            });
        });

    });
});
