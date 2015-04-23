define([
    'components/rb-form-message',
    'html!./rb-form-message.tpl.html'
], function (rbFormMessage, template) {
    describe('rb-form-message', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            element,
            recompile;

        // Recompile directive after updating $scope
        recompile = function (scopeChanges) {
            angular.extend($scope, scopeChanges);
            element = $compile(template)($scope);
            $scope.$apply();
        };

        beforeEach(angular.mock.module(rbFormMessage.name));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $rootScope = _$rootScope_;
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;

            // Use scope variables to dynamically modify test template
            $scope.data = {};

            element = $compile(template)($scope);
            $scope.$digest();
        }));

        describe('', function () {
            it('should ', function () {
            });
        });

    });
});
