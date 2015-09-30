define([
    'ui-components/rb-select-control'
], function (rbSelectControl) {
    describe('rb-select-control', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            element,
            compileTemplate;

        beforeEach(angular.mock.module(rbSelectControl.name));

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

        describe('', function () {
            it('should ', function () {
                compileTemplate('<rb-select-control></rb-select-control>');
            });
        });

        describe('with size', function () {

            it('should be a small select control if small size attr is supplied',
                inject(function ($compile, $rootScope) {
                    var select = angular.element('<rb-select-control size="small"></rb-select-control>'),
                        element = $compile(select)($rootScope.$new());
                    $rootScope.$apply();
                    expect(select.hasClass('SelectControl--small')).toBe(true);
                }));
        });

        describe('disable dynamical', function () {

            it('should be a small select control if small size attr is supplied',
                inject(function ($compile, $rootScope) {
                    var temp = '<rb-select-control is-dynamically-disabled="isDisabled"></rb-select-control>',
                        select = angular.element(temp),
                        element = $compile(select)($rootScope.$new());
                    $rootScope.isDisabled = true;
                    $rootScope.$apply();
                    expect(select.find('select')[0].getAttribute('disabled')).toBe('disabled');
                }));
        });

    });
});
