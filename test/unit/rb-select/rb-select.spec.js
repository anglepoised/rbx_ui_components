define([
    'components/rb-select'
], function (rbSelect) {
    describe('rb-select', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            element,
            compileTemplate;

        beforeEach(angular.mock.module(rbSelect.name));

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

            $scope.selected = null;
            $scope.items = [
                {
                    id: 1,
                    name: 'Volvo'
                },
                {
                    id: 2,
                    name: 'Audi'
                },
                {
                    id: 3,
                    name: 'BMW'
                },
                {
                    id: 4,
                    name: 'Mercedes'
                }
            ];
        }));

        it('should set a placeholder', function () {
            var optionEle;
            compileTemplate('<rb-select placeholder="My Placeholder"></rb-select>');

            optionEle = element.find('option');

            expect(optionEle[0].innerHTML).toBe('My Placeholder');
        });

        it('should output items', function () {
            var optionEle,
                firstOption;

            compileTemplate('<rb-select items="items" value="name"></rb-select>');

            optionEle = element.find('option');
            firstOption = angular.element(optionEle[0]);

            expect(optionEle.length).toBe(4);
            expect(firstOption.html()).toBe('Volvo');
        });
    });
});
