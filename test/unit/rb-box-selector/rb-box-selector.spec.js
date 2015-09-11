define([
    'ui-components/rb-box-selector'
], function (rbBoxSelector) {
    describe('rb-box-selector', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            element,
            selections,
            compileTemplate;

        beforeEach(angular.mock.module(rbBoxSelector.name));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $rootScope = _$rootScope_;
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;
            selections = [{
                title: 'one',
                body: 'one body',
                value: 'value1'
            }, {
                title: 'two',
                body: 'two body',
                value: 'value2'
            }, {
                title: 'three',
                body: 'three body',
                value: 'value3'
            }];

            // Compile directive, apply scope and fetch new isolated scope
            compileTemplate = function (template) {
                element = $compile(template)($scope);
                $scope.$apply();
                isolatedScope = element.isolateScope();
            };

            $scope.selections = selections;
            $scope.myModel = $scope.selections[1];
            compileTemplate('<rb-box-selector selections="selections" ng-model="myModel"></rb-box-selector>');
        }));

        describe('rb-box-selector', function () {

            it('should have 3 options', function () {
                expect(element.find('li').length === 3).toBe(true);
                expect(element.find('li').length === 4).toBe(false);
            });

            it('should have the correct active item', function () {
                expect(angular.element(element.find('li')[0]).hasClass('is-active')).toBe(false);
                expect(angular.element(element.find('li')[1]).hasClass('is-active')).toBe(true);
                expect(angular.element(element.find('li')[2]).hasClass('is-active')).toBe(false);
            });

            it('should update the model when clicked', function () {
                expect($scope.myModel ===  $scope.selections[1]).toBe(true);
                angular.element(element.find('li')[0]).triggerHandler('click');

                expect(angular.element(element.find('li')[0]).hasClass('is-active')).toBe(true);
                expect(angular.element(element.find('li')[1]).hasClass('is-active')).toBe(false);

                expect($scope.myModel ===  $scope.selections[0]).toBe(true);
            });

            it('should contain the right text', function () {
                var firstItem = angular.element(element.find('li')[0]);
                expect(firstItem.html()).toContain($scope.selections[0].title);
                expect(firstItem.html()).toContain($scope.selections[0].body);
            });

        });

    });
});
