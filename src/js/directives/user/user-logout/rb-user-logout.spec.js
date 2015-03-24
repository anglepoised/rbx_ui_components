describe('rb-user-logout', function () {

    var $scope,
        $compile,
        _username = 'test@test.com',
        _logoutfunction = function () {
            return true;
        },
        template = '<rb-user-logout username="username" ' +
            'logoutfunction="logoutfunction()">Sign out</rb-user-logout>';

    beforeEach(module('user/user-logout/rb-user-logout.tpl.html',
        'directives.user.user-logout.rb-user-logout'
    ));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $scope = _$rootScope_.$new({});
        $compile = _$compile_;
        $scope.username = _username;
        $scope.logoutfunction = _logoutfunction;
    }));

    it('should convert attributes on a rb-user-logout to attributes on the generated user-logout',
        function () {
            var userLogout = $compile('<rb-user-logout anyattr any-attr></rb-user-logout>')($scope);

            $scope.$apply();
            expect(userLogout[0].hasAttribute('anyattr')).toBe(true);
            expect(userLogout[0].hasAttribute('any-attr')).toBe(true);
        });

    describe('rendering', function () {

        it('should render with a "div" tagname', function () {
            var userLogout = angular.element(template),
                element = $compile(userLogout)($scope);

            $scope.$apply();
            expect(element[0].tagName.toLowerCase()).toEqual('div');
        });

        it('should be able to render a text for the logout link', function () {
            var userLogout = angular.element(template),
                element = $compile(userLogout)($scope);

            $scope.$apply();
            expect(element.html()).toContain('Sign out');
        });

        it('should be able to render a text for the username', function () {
            var userLogout = angular.element(template),
                element = $compile(userLogout)($scope);

            $scope.$apply();
            expect(element.html()).toContain(_username);
        });

        it('should attach a logoutfunction to the logout text', function () {
            var userLogout = angular.element(template),
                element = $compile(userLogout)($scope),
                expectedElement = '<a class="User-itemInner" ng-click="logoutfunction()"';

            $scope.$apply();
            expect(element.html()).toContain(expectedElement);
        });

    });
});
