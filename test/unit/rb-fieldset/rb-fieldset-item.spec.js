define([
    'ui-components/rb-fieldset'
], function (rbFieldset) {
    describe('rb-fieldset-item', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            element,
            compileTemplate;

        beforeEach(function () {

            angular.mock.module(rbFieldset.name);

            inject(function (_$compile_, _$rootScope_) {
                $rootScope = _$rootScope_;
                $scope = _$rootScope_.$new({});
                $compile = _$compile_;

                // Compile directive, apply scope and fetch new isolated scope
                compileTemplate = function (template) {
                    element = $compile(template)($scope);
                    $scope.$apply();
                    isolatedScope = element.isolateScope();
                };
            });
        });

        describe('rendering', function () {
            it('should have appropriate SUIT class set', function () {
                compileTemplate('<rb-fieldset-item></rb-fieldset-item>');

                expect(element.hasClass('Fieldset-item')).toBe(true);
            });

            it('should render transcluded element', function () {
                compileTemplate('<rb-fieldset-item><span>Buttons!</span></rb-fieldset-item>');

                expect(element.html()).toContain('Buttons!');
            });
        });
    });
});
