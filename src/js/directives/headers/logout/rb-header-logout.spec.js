describe('rb-header-logout', function () {

    var $scope,
        $compile,
        _username = 'test@test.com',
        _logoutfunction = function () {
            return true;
        },
        template = '<rb-header-logout username="username" ' +
            'logoutfunction="logoutfunction()">Sign out</rb-header-logout>';

    beforeEach(module('headers/logout/rb-header-logout.tpl.html',
        'directives.headers.logout.rb-header-logout'
    ));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $scope = _$rootScope_.$new({});
        $compile = _$compile_;
        $scope.username = _username;
        $scope.logoutfunction = _logoutfunction;
    }));

    it('should convert attributes on a rb-header-logout to attributes on the generated header-logout',
        function () {
            var headerLogout = $compile('<rb-header-logout anyattr any-attr></rb-header-logout>')($scope);

            $scope.$apply();
            expect(headerLogout[0].hasAttribute('anyattr')).toBe(true);
            expect(headerLogout[0].hasAttribute('any-attr')).toBe(true);
        });

    describe('rendering', function () {

        it('should render with a "div" tagname', function () {
            var headerLogout = angular.element(template),
                element = $compile(headerLogout)($scope);

            $scope.$apply();
            expect(element[0].tagName.toLowerCase()).toEqual('div');
        });

        it('should be able to render a text for the logout link', function () {
            var headerLogout = angular.element(template),
                element = $compile(headerLogout)($scope);

            $scope.$apply();
            expect(element.html()).toContain('Sign out');
        });

        it('should be able to render a text for the username', function () {
            var headerLogout = angular.element(template),
                element = $compile(headerLogout)($scope);

            $scope.$apply();
            expect(element.html()).toContain(_username);
        });

        it('should attach a logoutfunction to the logout text', function () {
            var headerLogout = angular.element(template),
                element = $compile(headerLogout)($scope),
                expectedElement = '<a class="User-itemInner" ng-click="logoutfunction()"';

            $scope.$apply();
            expect(element.html()).toContain(expectedElement);
        });

    });
});
