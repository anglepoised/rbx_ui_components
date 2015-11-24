define([
    'ui-components/rb-text-control',
    './rb-text-control-number.tpl.html'
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

            element = $compile(template)($scope);
            $scope.$digest();

            // Need to get isolated scope on first child of <form>, else it's undefined since form is not a directive
            isolatedScope = angular.element(element.children()[0]).isolateScope();
            isolatedScope.$digest();
        }));

        describe('root element', function () {
            it('should have the TextControl--number class', function () {
                expect(element.find('div').hasClass('TextControl--number')).toBe(true);
            });
        });

        describe('number validation', function () {

            describe('message', function () {
                it('should show when number invalid after touch', function () {

                    // Have to force an error since angular blocks entering invalid inputs to model
                    $scope.testForm.rating.$touched = true;
                    $scope.testForm.rating.$error.number = true;

                    $scope.$digest();

                    // Get validation message
                    element = angular.element(element[0].querySelector('.TextControl-message.is-invalid'));

                    expect(element.html()).toContain('Please enter a valid number.');
                });
            });

            // NB can only test accepts as angular blocks non-numerical input at the model level
            describe('accepts', function () {
                it('numberic characters', function () {
                    recompile({'data': {'rating': 5}});

                    expect($scope.testForm.$invalid).toBe(false);
                });
            });

        });

    });
});
