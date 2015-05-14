define([
    'components/rb-check-control'
], function (rbCheckControlSelectAll) {
    describe('rb-check-control-select-all', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            element,
            compileTemplate,
            ngModel = [
                {
                    label: 'check One',
                    value: 'one'
                },
                {
                    label: 'check Two',
                    value: 'two'
                }
            ];

        beforeEach(angular.mock.module(rbCheckControlSelectAll.name));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $rootScope = _$rootScope_;
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;

            // Compile directive, apply scope and fetch new isolated scope
            compileTemplate = function (template) {
                $scope.ngModel = ngModel;
                element = $compile(template)($scope);
                $scope.$apply();
                isolatedScope = element.isolateScope();
            };
        }));

        describe('change', function () {
            beforeEach(function () {
                compileTemplate('<rb-check-control-select-all></rb-check-control-select-all>');
                spyOn(isolatedScope, 'checkAll');
            });

            it('should check all if the title is checked', function () {
                isolatedScope.master = true;
                isolatedScope.change();

                expect(isolatedScope.checkAll).toHaveBeenCalledWith(true);
            });

            it('should un check all if the title is not checked', function () {
                isolatedScope.master = false;
                isolatedScope.change();

                expect(isolatedScope.checkAll).toHaveBeenCalledWith(false);
            });
        });

        describe('check all', function () {
            beforeEach(function () {
                compileTemplate('<rb-check-control-select-all ng-model="ngModel"></rb-check-control-select-all>');
            });

            it('should set all checkboxes as checked', function () {
                isolatedScope.checkAll(true);

                expect(ngModel[0].checked).toBe(true);
                expect(ngModel[1].checked).toBe(true);
            });

            it('should set all checkboxes as un checked', function () {
                isolatedScope.checkAll(false);

                expect(ngModel[0].checked).toBe(false);
                expect(ngModel[1].checked).toBe(false);
            });
        });

        describe('indeterminate', function () {
            beforeEach(function () {
                compileTemplate('<rb-check-control-select-all ng-model="ngModel"></rb-check-control-select-all>');
            });

            it('should be false if all checked', function () {
                ngModel[0].checked = true;
                ngModel[1].checked = true;

                var input = isolatedScope.update();

                expect(input[0].indeterminate).toBe(false);
            });

            it('should be false if all clear', function () {
                ngModel[0].checked = false;
                ngModel[1].checked = false;

                var input = isolatedScope.update();

                expect(input[0].indeterminate).toBe(false);
            });

            it('should be true any are checked', function () {
                ngModel[0].checked = false;
                ngModel[1].checked = true;

                var input = isolatedScope.update();

                expect(input[0].indeterminate).toBe(true);
            });
        });
    });
});
