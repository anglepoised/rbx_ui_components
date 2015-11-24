define([
    'ui-components/rg-text-control',
    './rg-text-control-currency.tpl.html'
], function (rgRgTextControl, template) {
    describe('rg-text-control', function () {

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

        beforeEach(angular.mock.module('rg-text-control'));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $rootScope = _$rootScope_;
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;

            // Use scope variables to dynamically modify test template
            $scope.data = {};

            element = $compile(template)($scope);
            $scope.$digest();

            // Need to get isolated scope on first child of <form>, else it's undefined since form is not a directive
            isolatedScope = angular.element(element.children()[0]).isolateScope();
            isolatedScope.$digest();
        }));

        describe('root element', function () {
            it('should have the RgTextControl--currency class', function () {
                expect(element.find('div').hasClass('RgTextControl--currency')).toBe(true);
            });
        });

        describe('currency validation', function () {

            describe('message', function () {
                it('should show when currency invalid after touch', function () {

                    // Invalid currency
                    recompile({'data': {'currency': 12.12121}});

                    // Focus and unfocus the input field to trigger validation messages
                    element.find('input').triggerHandler('focus');
                    element.find('input').triggerHandler('blur');

                    // Get validation message
                    element = angular.element(element[0].querySelector('.RgTextControl-message.is-invalid'));
                    expect(element.html()).toContain('Please enter a valid monetary value.');
                });
            });

            describe('accepts', function () {
                it('should allow for a whole number', function () {
                    recompile({'data': {'currency': 102}});

                    expect($scope.testForm.$invalid).toBe(false);
                });

                it('should allow one decimal', function () {
                    recompile({'data': {'currency': 102.1}});

                    expect($scope.testForm.$invalid).toBe(false);
                });

                it('should allow two decimals', function () {
                    recompile({'data': {'currency': 102.12}});

                    expect($scope.testForm.$invalid).toBe(false);
                });
            });

            describe('rejects', function () {
                it('should not allow a decimal over 2 places', function () {
                    recompile({'data': {'currency': 102.122}});

                    expect($scope.testForm.$invalid).toBe(true);
                });
            });

        });

    });
});
