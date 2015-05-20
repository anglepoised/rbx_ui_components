define([
    'components/rb-fieldset'
], function (rbFieldset) {
    describe('rb-fieldset', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            element,
            compileTemplate;

        beforeEach(angular.mock.module(rbFieldset.name));

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

        it('should add a title to the component', function () {
            var bodyText;
            compileTemplate('<rb-fieldset title="Default Text"></rb-fieldset>');

            bodyText = element[0].getElementsByClassName('Fieldset-title');

            expect(angular.element(bodyText).html()).toContain('Default Text');
        });

        it('should add content to the body of the component', function () {
            var bodyText;
            compileTemplate('<rb-fieldset title="Default Text">Some content</rb-fieldset>');

            bodyText = element[0].getElementsByClassName('Fieldset-body');

            expect(angular.element(bodyText).html()).toContain('Some content');
        });

        describe('types', function () {
            it('should not register an arbituary type', function () {
                compileTemplate('<rb-fieldset title="Default Text" type="barneyStinson"></rb-fieldset>');

                expect(element.hasClass('Fieldset--barneyStinson')).toBeFalsy();
            });

            it('should use the additional information type', function () {
                compileTemplate('<rb-fieldset title="Default Text" type="additionalInfo"></rb-fieldset>');

                expect(element.hasClass('Fieldset--additionalInfo')).toBeTruthy();
            });

            it('should use the goals type', function () {
                compileTemplate('<rb-fieldset title="Default Text" type="goals"></rb-fieldset>');

                expect(element.hasClass('Fieldset--goals')).toBeTruthy();
            });

            it('should use the campaign basics type', function () {
                compileTemplate('<rb-fieldset title="Default Text" type="campaignBasics"></rb-fieldset>');

                expect(element.hasClass('Fieldset--campaignBasics')).toBeTruthy();
            });

            it('should use the finance type', function () {
                compileTemplate('<rb-fieldset title="Default Text" type="finance"></rb-fieldset>');

                expect(element.hasClass('Fieldset--finance')).toBeTruthy();
            });
        });
    });
});
