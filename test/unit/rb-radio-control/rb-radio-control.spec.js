define([
    'components/rb-radio-control'
], function (rbRadioControl) {
    describe('rb-radio-control', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            element,
            compileTemplate;

        beforeEach(angular.mock.module(rbRadioControl.name));

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

        describe('help message', function () {
            it('should show', function () {
                compileTemplate('<rb-radio-control help-message="Radio Control Help Message"></rb-radio-control>');

                var messages = element[0].getElementsByClassName('RadioControl-message');

                expect(messages.length).toBe(1);
                expect(angular.element(messages[0]).text()).toContain('Radio Control Help Message');
            });

            it('should be hidden if help-message is not specified', function () {
                compileTemplate('<rb-radio-control></rb-radio-control>');

                var messages = element[0].getElementsByClassName('RadioControl-message');

                expect(angular.element(messages[0]).hasClass('ng-hide')).toBe(true);
            });
        });

        describe('row modifier', function () {
            it('should not be applied by default', function () {
                compileTemplate('<rb-radio-control></rb-radio-control>');

                expect(angular.element(element[0]).hasClass('RadioControl--row')).toBe(false);
            });

            it('should have the RadioControl--row class', function () {
                compileTemplate('<rb-radio-control is-row=true></rb-radio-control>');

                expect(angular.element(element[0]).hasClass('RadioControl--row')).toBe(true);
            });
        });
    });
});
