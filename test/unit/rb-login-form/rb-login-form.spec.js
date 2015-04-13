define([
    'components/rb-login-form'
], function (rbLoginForm) {
    describe('rb-login-form', function () {

        var $scope,
            $compile,
            template = '<rb-login-form icon="white-alabaster-175-logo-rockabox" ' +
                'formname="loginForm" emailmodel="demoCtrl.email" passwordmodel="demoCtrl.password" ' +
                'loginfunction="demoCtrl.login()"></rb-login-form>';

        beforeEach(angular.mock.module(rbLoginForm.name));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;
        }));

        it('should render with a "div" tagname', function () {
            var form = angular.element(template),
                element = $compile(form)($scope);

            $scope.$apply();
            expect(element[0].tagName.toLowerCase()).toEqual('div');
        });

    });
});
