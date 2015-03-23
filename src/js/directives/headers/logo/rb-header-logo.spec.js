describe('rb-header-logo', function () {

    var $scope,
        $compile,
        _logoicon = 'logoicon',
        _clickfunction = function (id) {
            return id;
        },
        template = '<rb-header-logo logoicon="logoicon" ' +
            'clickfunction="clickfunction(id)">Rockabox</rb-header-logo>';

    beforeEach(module('headers/logo/rb-header-logo.tpl.html',
        'directives.headers.logo.rb-header-logo'
    ));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $scope = _$rootScope_.$new({});
        $compile = _$compile_;
        $scope.logoicon = _logoicon;
        $scope.clickfunction = _clickfunction;
    }));

    it('should convert attributes on a rb-header-logo to attributes on the generated header-logo',
        function () {
            var headerLogo = $compile('<rb-header-logo anyattr any-attr></rb-header-logo>')($scope);

            $scope.$apply();
            expect(headerLogo[0].hasAttribute('anyattr')).toBe(true);
            expect(headerLogo[0].hasAttribute('any-attr')).toBe(true);
        });

    describe('rendering', function () {

        it('should render with an "a" tagname', function () {
            var headerLogo = angular.element(template),
                element = $compile(headerLogo)($scope);

            $scope.$apply();
            expect(element[0].tagName.toLowerCase()).toEqual('a');
        });

        it('should be able to render a text for the logo', function () {
            var headerLogo = angular.element(template),
                element = $compile(headerLogo)($scope);

            $scope.$apply();
            expect(element.html()).toContain('Rockabox');
        });

        it('should attach an icon class', function () {
            var headerLogo = angular.element(template),
                element = $compile(headerLogo)($scope);

            $scope.$apply();
            expect(element.html()).toContain('Icon Icon--logoicon');
        });

        it('should attach a clickfunction to the logo', function () {
            var headerLogo = angular.element(template),
                element = $compile(headerLogo)($scope);

            $scope.$apply();
            expect(element[0].hasAttribute('ng-click')).toBe(true);
            expect(element.attr('ng-click')).toEqual('clickfunction()');
        });

    });
});
