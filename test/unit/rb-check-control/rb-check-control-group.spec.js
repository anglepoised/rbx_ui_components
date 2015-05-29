define([
    'components/rb-check-control'
], function (rbCheckControl) {
    describe('rb-check-control-group', function () {

        var $compile,
            $rootScope,
            $scope,
            compileTemplate,
            element,
            isolatedScope,
            options = [
                {
                    checked: false,
                    label: 'One',
                    value: 'one'
                },
                {
                    checked: true,
                    label: 'Two',
                    value: 'two'
                },
                {
                    checked: true,
                    label: 'Three',
                    value: 'three'
                }
            ],
            ngModel = [];

        beforeEach(angular.mock.module(
            rbCheckControl.name
        ));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
            $scope = _$rootScope_.$new({});

            compileTemplate = function (template) {
                $scope.options = options;
                $scope.ngModel = ngModel;
                element = $compile(template)($scope);
                $scope.$apply();
                isolatedScope = element.isolateScope();
            };
        }));

        describe('checkedOptions', function () {
            beforeEach(function () {
                compileTemplate('<rb-check-control-group options="options" ng-model="ngModel">' +
                    '</rb-check-control-group>');
            });

            it('should return an array with two items', function () {
                expect($scope.ngModel.length).toBe(2);
            });

            it('should contain string values', function () {
                expect($scope.ngModel[0]).toBe('two');
                expect($scope.ngModel[1]).toBe('three');
            });
        });
    });
});
