define([
    'components/rb-form-message'
], function (rbFormMessage, template) {
    describe('rb-form-message', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            element,
            compileTemplate;

        beforeEach(angular.mock.module(rbFormMessage.name));

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

        it('should trancslude its contents', function () {
            compileTemplate('<rb-form-message>Something bad happened!</rb-form-message>');
            expect(element.text()).toContain('Something bad happened!');
        });

        describe('root element', function () {
            it('should default to .is-invalid state', function () {
                compileTemplate('<rb-form-message>Something bad happened!</rb-form-message>');
                expect(element.hasClass('is-invalid')).toBe(true);
            });
        });

    });
});
