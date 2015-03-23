describe('rb-header-nav-bar', function () {

    var $scope,
        $compile,
        _options = [
            {'id': '31', 'text': 'Option 1'},
            {'id': '37', 'text': 'Option 2'},
            {'id': '41', 'text': 'Option 3'}
        ],
        _clickfunction = function (id) {
            return id;
        },
        _isactivefunction = function (id) {
            return true;
        },
        template = '<rb-header-nav-bar options="options" clickfunction="clickfunction(id)" ' +
            ' isactivefunction="isactivefunction(id)"></rb-header-nav-bar>';

    beforeEach(module('headers/nav-bar/rb-header-nav-bar.tpl.html',
        'directives.headers.nav-bar.rb-header-nav-bar'
    ));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $scope = _$rootScope_.$new({});
        $compile = _$compile_;
        $scope.options = _options;
        $scope.clickfunction = _clickfunction;
        $scope.isactivefunction = _isactivefunction;
    }));

    it('should convert attributes on a rb-header-nav-bar to attributes on the generated nav bar',
        function () {
            var navBar = $compile('<rb-header-nav-bar anyattr any-attr></rb-header-nav-bar>')($scope);

            $scope.$apply();
            expect(navBar[0].hasAttribute('anyattr')).toBe(true);
            expect(navBar[0].hasAttribute('any-attr')).toBe(true);
        });

    describe('rendering', function () {

        it('should render with a "div" tagname', function () {
            var navBar = angular.element(template),
                element = $compile(navBar)($scope);

            $scope.$apply();
            expect(element[0].tagName.toLowerCase()).toEqual('div');
        });

        it('should place navigation options in the navigation bar', function () {
            var navBar = angular.element(template),
                element = $compile(navBar)($scope);

            $scope.$apply();
            expect(element.find('a').length).toBe(3);
        });

        it('should attach a clickfunction to the navigation options', function () {
            var navBar = angular.element(template),
                element = $compile(navBar)($scope),
                options;

            $scope.$apply();
            options = angular.element(element.find('a'));
            expect(options[0].outerHTML).toContain('ng-click="clickfunction(');
        });

        it('should attach an isactivefunction to the navigation options', function () {
            var navBar = angular.element(template),
                element = $compile(navBar)($scope),
                options;

            $scope.$apply();
            options = angular.element(element.find('a'));
            expect(options[0].outerHTML).toContain('isactivefunction(');
        });

    });
});
