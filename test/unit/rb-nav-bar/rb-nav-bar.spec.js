define([
    'components/rb-nav-bar'
], function (rbNavBar) {
    describe('rb-nav-bar', function () {

        var $scope,
            $compile,
            _options = [
                {'text': 'Option 1'},
                {'text': 'Option 2', 'state': 'test-state'},
                {'text': 'Option 3', 'url': 'http://example.com'}
            ],
            template = '<rb-nav-bar options="options"></rb-nav-bar>';

        beforeEach(angular.mock.module(rbNavBar.name));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;
            $scope.options = _options;
        }));

        it('should convert attributes on a rb-nav-bar to attributes on the generated nav bar',
            function () {
                var navBar = $compile('<rb-nav-bar anyattr any-attr></rb-nav-bar>')($scope);

                $scope.$apply();
                expect(navBar[0].hasAttribute('anyattr')).toBe(true);
                expect(navBar[0].hasAttribute('any-attr')).toBe(true);
            });

        describe('rendering', function () {

            it('should render with a "nav" tagname', function () {
                var navBar = angular.element(template),
                    element = $compile(navBar)($scope);

                $scope.$apply();
                expect(element[0].tagName.toLowerCase()).toEqual('nav');
            });

            it('should place navigation options in the navigation bar', function () {
                var navBar = angular.element(template),
                    element = $compile(navBar)($scope);

                $scope.$apply();
                expect(element.find('a').length).toBe(3);
            });

            it('should set ui-sref if option has a state', function () {
                var navBar = angular.element(template),
                    element = $compile(navBar)($scope),
                    options;

                $scope.$apply();
                options = angular.element(element.find('a'));
                expect(angular.element(options[1]).attr('ui-sref')).toBe('test-state');
            });

            it('should set ui-sref if option has a state', function () {
                var navBar = angular.element(template),
                    element = $compile(navBar)($scope),
                    options;

                $scope.$apply();
                options = angular.element(element.find('a'));
                expect(angular.element(options[2]).attr('href')).toBe('http://example.com');
            });
        });
    });
});
