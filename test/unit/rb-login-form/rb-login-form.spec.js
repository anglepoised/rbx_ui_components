define([
    'components/rb-button',
    'components/rb-icon',
    'components/rb-login-form',
    'components/rb-text-control',
    'html!./rb-login-form.tpl.html'
], function (rbButton, rbIcon, rbLoginForm, rbTextControl, template) {
    describe('rb-login-form', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            textControl,
            element,
            recompile;

        // Recompile directive after updating $scope
        recompile = function (scopeChanges) {
            angular.extend($scope, scopeChanges);
            element = $compile(template)($scope);
            $scope.$apply();
        };

        beforeEach(angular.mock.module('rb-button'));
        beforeEach(angular.mock.module('rb-icon'));
        beforeEach(angular.mock.module('rb-login-form'));
        beforeEach(angular.mock.module('rb-text-control'));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $rootScope = _$rootScope_;
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;

            element = $compile(template)($scope);
            $scope.$digest();

            isolatedScope = element.isolateScope();
            isolatedScope.$digest();
        }));

        describe('icon', function () {
            it('should be set by the icon attr', function () {
                expect(element.html()).toContain('Icon--white-alabaster-175-logo-rockabox');
            });
        });

        describe('email input', function () {
            it('should bind to email model', function () {
                recompile({email: 'test@test.com'});
                expect(element.find('input')[0].value).toBe('test@test.com');
            });
        });

        describe('password input', function () {
            it('should bind to password model', function () {
                recompile({password: 'test'});
                expect(element.find('input')[1].value).toBe('test');
            });
        });

        describe('login button', function () {
            it('should be disabled when form is invalid', function () {
                recompile({
                    email: 'test@test.',
                    password: 'test'
                });
                expect(element.find('button').attr('disabled')).toBe('disabled');
            });

            it('should not be disabled when form is valid', function () {
                recompile({
                    email: 'test@test.com',
                    password: 'test'
                });
                expect(element.find('button').attr('disabled')).toBe(undefined);
            });

            it('should fire the onLogin method when form valid and clicked', function () {
                recompile({
                    email: 'test@test.com',
                    password: 'test',
                    login: function () {
                        return false;
                    }
                });

                spyOn($scope, 'login');
                element.find('button')[0].click();
                expect($scope.login).toHaveBeenCalled();
            });

        });

    });
});
