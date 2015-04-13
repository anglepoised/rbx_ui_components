define([
    'components/rb-text-control',
    'html!./rb-text-control-email.tpl.html'
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

        describe('email validation', function () {

            describe('message', function () {
                it('should show when email invalid after touch', function () {

                    // Invalid email address
                    recompile({'data': {'email': 'test'}});

                    // Focus and unfocus the input field to trigger validation messages
                    element.find('input').triggerHandler('focus');
                    element.find('input').triggerHandler('blur');

                    // Get validation message
                    element = angular.element(element[0].querySelector('.TextControl-message.is-invalid'));

                    expect(element.html()).toContain('Please enter a valid email address.');
                });
            });

            describe('accepts', function () {
                it('RFC 5322 email addresses including top-level domains', function () {
                    // Valid email address
                    recompile({'data': {'email': 'test@rockabox.com'}});

                    expect($scope.testForm.$invalid).toBe(false);
                });
            });

            describe('rejects', function () {
                it('missing domains', function () {
                    // Invalid email address
                    recompile({'data': {'email': 'test@'}});

                    expect($scope.testForm.$invalid).toBe(true);
                });
                it('missing top-level domains', function () {
                    // Invalid email address
                    recompile({'data': {'email': 'test@rockabox'}});

                    expect($scope.testForm.$invalid).toBe(true);
                });
            });

        });

    });
});
