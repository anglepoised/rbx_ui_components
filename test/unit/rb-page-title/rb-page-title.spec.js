define([
    'components/rb-page-title'
], function (rbPageTitle) {
    describe('rb-page-title', function () {

        var pageTitle,
            element,
            $scope,
            $compile,
            compileTemplate,
            template = '<rb-page-title heading="My heading" subheading="My Subheading"></rb-page-title>';

        beforeEach(angular.mock.module(rbPageTitle.name));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;
            pageTitle = angular.element(template);

            // Compile directive, apply scope and fetch new isolated scope
            compileTemplate = function (template) {
                element = $compile(template)($scope);
                $scope.$apply();
                isolatedScope = element.isolateScope();
            };

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

        it('should set the PageTitle--compact class if the compact attribute is `true`', function () {
            compileTemplate('<rb-page-title heading="My heading" compact="true"></rb-page-title>');
            expect(element.hasClass('PageTitle--compact')).toBe(true);
        });

        it('should not set the PageTitle--compact class if the compact attribute is `false`', function () {
            compileTemplate('<rb-page-title heading="My heading" compact="false"></rb-page-title>');
            expect(element.hasClass('PageTitle--compact')).toBe(false);
        });

        it('should not set the PageTitle--compact class by default', function () {
            compileTemplate('<rb-page-title heading="My heading"></rb-page-title>');
            expect(element.hasClass('PageTitle--compact')).toBe(false);
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

        describe('button section', function () {

            it('should render transcluded buttons', function () {
                compileTemplate('<rb-page-title><rb-button>Some button</rb-button></rb-page-title>');

                var button = angular.element(element.find('button'));
                expect(button[0].innerHTML).toContain('Some button');
            });
        });
    });
});
