define([
    'components/rb-user'
], function (rbUser) {
    describe('rb-user', function () {

        var $scope,
            $compile,
            _username = 'test@test.com',
            _logoutfunction = function () {
                return true;
            },
            template = '<rb-user username="username" ' +
                'logoutfunction="logoutfunction()">Sign out</rb-user>';

        beforeEach(angular.mock.module('rb-user'));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;
            $scope.username = _username;
            $scope.logoutfunction = _logoutfunction;
        }));

        it('should convert attributes on a rb-user to attributes on the generated user',
            function () {
                var user = $compile('<rb-user anyattr any-attr></rb-user>')($scope);

                $scope.$apply();
                expect(user[0].hasAttribute('anyattr')).toBe(true);
                expect(user[0].hasAttribute('any-attr')).toBe(true);
            });

        describe('rendering', function () {

            it('should render with a "div" tagname', function () {
                var user = angular.element(template),
                    element = $compile(user)($scope);

                $scope.$apply();
                expect(element[0].tagName.toLowerCase()).toEqual('div');
            });

            it('should be able to render a text for the logout link', function () {
                var user = angular.element(template),
                    element = $compile(user)($scope);

                $scope.$apply();
                expect(element.html()).toContain('Sign out');
            });

            it('should be able to render a text for the username', function () {
                var user = angular.element(template),
                    element = $compile(user)($scope);

                $scope.$apply();
                expect(element.html()).toContain(_username);
            });

            it('should attach a logoutfunction to the logout text', function () {
                var user = angular.element(template),
                    element = $compile(user)($scope),
                    expectedElement = '<a class="User-itemInner" ng-click="logoutfunction()"';

                $scope.$apply();
                expect(element.html()).toContain(expectedElement);
            });

        });
    });
});