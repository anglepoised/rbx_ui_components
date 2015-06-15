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
                    label: 'One',
                    value: 'one'
                },
                {
                    label: 'Two',
                    value: 'two'
                },
                {
                    label: 'Three',
                    value: 'three'
                }
            ];

        beforeEach(angular.mock.module(
            rbCheckControl.name
        ));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
            $scope = _$rootScope_.$new({});

            compileTemplate = function (template) {
                element = $compile(template)($scope);
                $scope.$apply();
                isolatedScope = element.isolateScope();
            };
        }));

        describe('option', function () {
            it('should render three inputs with correct values', function () {
                $scope.options = options;
                compileTemplate('<rb-check-control-group options="options" ng-model="model"></rb-check-control-group>');

                var inputs = element.find('input');

                expect(inputs.length).toBe(3);
                expect(inputs.eq(0).attr('value')).toBe('one');
                expect(inputs.eq(1).attr('value')).toBe('two');
                expect(inputs.eq(2).attr('value')).toBe('three');
            });

            it('should render three labels with correct values', function () {
                $scope.options = options;
                compileTemplate('<rb-check-control-group options="options" ng-model="model"></rb-check-control-group>');

                var labels = element.find('label');

                expect(labels.eq(0).html()).toContain('One');
                expect(labels.eq(1).html()).toContain('Two');
                expect(labels.eq(2).html()).toContain('Three');
            });
        });

        describe('columns', function () {
            it('should set the group to display in columns to be 2', function () {
                $scope.options = options;

                compileTemplate('<rb-check-control-group options="options" ng-model="model" columns="2">' +
                    '</rb-check-control-group>');

                var groupBody = angular.element(element.find('div')[1]);

                expect(groupBody.hasClass('u-columnCount2')).toBeTruthy();
            });

            it('should set the group to display in columns to be 3', function () {
                $scope.options = options;

                compileTemplate('<rb-check-control-group options="options" ng-model="model" columns="3">' +
                    '</rb-check-control-group>');

                var groupBody = angular.element(element.find('div')[1]);

                expect(groupBody.hasClass('u-columnCount3')).toBeTruthy();
            });
        });

        describe('model binding', function () {

            it('should check any values in ngModel', function () {
                // Before render
                $scope.options = options;
                $scope.ngModel = ['two'];
                compileTemplate(
                    '<rb-check-control-group options="options" ng-model="ngModel"></rb-check-control-group>'
                );

                var inputs = element.find('input');
                expect(inputs.eq(1).attr('checked')).toBe('checked');
            });

            it('should update checked when ngModel changes', function () {
                $scope.options = options;
                $scope.ngModel = [];
                compileTemplate(
                    '<rb-check-control-group options="options" ng-model="ngModel"></rb-check-control-group>'
                );

                //After render
                $scope.ngModel.push('one');
                $scope.$apply();

                var inputs = element.find('input');
                expect(inputs.eq(0).attr('checked')).toBe('checked');
            });

            it('should only have one instance of a value in the model', function () {
                // Before render
                $scope.ngModel = [];
                $scope.options = [
                    {
                        label: 'One',
                        value: 'one'
                    },
                    {
                        label: 'One One',
                        value: 'one'
                    },
                    {
                        label: 'Two',
                        value: 'two'
                    }
                ];
                compileTemplate(
                    '<rb-check-control-group options="options" ng-model="ngModel"></rb-check-control-group>'
                );

                isolatedScope.options[0].checked = true;
                isolatedScope.options[1].checked = true;
                $scope.$apply();

                expect($scope.ngModel).toEqual(['one']);
            });
        });

        describe('checkbox state', function () {

            it('should update model when state changes', function () {
                // Before render
                $scope.ngModel = [];
                $scope.options = [
                    {
                        label: 'One',
                        value: 'one'
                    },
                    {
                        label: 'Two',
                        value: 'two'
                    }
                ];
                compileTemplate(
                    '<rb-check-control-group options="options" ng-model="ngModel"></rb-check-control-group>'
                );

                isolatedScope.options[0].checked = true;
                $scope.$apply();

                expect($scope.ngModel).toEqual(['one']);
            });

            it('should update model when state changes and preseve model from other groups', function () {
                // Before render
                $scope.ngModel = ['three'];
                $scope.options = [
                    {
                        label: 'One',
                        value: 'one'
                    },
                    {
                        label: 'Two',
                        value: 'two'
                    }
                ];
                compileTemplate(
                    '<rb-check-control-group options="options" ng-model="ngModel"></rb-check-control-group>'
                );

                isolatedScope.options[0].checked = true;
                $scope.$apply();

                expect($scope.ngModel).toEqual(['three', 'one']);
            });

            it('should update model and not remove values from other checkbox groups', function () {
                // Before render
                $scope.ngModel = ['test'];
                $scope.options = [
                    {
                        label: 'One',
                        value: 'one'
                    },
                    {
                        label: 'Two',
                        value: 'two'
                    }
                ];
                compileTemplate(
                    '<rb-check-control-group options="options" ng-model="ngModel"></rb-check-control-group>'
                );

                // Simulate model changing externally and removing something that was checked before.
                isolatedScope.options[0].checked = true;
                $scope.$apply();
                $scope.ngModel = ['test'];
                isolatedScope.options[0].checked = false;
                isolatedScope.options[1].checked = true;
                $scope.$apply();

                expect($scope.ngModel).toEqual(['test', 'two']);
            });
        });
    });
});
