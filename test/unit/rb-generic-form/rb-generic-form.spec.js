define([
    'ui-components/rb-generic-form'
], function (rbGenericForm) {
    describe('rb-generic-form', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            element,
            compileTemplate;

        beforeEach(angular.mock.module(rbGenericForm.name));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $rootScope = _$rootScope_;
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;

            // Compile directive, apply scope and fetch new isolated scope
            compileTemplate = function (template) {
                element = $compile(template)($scope);
                $scope.$apply();
                isolatedScope = element.isolateScope();
            };
        }));

        describe('compiled template', function () {
            it('should have the correct SUIT class "GenericForm"', function () {
                compileTemplate('<rb-generic-form></rb-generic-form>');
                expect(element.hasClass('GenericForm')).toBe(true);
            });

            it('should transclude content', function () {
                compileTemplate('<rb-generic-form>hello</rb-generic-form>');
                expect(element.html()).toContain('hello');
            });

            it('should contain "Required Field" when hasRequiredFields is true', function () {
                compileTemplate('<rb-generic-form has-required-fields="true"></rb-generic-form>');
                expect(element.html()).toContain('Required Field');
            });

            it('should not contain "Required Field" when hasRequiredFields is false', function () {
                compileTemplate('<rb-generic-form has-required-fields="false"></rb-generic-form>');
                expect(element.html()).not.toContain('Required Field');
            });

            it('should not contain "Required Field" when hasRequiredFields is not present', function () {
                compileTemplate('<rb-generic-form></rb-generic-form>');
                expect(element.html()).not.toContain('Required Field');
            });
        });

    });
});
