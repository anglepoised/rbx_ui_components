define([
    'ui-components/rb-text-control',
    './rb-text-control-max-digits.tpl.html'
], function (rbTextControl, template) {
    describe('rb-text-control', function () {

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

        beforeEach(angular.mock.module('rb-text-control'));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $rootScope = _$rootScope_;
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;

            // Use scope variables to dynamically modify test template
            $scope.data = {};
            $scope.isRequired = true;

            element = $compile(template)($scope);
            $scope.$digest();

            // Need to get isolated scope on first child of <form>, else it's undefined since form is not a directive
            isolatedScope = angular.element(element.children()[0]).isolateScope();
            isolatedScope.$digest();
        }));

        describe('Max Digits', function () {

            it('should have an error when max digits is exceeded', function () {
                // Put error string into a var because otherwise the line length is over
                // 120 char and automatically fails all the tests
                var errorString = 'Ensure that there are no more than 6 digits before the decimal point.';
                recompile({'data': {'money': 1234567.00}});
                element.find('input').triggerHandler('focus');
                element.find('input').triggerHandler('blur');
                expect(element.html()).toContain(errorString);
            });

            it('should have no errors when max digits is not exceeded', function () {
                recompile({'data': {'money': 123456.00}});
                element.find('input').triggerHandler('focus');
                element.find('input').triggerHandler('blur');
                var errorDiv = angular.element(element[0].querySelectorAll('.is-invalid'));
                expect(element.hasClass('ng-valid-too-many-digits')).toBe(true);
                expect(errorDiv.text() === '').toBe(true);
            });

        });

    });

});
