define([
    'components/rb-page-title'
], function (rbPageTitle) {
    describe('rb-page-title', function () {

        var pageTitle,
            element,
            $scope,
            $compile,
            template = '<rb-page-title heading="My heading" subheading="My Subheading"></rb-page-title>';

        beforeEach(angular.mock.module(rbPageTitle.name));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;
            pageTitle = angular.element(template);
        }));

        it('should set the heading in accordance to the heading attribute', function () {
            element = $compile(pageTitle)($scope);

            $scope.$apply();

            expect(element.html()).toContain('My heading');
        });

        it('should set and show the subheading in accordance to the subheading attribute', function () {
            element = $compile(pageTitle)($scope);

            $scope.$apply();

            expect(element.html()).toContain('My Subheading');
        });

        describe('badge', function () {
            it('should attach a badge to the page title', function () {
                var pageTitleBadgeWrapper,
                    badgeEle;

                pageTitle.attr('badge-status', 'statusFinished');

                element = $compile(pageTitle)($scope);

                $scope.$apply();

                pageTitleBadgeWrapper = element[0].getElementsByClassName('PageTitle-badge');
                badgeEle = angular.element(pageTitleBadgeWrapper).find('div')[0];

                expect(pageTitleBadgeWrapper.length).toBe(1);
                expect(angular.element(badgeEle).attr('state')).toBe('statusFinished');
            });

            it('should not attach a badge to the page title', function () {
                var pageTitleBadgeWrapper;

                element = $compile(pageTitle)($scope);

                $scope.$apply();

                pageTitleBadgeWrapper = element[0].getElementsByClassName('PageTitle-badge');

                expect(pageTitleBadgeWrapper.length).toBe(0);
            });
        });

        describe('back to parent', function () {
            it('should be set when setting the text and the state', function () {
                pageTitle.attr('back-text', 'Back somewhere');
                pageTitle.attr('back-sref', 'back');

                element = $compile(pageTitle)($scope);

                $scope.$apply();

                expect(element.html()).toContain('Back somewhere');
            });

            // Ensure both text and sref is required for back to display
            it('should not be set when missing the state ref', function () {
                pageTitle.attr('back-sref', 'back');

                element = $compile(pageTitle)($scope);

                $scope.$apply();

                expect(element.find('a').length).toBe(0);
            });

            it('should not be set when missing the text', function () {
                pageTitle.attr('back-text', 'Back somewhere');

                element = $compile(pageTitle)($scope);

                $scope.$apply();

                expect(element.html()).not.toContain('Back somewhere');
            });
        });

        describe('button', function () {
            it('should add a button to the Page title', function () {
                pageTitle.attr('button-show', true);
                pageTitle.attr('button-label', 'Some text');

                element = $compile(pageTitle)($scope);

                $scope.$apply();

                expect(element.html()).toContain('Some text');
            });

            it('should add a button section to the Page title', function () {
                var buttonEle;

                pageTitle.attr('button-show', true);
                pageTitle.attr('button-label', 'Some text');

                element = $compile(pageTitle)($scope);

                $scope.$apply();

                buttonEle = element[0].getElementsByClassName('PageTitle-button');

                expect(buttonEle.length).toBe(1);
            });

            it('should not add a button section Page title', function () {
                var buttonEle;

                element = $compile(pageTitle)($scope);

                $scope.$apply();

                buttonEle = element[0].getElementsByClassName('PageTitle-button');

                expect(buttonEle.length).toBe(0);
            });
        });
    });
});
