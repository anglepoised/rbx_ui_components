define([
    'ui-components/rg-text-control',
    './rg-text-control-url.tpl.html',
    './rg-text-control-relative-url.tpl.html'
], function (rgRgTextControl, template, relativeUrlTemplate) {
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
            it('should have the RgTextControl--url class', function () {
                expect(element.find('div').hasClass('RgTextControl--url')).toBe(true);
            });
        });

        describe('URL validation', function () {

            describe('message', function () {
                it('should show when URL invalid after touch', function () {

                    // Invalid URL address
                    recompile({'data': {'url': 'test'}});

                    // Focus and unfocus the input field to trigger validation messages
                    element.find('input').triggerHandler('focus');
                    element.find('input').triggerHandler('blur');

                    // Get validation message
                    element = angular.element(element[0].querySelector('.RgTextControl-message.is-invalid'));

                    expect(element.html()).toContain('Please enter a valid URL.');
                });
            });

            describe('relative URLs', function () {
                it('should accept URLs with no protocol (optionally) when type attr is relative-url', function () {

                    // URL with no protocol
                    angular.extend($scope, {'data': {'url': '//test.com'}});
                    element = $compile(relativeUrlTemplate)($scope);
                    $scope.$apply();

                    expect($scope.testForm.$invalid).toBe(false);
                });

                it('should accept URLs with protocol (optionally) when type attr relative-url', function () {

                    // URL with protocol
                    angular.extend($scope, {'data': {'url': 'http://test.com'}});
                    element = $compile(relativeUrlTemplate)($scope);
                    $scope.$apply();

                    expect($scope.testForm.$invalid).toBe(false);
                });
            });

            describe('accepts', function () {
                it('DJANGO URLs including localhost', function () {
                    // Valid URL address
                    recompile({'data': {'url': 'http://www.scootagroup.com'}});
                    expect($scope.testForm.$invalid).toBe(false);
                    recompile({'data': {'url': 'http://localhost'}});
                    expect($scope.testForm.$invalid).toBe(false);
                });
            });
        });

    });
});
